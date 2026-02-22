const LocalStorageManager = (() => {
    var local_storage_prefix = "shopify";

    saveToLocalStorage = (name, value) => {
        // console.debug(`Shoplytics tracking: saveToLocalStorage() was called with name: ${name} and value: ${value}`);
        return localStorage.setItem(local_storage_prefix + '_' + name, JSON.stringify(value));
    }

    getFromLocalStorage = (name) => {
        return JSON.parse(localStorage.getItem(local_storage_prefix + '_' + name));
    }

    clear = () => {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key.startsWith(local_storage_prefix)) {
                localStorage.removeItem(key);
            }
        }

    }

    return {
        saveToLocalStorage: saveToLocalStorage,
        getFromLocalStorage: getFromLocalStorage,
        clear: clear
    }
})();

const ShoplyticsTrackerHelper = {
    /**
      * Parses float from currency string and saves the currency type to local storage
      *
      * @param {string} currencyString
      * @returns
      */
    parseCurrency: (currencyString) => {
        if (typeof currencyString == 'undefined' || currencyString.length == 0 || currencyString === null) return null;

        let detectedCurrency = "EUR"; // EUR is default
        if (currencyString.includes("Ã‚Â£")) {
            detectedCurrency = "GBP";
        } else if (currencyString.includes("$")) {
            detectedCurrency = "USD";
        } else if (currencyString.includes("CHF")) {
            detectedCurrency = "CHF";
        }

        // Assuming LocalStorageManager is defined elsewhere in your code
        LocalStorageManager.saveToLocalStorage("currency", detectedCurrency);

        console.log('sl1: ' + currencyString);
        console.log('sl2: ' + detectedCurrency);

        let cleanedString = currencyString.replace(/[^0-9\.,]/g, '');
        let commaCount = (cleanedString.match(/,/g) || []).length;
        let dotCount = (cleanedString.match(/\./g) || []).length;

        if (commaCount > 1 && dotCount === 1) {
            cleanedString = cleanedString.replace(/\./g, '');
            cleanedString = cleanedString.replace(/,/g, '.');
        } else if (commaCount === 1 && dotCount > 1) {
            cleanedString = cleanedString.replace(/,/g, '');
        } else if (commaCount === 1 && dotCount === 0) {
            cleanedString = cleanedString.replace(/,/g, '.');
        } else if (commaCount === 0 && dotCount === 1) {

        } else if (commaCount === 1 && dotCount === 1) {
            if (cleanedString.indexOf(',') > cleanedString.indexOf('.')) {
                cleanedString = cleanedString.replace(/\./g, '');
                cleanedString = cleanedString.replace(/,/g, '.');
            } else {
                cleanedString = cleanedString.replace(/,/g, '');
            }
        }

        let floatValue = parseFloat(cleanedString);

        console.log(`Original: ${currencyString}, Converted: ${floatValue}`);

        return floatValue;

        // Remove 0 with , before
        // currencyString = currencyString.replace(/(\.00|,00)/g, '');

        // // Remove all letters
        // currencyString = currencyString.replace(/[a-zA-Z]/g, '');

        // // Remove currency signs for EUR, USD, GBP AND CHF
        // currencyString = currencyString.replace(/(Ã¢â€šÂ¬|Ã‚Â£|\$|CHF)/g, '');

        // // Remove all non-numeric characters and dots
        // currencyString = currencyString.replace(/[^0-9\.\,]/g, '');

        // // Remove all dots
        // currencyString = currencyString.replace(/\./g, '');

        // // Replace ,\d\d with .\d\d
        // currencyString = currencyString.replace(/,(\d\d)/g, '.$1');

        // // Convert the string to a float
        // let number = parseFloat(currencyString);

        // if (isNaN(number)) { // Check if the result is a number
        //     console.debug(`Shoplytics tried to parse currency but failed. CurrencyString: ${currencyString}`);
        //     return null;
        // }

        // // Return the rounded number
        // return number;
    },

    /**
     * Generates a random transaction id
     *
     * @returns {string} transaction_id
     */
    generateTransactionID: () => {
        var transaction_id = "";
        var possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 20; i++) {
            transaction_id += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        }

        return transaction_id;
    },

    /**
     * Updates the browsed_ids array in local storage
     *
     * @param {int} productID
     */
    updateBrowsedIds: (productID, productName) => {
        let browsedIds = LocalStorageManager.getFromLocalStorage('browsed_ids') || [];
        let product = {
            id: productID,
            title: productName,
        };
        if (!browsedIds.some(item => item.id === product.id)) {
            browsedIds.push(product);
        }
        LocalStorageManager.saveToLocalStorage('browsed_ids', browsedIds);
    },

    /**
     * Adds the product to the cart and syncs it to the local storage
     * @param {Object} item
     */
    addToCart: (item) => {
        let cartItems = LocalStorageManager.getFromLocalStorage('cart_items') || [];
        let itemExists = false;

        // Check if the item exists and update its quantity
        cartItems = cartItems.map((cartItem) => {
            if (cartItem.item_id === item.item_id) {
                itemExists = true;
                return { ...cartItem, quantity: cartItem.quantity + item.quantity };
            }
            return cartItem;
        });

        // If the item doesn't exist, add it to the cart
        if (!itemExists) {
            cartItems.push(item);
        }

        LocalStorageManager.saveToLocalStorage('cart_items', cartItems);
    },

    /**
     * Syncs cart_items with the new items found in the cart
     * @param {Object[]} newItems
     * @returns {Object[]} cartItems
     */
    syncCart: (newItems) => {
        let localStorageProducts = LocalStorageManager.getFromLocalStorage('cart_items') || [];

        // Sync cartItems and localStorageProducts (quantity only)
        localStorageProducts = localStorageProducts.filter(lp => newItems.some(ci => ci.item_id === lp.item_id));
        newItems.forEach(ci => {
            let lp = localStorageProducts.find(lp => lp.item_id === ci.item_id);
            if (lp) {
                if (typeof ci.quantity !== 'undefined') {
                    lp.quantity = parseInt(ci.quantity);
                }
            } else {
                localStorageProducts.push(ci);
            }
        });

        // Update localStorage
        LocalStorageManager.saveToLocalStorage('cart_items', localStorageProducts);
        return localStorageProducts;
    }
};

const ShoplyticsDataLayer = {
    singleDetailView: (dataLayerObject) => {
        if (!("tracking_provider" in dataLayerObject)) {
            dataLayerObject.tracking_provider = "shoplytics.de";
        }
        window.dataLayer.push(dataLayerObject);
        console.debug('Shoplytics tracking: singleDetailView() was called with dataLayerObject', dataLayerObject);
    },

    addToCart: (dataLayerObject) => {
        if (!("tracking_provider" in dataLayerObject)) {
            dataLayerObject.tracking_provider = "shoplytics.de";
        }
        window.dataLayer.push(dataLayerObject);
        console.debug('Shoplytics tracking: addToCart() was called with dataLayerObject', dataLayerObject);
    },

    beginCheckout: (dataLayerObject) => {
        if (!("tracking_provider" in dataLayerObject)) {
            dataLayerObject.tracking_provider = "shoplytics.de";
        }
        window.dataLayer.push(dataLayerObject);
        console.debug('Shoplytics tracking: beginCheckout() was called with dataLayerObject', dataLayerObject);
    },

    viewList: (dataLayerObject) => {
        if (!("tracking_provider" in dataLayerObject)) {
            dataLayerObject.tracking_provider = "shoplytics.de";
        }
        window.dataLayer.push(dataLayerObject);
        console.debug('Shoplytics tracking: viewList() was called with dataLayerObject', dataLayerObject);
    },

    purchase: (dataLayerObject) => {
        if (!("tracking_provider" in dataLayerObject)) {
            dataLayerObject.tracking_provider = "shoplytics.de";
        }
        window.dataLayer.push(dataLayerObject);
        console.debug('Shoplytics tracking: purchase() was called with dataLayerObject', dataLayerObject);
    },

    userProperties: (dataLayerObject) => {
        if (!("tracking_provider" in dataLayerObject)) {
            dataLayerObject.tracking_provider = "shoplytics.de";
        }
        window.dataLayer.push(dataLayerObject);
        console.debug('Shoplytics tracking: userProperties() was called with dataLayerObject', dataLayerObject);
    }
}

const ShopifyDataLayerTracker = (() => {

    let currentPage = null;
    let productID = null;

    this.getCartItems = () => {
        let items = document.querySelectorAll('table.cart-items tbody tr');

        if (items.length === 0) {
            items = document.querySelectorAll('table.product-table tr.product');
        }

        if (items.length === 0) {
            items = document.querySelectorAll('.cart__form-items .cart__form-item');
        }

        if (items.length === 0) {
            items = document.querySelectorAll('.cart-item-list .cart-item');
        }

        if (items.length === 0) {
            items = document.querySelectorAll('#mini-cart-form .line-item');
        }

        return items;
    }

    this.processCartItem = (item, browsedIds) => {
        console.debug('Shoplytics - processCartItem()', item);
        let productObject = {};

        let productName = item.querySelector('.grid-view-item__title, .product-item-meta__title, .cart__form-item-title, .cart-item__name, .cart-item__title .product__description__name');
        let productQuantity = item.querySelector('.quantity__input, input[type=number], .quantity-selector__input, .product-thumbnail__quantity');
        let singlePrice = item.querySelector('.cart__price-wrapper, span.price, .cart__form-item-price, div.product-option, .product__price, .cart-item__price');

        if (productName) {
            productObject.item_name = productName.innerText;

            if (browsedIds) {
                browsedIds.forEach((item) => {
                    if (item.title === productObject.item_name) {
                        productObject.item_id = item.item_id;
                    }
                });
            }
        } else {
            console.debug('Shoplytics tracking: Could not find product name in cart, item:', item);
            return null;
        }

        if (productQuantity) {
            productObject.quantity = parseInt(productQuantity.value);
        } else {
            console.debug('Shoplytics tracking: Could not find product quantity, item:', item);
            return null;
        }

        if (singlePrice) {
            productObject.price = ShoplyticsTrackerHelper.parseCurrency(singlePrice.innerText);
        } else {
            console.debug('Shoplytics tracking: Could not find product price in cart, item:', item);
            return null;
        }

        productObject.total = productObject.price * productObject.quantity;

        console.log('Shoplytics processCartItem() finished', productObject);
        return productObject;
    }

    this.getShopifyPurchaseHash = () => {
        let url = window.location.href;
        if (url.includes('thank_you')) {
            const parts = url.split('/');
            const index = parts.indexOf('thank_you');

            if (index > 0) {
                return parts[index - 1];
            }
        }

        return false;
    }

    this.refreshProductsFromCart = () => {
        if (currentPage !== 'cart') {
            const productsTable = document.querySelector('table.product-table, .cart-item-list, #mini-cart-form');
            if (!productsTable) {
                throw new Error('productsTable DOM element not found, please report this bug to Shoplytics');
            }
        }

        let products = [];
        const browsedIds = LocalStorageManager.getFromLocalStorage('browsed_ids');

        let cartItems = getCartItems();
        if (cartItems && cartItems.length > 0) {
            cartItems.forEach((item) => {
                let product = processCartItem(item, browsedIds);
                if (product) {
                    products.push(product);
                }
            });
        }

        console.log('Shoplytics - refreshProductsFromCart()', products);

        ShoplyticsTrackerHelper.syncCart(products);
    }

    this.getOrderId = () => {
        // get value from .os-order-number, remove # and non integer chars
        let orderNumber = document.querySelector('.os-order-number');
        if (!orderNumber) {
            throw new Error('orderNumber not found, please report this bug to Shoplytics');
        }
        orderNumber = orderNumber.innerText;
        orderNumber = orderNumber.replace('BestÃƒÂ¤tigungsnr.', '');
        orderNumber = orderNumber.trim();
        return orderNumber;
    }

    /**
     * Retrieves the current page information based on global variable '__st' and the current URL.
     * Updates global variables 'currentPage' and 'productID' accordingly.
     * If '__st' is undefined or does not contain the necessary information, 'currentPage' is set based on URL content.
     * Outputs the current page to the console.
     */
    this.getCurrentPage = () => {
        if (typeof __st !== "undefined" && __st) {
            currentPage = __st.p || null;

            if (__st.hasOwnProperty('rid')) {
                productID = __st.rid;
            } else {
                let variantSku = document.querySelector('.variant-sku');
                if (variantSku) {
                    productID = variantSku.textContent.replace('SKU: ', '');
                }
            }

            // Check if 'collections' is in the URL and __st.p does not exist
            if (!currentPage && window.location.href.includes('collections')) {
                currentPage = 'collection';
            }

            if (!currentPage && window.location.href.includes('products/')) {
                currentPage = 'product';
            }

            // Checking for checkout page conditions
            if (!currentPage && __st.t === 'checkout') {
                currentPage = (window.location.href.includes('checkouts') && window.location.href.includes('thank_you'))
                    ? 'purchase_complete'
                    : 'checkout';
            }
        }

        console.debug('Shoplytics DataLayer tracking: currentPage: ' + currentPage);
    };


    this.getSingleViewProductName = () => {
        let productNameDOM = document.querySelector('.product-title, .product-single__title');
        if (!productNameDOM) {
            productNameDOM = document.querySelector(
                "h1.product-single__title, h1.product__title, .product__title h1, h1"
            );
        }
        if (!productNameDOM) {
            throw new Error('productNameDOM not found, please report this bug to Shoplytics');
        }

        // console.log('Shoplytics DL - Page: ' + currentPage);

        let productName = productNameDOM.innerText;
        return productName;
    }

    /**
     * Attaches a click event listener to the document body to handle 'add to cart' actions.
     * This function uses event delegation to ensure that dynamically added 'add to cart' buttons
     * are also covered. When a matching button is clicked, it constructs and sends product and cart
     * data to Shoplytics for tracking purposes.
     */
    this.trackAddToCartBtn = () => {
        /**
         * Event listener for click events on the document body.
         * It checks if the clicked element is an 'add to cart' button and processes the cart data accordingly.
         *
         * @param {Event} e - The click event object.
         */
        document.body.addEventListener('click', (e) => {
            let addToCartBtn = e.target.matches('.product-form__submit, button.add-to-cart, #AddToCart span, #BuyButton, button.product-form__cart-submit, .product-single button[type=submit], .product button[type=submit], .add-to-cart, button.ProductForm__AddToCart');

            if (!addToCartBtn) {
                console.debug('Shoplytics tracking: Clicked element is not an add to cart button');
                return;
            }

            let currency = LocalStorageManager.getFromLocalStorage("currency");

            // Get quantity
            let productQuantity = document.querySelector('input[name="quantity"]');
            productQuantity = productQuantity ? parseInt(productQuantity.value) : 1;

            // Get other attributes
            let productName = getSingleViewProductName();
            let price = getDetailViewPrice();
            let productCategory = getShopifyCategory();

            // Build product object
            let product = {
                item_name: productName,
                item_id: productID,
                quantity: productQuantity,
                price: price,
            }
            if (productCategory) {
                product.category = productCategory;
            }

            // Build the dataLayer object
            let dataLayerObject = {
                event: "add_to_cart",
                ecommerce: {
                    currency: currency,
                    items: [product]
                },
            };

            // Send the dataLayer object
            ShoplyticsDataLayer.addToCart(dataLayerObject);
            ShoplyticsTrackerHelper.addToCart(product);
        });
    }

    /**
     * Waits for the Shopify.checkout object to become available within a specified timeframe.
     *
     * @param {number} [maxWaitTime=2000] The maximum time to wait for Shopify.checkout in milliseconds.
     * @returns {Promise<boolean>} A promise that resolves to true if Shopify.checkout becomes available, and false if the time elapses without it appearing.
     */
    this.waitForShopifyCheckout = (maxWaitTime = 2000) => {
        return new Promise((resolve, reject) => {
            let intervalId;
            const checkExistence = () => {
                if (Shopify && Shopify.checkout && typeof Shopify.checkout === 'object') {
                    clearInterval(intervalId);
                    clearTimeout(timeoutId);
                    resolve(true);
                }
            };

            intervalId = setInterval(checkExistence, 100); // Check every 100ms

            const timeoutId = setTimeout(() => {
                clearInterval(intervalId);
                resolve(false);
            }, maxWaitTime);
        });
    }

    this.getDetailViewPrice = () => {
        let priceDom = document.querySelector("sale-price.h3, .price_range, .price-list, .price-area, .price__current, .product-price__current-price, .product-single__price, .product-price--original, .psinglePrice, .price-item--last, .product__price, .price-item--regular, .price-list sale-price, .price-list .price .money, .ProductMeta__Price");

        if (!priceDom) {
            throw new Error('priceDom not found, please report this bug to Shoplytics');
        }

        return ShoplyticsTrackerHelper.parseCurrency(priceDom.innerText);
    }

    this.getShopifyCategory = () => {
        // First, try to get the category from the breadcrumb links (Plan A)
        let aElements = document.querySelectorAll('.page-width.breadcrumbs a');
        if (aElements.length > 1) {  // Check if there are at least two <a> elements
            return aElements[1].innerText;
        }

        // If Plan A fails, fallback to getting the category from the JSON-LD script tag (Plan B)
        const scriptTags = document.querySelectorAll('script[type="application/ld+json"]');
        for (const tag of scriptTags) {
            try {
                const jsonData = JSON.parse(tag.textContent);
                if (jsonData && jsonData.category) {
                    return jsonData.category; // Return the category value from JSON-LD
                }
            } catch (e) {
                console.error('Error parsing JSON-LD script tag:', e);
            }
        }

        // Log and return null if no category was found by either method
        console.debug('Shoplytics tracking: Could not find category for this product');
        return null;
    };

    this.singleDetailPage = () => {
        let productName = getSingleViewProductName();
        let price = getDetailViewPrice();
        let cat = getShopifyCategory();

        if (productName.length > 0) {
            // Update browsed ids
            if (typeof __st !== "undefined") {
                ShoplyticsTrackerHelper.updateBrowsedIds(__st.rid, productName);
            }

            // Build product object
            let product = {
                item_name: productName,
                item_id: productID,
            }
            if (price) {
                product.price = price;
            }
            if (cat) {
                product.item_category = cat;
            }
            let dataLayerObject = {
                event: "view_item",
                ecommerce: {
                    items: [product]
                },
            };
            ShoplyticsDataLayer.singleDetailView(dataLayerObject);
        } else {
            console.error('Shoplytics - product not found');
        }
    }

    this.beginCheckout = () => {
        refreshProductsFromCart();

        let products = LocalStorageManager.getFromLocalStorage("cart_items");
        let currency = LocalStorageManager.getFromLocalStorage("currency");
        let gesamtsumme = null;

        if (!gesamtsumme) {
            if (products) {
                gesamtsumme = 0;
                products.forEach((product) => {
                    gesamtsumme += parseInt(product.quantity) * parseFloat(product.price);
                });
                console.log('Shoplytics new total', gesamtsumme);
            } else {
                console.debug('Shoplytics products', products);
            }
        }

        let dataLayerObj = {
            event: "begin_checkout",
            ecommerce: {
                value: gesamtsumme,
                items: products,
                currency: currency,
            }
        };
        // debug it using pretty print and json
        // console.debug(JSON.stringify(dataLayerObj, null, 2));
        ShoplyticsDataLayer.beginCheckout(dataLayerObj);
    }

    /**
     * Retrieves the Shopify checkout data from a script tag on the page.
     *
     * This function scans through script tags in the document to find a script containing
     * 'Shopify.checkout' along with 'created_at' and then parses and returns the checkout data object.
     *
     * @returns {Object|null} The parsed Shopify checkout object if found, otherwise null.
     */
    this.getShopifyCheckoutData = () => {
        if (Shopify) {
            if (Shopify.checkout && typeof Shopify.checkout === 'object') {
                let checkoutData = Shopify.checkout;
                console.debug('Shoplytics getShopifyCheckoutData - ', checkoutData);
                return checkoutData;
            } else {
                console.debug('Shoplytics - Shopify.checkout is not ok', Shopify.checkout);
            }
        } else {
            console.debug('Shopify object not loaded');
            return null;
        }
    };

    /**
     * Finish checkout process on Shopify thank you page
     */
    this.finishCheckout = () => {
        let url_hash = getShopifyPurchaseHash();
        let already_purchased = LocalStorageManager.getFromLocalStorage('shopify_purchased');
        let source = 'localStorage';
        if (already_purchased) {
            if (already_purchased.url_hash === url_hash) {
                console.debug('Shoplytics already purchased');
                return;
            }
        }

        waitForShopifyCheckout()
            .then(() => {
                let shopifyCheckoutData = getShopifyCheckoutData();
                let products = [];
                let currency = '';
                let shippingCosts = '';
                let gesamtSumme = '';
                if (shopifyCheckoutData) {
                    console.debug('Shoplytics - there is Shopify obj');
                    let user_properties = {
                        customer_province: shopifyCheckoutData.shipping_address?.province,
                        customer_city: shopifyCheckoutData.shipping_address?.city,
                        customer_country: shopifyCheckoutData.shipping_address?.country,
                        customer_zip: shopifyCheckoutData.shipping_address?.zip,
                        customer_address_1: shopifyCheckoutData.shipping_address?.address1,
                        customer_email: shopifyCheckoutData?.email,
                        customer_first_name: shopifyCheckoutData.shipping_address?.first_name,
                        customer_last_name: shopifyCheckoutData.shipping_address?.last_name,
                        customer_phone: shopifyCheckoutData.shipping_address?.phone
                    }
                    ShoplyticsDataLayer.userProperties(user_properties);
                    for(let product in Shopify.checkout.line_items) {
                        products.push({
                            item_name: Shopify.checkout.line_items[product].title,
                            item_id: Shopify.checkout.line_items[product].variant_id,
                            quantity: parseInt(Shopify.checkout.line_items[product].quantity),
                            price: ShoplyticsTrackerHelper.parseCurrency(Shopify.checkout.line_items[product].price),
                        });
                    }
                    currency = Shopify.checkout.currency;
                    shippingCosts = Shopify.checkout?.shipping_rate ? ShoplyticsTrackerHelper.parseCurrency(Shopify.checkout.shipping_rate.price) : 0;
                    gesamtSumme = ShoplyticsTrackerHelper.parseCurrency(Shopify.checkout.total_price);
                    source = 'Shopify-Object';
                } else {
                    console.debug('Shoplytics - there is no Shopify obj!!!');
                    products = LocalStorageManager.getFromLocalStorage("cart_items");
                    currency = LocalStorageManager.getFromLocalStorage("currency");
                    let gesamtsummeDOM = document.querySelector('.total-line__price.payment-due');
                    gesamtSumme = gesamtsummeDOM ? ShoplyticsTrackerHelper.parseCurrency(gesamtsummeDOM.innerText) : null;

                    refreshProductsFromCart();

                    if (!gesamtSumme) {
                        if (products) {
                            gesamtSumme = 0;
                            products.forEach((product) => {
                                gesamtSumme += parseInt(product.quantity) * parseFloat(product.price);
                            });
                        } else {
                            console.debug('Shoplytics products', products);
                        }
                    }
                }

                let dataLayerObject = {
                    event: "purchase",
                    data_source: source,
                    ecommerce: {
                        transaction_id: getOrderId(),
                        currency: currency,
                        value: gesamtSumme,
                        shipping: shippingCosts,
                        items: products,
                    },
                }
                ShoplyticsDataLayer.purchase(dataLayerObject);
                if (url_hash) {
                    dataLayerObject['url_hash'] = url_hash;
                    LocalStorageManager.saveToLocalStorage('shopify_purchased', dataLayerObject);
                }
                LocalStorageManager.clear();
            });
    }

    /**
     * Extracts product data from a given card element.
     *
     * @param {Element} card - The card element from which product data is extracted.
     * @param {number} index - The index of the card in a collection.
     * @returns {(Object|null)} An object containing product data or null if name element is not found.
     */
    this.getProductDataFromCard = (card, index) => {
        let nameElement = card.querySelector('h2, h3, .card__title, .product-name, .h6, .grid-product__title, .card__heading, .product-block__title, a.grid-view-item__title, .title, .product-card__title, .spf-product-card__title');
        let priceElement = card.querySelector('.ProductItem__Price.Price--highlight, .price__current, .product-price__item, .product-price, .product-card__price-item, .price, .ProductItem__Price, .pr_price, .price-regular, .spf-product-card__saleprice.money, .price-item');
        let category = document.querySelector('.bd-title, h1.SectionHeader__Heading.Heading.u-h1, .collection-hero__title')?.textContent.trim();
        if (!category) {
            category = document.querySelector('title')?.textContent;
        }

        let price = '';
        if (priceElement) {
            price = ShoplyticsTrackerHelper.parseCurrency(priceElement.textContent.trim());
        }

        if (!nameElement) {
            console.error('Shoplytics - name of card not found', card);
            return null;
        }

        return {
            name: nameElement.textContent.trim(),
            category: category,
            price: price,
            quantity: 1,
            index: index
        };
    };

    /**
     * Tracks a collection of products and sends data to the ShoplyticsDataLayer.
     * This function searches for product cards in a specified set of container elements
     * and collects data from each product card. It then constructs a dataLayerObject
     * and sends this data to the ShoplyticsDataLayer.
     *
     * @throws {Error} Throws an error if the product listing wrapper element is not found.
     */
    this.trackCollection = () => {
        try {
            let products = [];
            let wrapperElement = document.querySelector('.main-products-grid, .collection-grid__wrapper, #shopify-section-collection_page, #CollectionProductGrid .container .row, .product-options, .product-list, .shop__products-grid-wrap, .collection__main, .collection-and-pagination-container, .ProductListWrapper, .productList, .collection');

            if (!wrapperElement) {
                console.debug('Shoplytics collection - wrapperElement not found', wrapperElement);
                throw new Error('ShoplyticsDataLayerTracker error: could not find product listing wrapper');
            }

            let cards = wrapperElement.querySelectorAll('.col-md-4, ul.grid li, .product-link, .shop__grid-item, .grid__item, .product-block, .product-card, .grid-product, .product-wrap, .ProductItem__Wrapper, .gitem, .spf-product-card');

            if (cards.length === 0) {
                console.debug('Shoplytics collection - cards not found');
                return; // Exit the function if no cards are found
            }

            cards.forEach((card, index) => {
                try {
                    let product = getProductDataFromCard(card, index + 1);

                    if (product) {
                        products.push(product);
                    }
                } catch (e) {
                    console.error('Error processing product card: ', e.message);
                }
            });

            let item_list_name = document.querySelector('.bd-title')?.textContent.trim();
            if (!item_list_name) {
                item_list_name = document.querySelector('title')?.textContent.trim();
                if (item_list_name.includes('\n')) {
                    item_list_name = item_list_name.split('\n')[0];
                }
            }

            let dataLayerObject = {
                event: 'view_item_list',
                ecommerce: {
                    item_list_id: window.location.pathname,
                    item_list_name: item_list_name,
                    items: products
                }
            };

            ShoplyticsDataLayer.viewList(dataLayerObject);

        } catch (error) {
            console.error(error.message);
            throw error; // Rethrow the error after logging it
        }
    };

    function init() {
        getCurrentPage();
        if (currentPage === 'product') {
            trackAddToCartBtn();
            singleDetailPage();
        } else if (currentPage === 'collection') {
            trackCollection();
        } else if (currentPage == 'cart') {
            refreshProductsFromCart();

            // Check with MutationObserver if cart items change
            let domToObserve = document.querySelector('.cart.page, form.cart__contents #main-cart-items');
            console.debug('domToObserve', domToObserve);
            if (domToObserve) {
                let observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.type == 'childList') {
                            refreshProductsFromCart();
                        }
                    });
                });
                observer.observe(domToObserve, { childList: true, attributes: true, subtree: true });
            }

            // Check if .cart__submit is clicked
            document.addEventListener('click', (e) => {
                if (e.target.matches('.cart__submit, #cartCheckout')) {
                    beginCheckout();
                }
            });
        } else if (currentPage == 'purchase_complete') {
            finishCheckout();
        }

        // On checkout start
        document.addEventListener('click', (e) => {
            if (e.target.matches('button[name="checkout"], .checkout-buttons a, #mini-cart .checkout-button .cart-drawer__footer button[type=submit]')) {
                beginCheckout();
            }
        });
    }

    return {
        init: init
    }
})();

ShopifyDataLayerTracker.init();

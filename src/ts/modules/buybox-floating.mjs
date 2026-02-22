import { qs } from '../modules/utils.ts';

export const buybox_floating = (price, name, dropdown = '', buyButton = 'In den Warenkorb') => {
    let selectQuantityHtml = '';

    if (qs('#sQuantity')) {
        const selectQuantity = qs('#sQuantity').cloneNode(true);
        selectQuantity.id = 'sQuantityFloating';
        let quantity = qs('#sQuantity');
        // console.log(quantity);
        selectQuantity.options[quantity.selectedIndex].setAttribute('selected', 'selected');
        selectQuantityHtml = selectQuantity.outerHTML;
    }

    if (qs('#exampleInputAmount')) {
        const inputQuantity = qs('#exampleInputAmount').value;
        let maxQuantity = qs('#exampleInputAmount').max;
        // inputQuantity.id = 'sQuantityFloating';

        if (maxQuantity > 100) {
            maxQuantity = 100;
        }

        console.log(maxQuantity);

        selectQuantityHtml = '<select id="sQuantityFloating">';

        for (let i = 1; i <= maxQuantity; i++) {
            let selected = '';
            if (inputQuantity == i) {
                selected = ' selected="selected"';
            }
            selectQuantityHtml += '<option value="' + i + '"' + selected + '>' + i + '</option>';
        }

        selectQuantityHtml += '</select>';

        // console.log(selectQuantityHtml);
    }

    // console.log(selectQuantity);

    return `<div id="buybox-floating" class="buybox-floating has-buybox-xl floating-buybox-hidden">
        <div class="buybox-floating--inner">
            <div class="product--title has--price">
                <span class="price--default">${price}</span>
                <span class="title--default">${name}</span>
            </div>
            <div class="product--details">
                <div class="buybox--button-container block-group">
                    ${dropdown}
                    <div class="buybox--quantity">
                        <div class="select-field">
                            ${selectQuantityHtml}
                        </div>
                    </div>
                    <button class="buybox--button block btn is--primary is--icon-right is--center is--large" name="${buyButton}">
                        ${buyButton}
                        <i class="icon--arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
};

export const buybox_dropdown = (heading, dropdown) => `
    <div class="buybox--dropdown">
        <div class="text-field">
            ${heading}
        </div>
        <div class="select-field">
            ${dropdown}
        </div>
    </div>
`;

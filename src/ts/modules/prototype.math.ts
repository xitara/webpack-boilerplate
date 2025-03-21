export {};

/**
 * Extend the String prototype
 */
declare global {
    interface String {
        toFloat(stringToConvert: string): number | null;
        round(float: number, digits: number, separator: string): string;
        lz(num: number): string;
        rand(min: number, max: number): number;
    }
}

/**
 * Convert a string to a float
 *
 * @param {string} stringToConvert String to convert
 * @returns {number | null} Converted float or null
 */
String.prototype.toFloat = function (stringToConvert: string): number | null {
    if (stringToConvert === '') {
        return null;
    }

    let cleanedString = stringToConvert.replace(/[^0-9\.,]/g, '');
    let commaCount = (cleanedString.match(/,/g) || []).length;
    let dotCount = (cleanedString.match(/\./g) || []).length;

    if (commaCount > 1 && dotCount === 1) {
        cleanedString = cleanedString.replace(/\./g, '');
        cleanedString = cleanedString.replace(/,/g, '.');
    } else if (commaCount === 1 && dotCount > 1) {
        cleanedString = cleanedString.replace(/,/g, '');
    } else if (commaCount === 1 && dotCount === 0) {
        cleanedString = cleanedString.replace(/,/g, '.');
    } else if (commaCount === 1 && dotCount === 1) {
        if (cleanedString.indexOf(',') > cleanedString.indexOf('.')) {
            cleanedString = cleanedString.replace(/\./g, '');
            cleanedString = cleanedString.replace(/,/g, '.');
        } else {
            cleanedString = cleanedString.replace(/,/g, '');
        }
    }

    return parseFloat(cleanedString);
};

/**
 * Round a float to a specified number of digits
 *
 * @param {number} float Float to round
 * @param {number} [digits] Number of digits to round to
 * @param {string} [separator] Separator for decimal point
 * @returns {string} Rounded float as a string
 */
String.prototype.round = function (
    float: number,
    digits: number = 2,
    separator: string = ','
): string {
    return float.toFixed(digits).replace('.', separator);
};

/**
 * Add leading zero to a number
 *
 * @param {number} num Number to add leading zero
 * @returns {string} Number with leading zero
 */
String.prototype.lz = function (num: number): string {
    return (num < 10 ? '0' : '') + num;
};

/**
 * Generate a random number between min and max
 *
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {number} Random number
 */
String.prototype.rand = function (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

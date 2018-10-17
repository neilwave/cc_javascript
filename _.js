const _ = {
    // clamp
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    }, // inRange
    inRange(number, start, end) {
        if (end === undefined) {
            end = start; // set end equal to start
            start = 0; // set start equal to 0
        } // if end is undefined

        if (start > end) {
            let temp;
            temp = end; // new var temp set to end
            end = start; // end set to start
            start = temp; // start set to temp

        } // swap values

        if (start < number && number < end) {
            let isInRange = true;
            return isInRange;

        } else {
            isInRange = false;
            return isInRange;
        } // isInRange boolean expression
    }, //words
    words(string) {
        const words = string.split(' ');
        return words;
    }, // pad
    pad(string, length) {
        if (string.length >= length) {
            return string;
        } else {
            const startPaddingLength = Math.floor((length - string.length) / 2); // start padding calculation
            const endPaddingLength = length - string.length - startPaddingLength; // end padding calculation


            const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength); // concatenated string
            return paddedString;

        }
    }, // has
    has(object, key) {
        let hasValue;
        if (key in object) {
            hasValue = true;

        } else if (!(key in object)) {
            hasValue = false;
        }

        return hasValue;

    }, // invert
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            let originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    }, // findKey
    findKey(object, predicate) {
        for (let key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue === true) {

                return key;
            } else {
                return undefined;
            }
        }
    }, // drop
    drop(array, n) {
        let droppedArray = [];
        if (n != undefined) {
            droppedArray = array.slice(n);
        } else {
            n = 1; // if n is undefined set n to 1
            droppedArray = array.slice(n);

        };
        return droppedArray;
    }, // dropWhile
    dropWhile(array, predicate) {
        dropNumber = [];
        dropNumber = array.findIndex(function (element, index) {
            if (!predicate(element, index)) {
                return dropNumber;
            }
        });
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;

    }, // chunk
    chunk(array, size) {
        if (size === undefined) {
            size = 1;
        } // if statement

        let arrayChunks = []; // new variable = empty array

        for (let i = 0; i < array.length; i += size) {
            const arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        } // for loop
        return arrayChunks;
    }
}; // _ object



// Do not write or modify code below this line.
module.exports = _;
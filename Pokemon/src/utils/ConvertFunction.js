import { isProxy, toRaw } from 'vue';
export function convertDataProxyFunc(target) {
    let rawData = target;
    if (isProxy(rawData)) {
        rawData = toRaw(rawData);
    }
    return rawData;
}

export function convertToUpperCaseCharacter(label) {
    let result = '';
    if (label) {
        let subLabel = label.split('-');
        let arr = [];
        for (let i = 0; i < subLabel.length; i++) {
            let item = subLabel[i][0].toUpperCase() + subLabel[i].substring(1);
            arr.push(item);
        }
        if (arr.length > 0) {
            for (let j = 0; j < arr.length; j++) {
                if (j == arr.length - 1) {
                    result += arr[j];
                } else {
                    result += arr[j] + ' ';
                }
            }
        }
    }
    return result;
}

export function convertHeightPokemon(value) {
    let totalInch = (value * 10) / 2.54;
    let feet = Math.floor(totalInch / 12);
    let inch = Math.ceil(totalInch - 12 * feet);
    let inchStr = '';
    let result = [];
    if (inch < 10) {
        inchStr = '0' + inch;
    } else {
        inchStr = String(inch);
    }
    result.push(feet);
    result.push(inchStr);
    return result;
}

export function convertWeightPokemon(value) {
    let pound = Math.floor(value / 0.45359237);
    return pound / 10;
}
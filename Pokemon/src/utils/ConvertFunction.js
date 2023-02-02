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
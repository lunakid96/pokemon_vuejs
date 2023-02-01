import { isProxy, toRaw } from 'vue';
export function convertDataProxyFunc(target) {
    let rawData = target;
    if (isProxy(rawData)) {
        rawData = toRaw(rawData);
    }
    return rawData;
}
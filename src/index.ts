export function nonenumerable(target: any, key: string) {
    var value = target[ key ];

    var getter = function () {
        return value;
    };

    var setter = function (newVal: any) {
        value = newVal;
    };

    if (delete target[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: false
        });
    }
}

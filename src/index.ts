export function nonenumerable(proto: any, key: string) {
    const priv = `$${key}`;

    var getter = function () {
        return this[priv];
    };

    var setter = function (newVal: any) {
        if (!this.hasOwnProperty(priv)) {
            Object.defineProperty(this, priv, {
                value: newVal,
                enumerable: false,
                writable: true
            });
        }
        this[priv] = newVal;
    };

    if (delete proto[ key ]) {
        Object.defineProperty(proto, key, {
            get: getter,
            set: setter,
            enumerable: false
        });
    }
}

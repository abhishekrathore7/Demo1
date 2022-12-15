function MyClass() {
    let value;
    Object.defineProperty(MyClass.prototype, 'myx', {
        get() {
            return value;
        },
        set(x) {
            value = x;
        }

    })
}

const aa = new MyClass();
// const bb = new MyClass();
const bb = { ...aa };
aa.myx = 100;
console.log(bb.myx);

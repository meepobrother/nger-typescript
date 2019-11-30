import { Type } from "@nger/decorator";
export function defineToStringTag(classObject: Type<any>): void {
    if (typeof Symbol === 'function' && Symbol.toStringTag) {
        Reflect.set(classObject.prototype, Symbol.toStringTag, {
            get() {
                return classObject.name;
            }
        });
    }
}
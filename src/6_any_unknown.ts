// any

let anyVar: any = 123;
anyVar = 'string'; // any 타입은 어떤 타입이든 할당할 수 있다.

anyVar = true;
anyVar = null;
anyVar = undefined;
anyVar = [1, 2, 3];

let num: number = anyVar; // any 타입은 다른 타입으로 할당할 수 있다.
// any 타입은 타입스크립트의 타입 안정성을 무시하는 것.
// any 는 런타임 시 에러가 발생할 수 있기 때문에 사용하지 않는 것이 좋다.


// unknown

let unknownVar: unknown = 123;
unknownVar = 'string'; // any와 마찬가지로 어떤 타입이든 할당할 수 있다. 하지만, unknown은 타입 안정성을 유지한다.
num = unknownVar; // Error: unknown은 다른 타입으로 할당할 수 없다.

if (typeof unknownVar === 'number') {
    num = unknownVar; // unknown을 number로 할당할 수 있다.
}

// any와 unknown의 차이점
// any는 타입스크립트의 타입 안정성을 무시하는 것이고, unknown은 타입 안정성을 유지한다.
// any는 런타임 시 에러가 발생할 수 있기 때문에 사용하지 않는 것이 좋다.
// unknown은 타입을 확실하게 알 수 없는 경우에 사용하기 때문에 any보다는 unknown을 사용하는 것이 좋다.
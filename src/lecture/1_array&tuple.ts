// Array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['a', 'b', 'c'];
let boolArr: boolean[] = [true, false, true];

// 타입에서 a가 1이고 b가 2인 객체 배열인데, 다른 값을 넣으면 에러가 발생한다.
// let objArr: { a: 1, b: 2 }[] = [{ a: 1, b: 2 }, { a: 2, b: 3 }];

let multiArr: (number | boolean)[] = [1, 2, true];

// Error
// let multiArr2: number[] | boolean[] = [1, 2, true];

// 다차원 배열
let doubleArr: number[][] = [[1, 2], [3, 4], [5, 6]];


/*
 Tuple: 길이와 타입이 고정된 배열, 자바스크립트에서는 지원하지 않는다.
 컴파일되면 튜플은 결국 배열로 변환된다.
 */
let tuple: [number, string] = [0, 'a'];
// tuple = [0, 1]; // Error

let tup2: [number, string, boolean] = [1, 'a', true];

tup2.push(1); // 에러를 보여주지 않음. 튜플은 길이가 고정되어 있지만, push를 통해 길이를 늘릴 수 있다. 주의 필요.
console.log(tup2); // [1, 'a', true, 1]

/* ===================== Tuple 타입 활용 ===================== */
// 타입이 없기 때문에 순서가 달라도 에러가 없다.
const users = [
    ['chris', 1],
    ['ann', 2],
    [3, 'tom'],
];

// 튜플 타입을 지정하면 순서가 달라지면 에러가 발생한다.
const users2: [string, number][] = [
    ['chris', 1],
    ['ann', 2],
    // [3, 'tom'],
];
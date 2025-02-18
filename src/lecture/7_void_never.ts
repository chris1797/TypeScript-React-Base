// void: void는 어떤 타입도 반환하지 않는다.

function returnVoid(message: string): void {
  console.log(message);

  return undefined;
}

returnVoid('리턴이 없다.'); // undefined
// void는 어떤 타입도 반환하지 않는다. 따라서 변수에 할당할 수 없다.


// never: never는 절대 발생하지 않는 값의 타입을 나타낸다.

function error(message: string): never {
  throw new Error(message); // Error가 발생하면 함수가 종료되기 때문에 never를 반환한다.
}

function infiniteLoop(): never {
  while (true) {
    // do something
  }
}

let a: never;
// a = 123; // Error
// a = (() => {}); // Error
// a = ""; // Error
// a = undefined; // Error
// a = null; // Error
// a = new Error(); // Error

// never는 어떤 타입도 할당할 수 없다. never는 모든 타입의 subtype이다. 하지만, never에는 그 어떤 것도 할당할 수 없다.
// 하지만, never에는 그 어떤 것도 할당할 수 없다. any조차도 never에는 할당할 수 없다.
// never는 리턴된다는 것 자체가 불가능한 경우에 사용한다. 예를 들어, 무한루프, 에러를 던지는 경우 등이 있다.


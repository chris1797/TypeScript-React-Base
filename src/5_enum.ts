// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum은 TypeScript에서 JavaScript로 컴파일될 때, 객체로 변환된다.
// enum은 객체이기 때문에, 값을 할당하는 것처럼 사용할 수 있다.

enum Role {
    // 아무 할당도 하지 않으면 위에서 부터 0부터 1씩 증가하는 숫자를 할당한다. 이를 '숫자 열거형 Enum'이라고 한다.
    Admin = 'Admin',
    User = 'User'
}

enum Language {
    English = 'en',
    Korean = 'ko'
}

const user1 = {
    name: 'Chris',
    role: Role.Admin,
    locale: Language.Korean
}

const user2 = {
    name: 'Tom',
    role: Role.User,
    locale: Language.English
}

// role이라는 프로퍼티에는 Admin, User 두가지 값만 들어갈 수 있다.




// union type
type Status = "success" | "fail";


// 인터페이스는 병합이 가능하다.
interface User {
    name: string;
    age: number;
    status: Status;
}

interface User {
    email: string;
}

const a = 1;
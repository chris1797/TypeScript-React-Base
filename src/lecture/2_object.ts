/*
 object types

 자바의 이름(명목적) 기반 타입시스템(Named Based)과 달리, 타입스크립트는 구조 기반 타입시스템(Property Based) 언어이다.
 */
let user :{
    id?: number; // ?를 붙이면 선택적 프로퍼티가 된다. (Optional Property)
    name: string;
} = {
    id: 1,
    name: 'Chris'
}

let config :{
    readonly apiKey: string;
} = {
    apiKey: "ABCDEF"
}

// apiKey는 수정이 가능하면 안되는데? 에러가 발생하지 않는다. 그럴때 사용하는 것이 readonly.
// config.apiKey = "123456";


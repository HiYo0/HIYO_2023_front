// p.276 : Math 객체
// 0 ~ 1 사이 난수
const num = Math.random(); 

console.log("랜덤한 숫자")
console.log("0-1 사이의 랜덤한 숫자 : ",num);
console.log()

// 0 ~ 10 사이 난수
console.log('0 ~ 10 사이 난수 : ',num*10);

// 0 ~ 50 사이 난수
console.log('0 ~ 50 사이 난수 : ',num*50);

// 0 ~ 51 미만 사이 난수
console.log('1 ~ 50 사이 난수 : ',num*50 + 1);

// -5 ~ 5 사이 난수
console.log('-5 ~ 5 사이 난수 : ',num*10 - 5);

// -25 ~ 25미만 사이 난수
console.log('-25 ~ 25 사이 난수 : ',num*50 - 25);

console.log( Math.floor(3.14) );        // Math.floor 소수점 버림
console.log( parseInt( 3.14 ) );        // parseInt() 정수로변환
console.log( 3.14.toFixed(0) );         // 반올림

// -5 ~ 5미만 사이 정수만
console.log( '-5 ~ 5 사이 정수 : ',Math.floor(num*10 - 5) );

// -25 ~ 25미만 사이 정수만
console.log( '-25 ~ 25 사이 정수 : ',Math.floor( num*50 - 25 ) );

// p.291 : 객체 속성여부 확인
const object = {
    name : '혼자 공부하는 파이썬',
    price : 18000,
    publisher : "한빛미디어"
}
// - 변수/상수 이름 정의할때 주의할점
    // 1. 숫자시작X 2. 일부특수문자가능 3. 띄어쓰기 4. 키워드

// 객체 내부에 속성이 있는지 확인입니다.
if(object.name !== undefined){console.log("name 속성이 존재함");}
else{console.log('name 속성이 없음');}

if(object.author !== undefined){console.log("author 속성이 있음");}
else{console.log('author 속성이 없음');}

/* 연산자 연습문제 */
// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력
/* 
let ex1No1 = Number(prompt("국어점수를 입력해주세요"));
let ex1No2 = Number(prompt("영어점수를 입력해주세요"));
let ex1No3 = Number(prompt("수학점수를 입력해주세요"));
document.write(`<h1>문제 1번 : 총점 = ${ex1No1+ex1No2+ex1No3} 점 </h1>`);
document.write(`<h1>문제 1번 : 평균 = ${(ex1No1+ex1No2+ex1No3)/3} 점 </h1>`);
 */


// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력
/* 
let ex2No1 = Number(prompt("반지름의 길이를 입력해주세요"));
document.write(`<h1>문제 2번 : 원넓이 = ${(ex2No1*ex2No1)*3.14} </h1>`);
 */


// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력[- 54.5   84.3 두 실수 입력시   결과 : 64%]
/* 
let ex3No1 = Number(prompt("실수1 : "));    let ex3No2 = Number(prompt("실수2 : "));
let ex3No3 = (ex3No1/ex3No2)*100;
document.write(`<h1>문제 3번 : 두 실수의 백분율 : ${ex3No3} </h1>`);
 */


// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
    // 홀수/짝수 식 : 값/2을 했을때 나머지가 0 이면 짝수, 나머지가 1이면 홀수
    // 홀수 : 값%2 == 1         ,   짝수 : 값 % 2 == 0
/* 
let ex4No1 = Number(prompt("정수를 입력해주세요"));
let ex4No2 = ex4No1%2 == 1? "홀수":"짝수";
document.write(`<h1>문제 4번 : 입력하신 수는 ${ex4No2} 입니다.</h1>`);
 */

// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력

let ex5No1 = Number(prompt("정수를 입력해주세요"));
let ex5No2 = ex5No1%7?"틀리다":"맞다";
document.write(`<h1>문제 5번 : 입력하신 수는 7의 배수가 ${ex5No2}.</h1>`);

// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]

// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]

// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력

// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력

// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 
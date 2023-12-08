
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
/* 
let ex5No1 = Number(prompt("정수를 입력해주세요"));
let ex5No2 = ex5No1%7==0?"맞다":"틀리다";
document.write(`<h1>문제 5번 : 입력하신 수는 7의 배수가 ${ex5No2}.</h1>`);
 */


// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용] 입력예) 356789  , 출력 예) 십만원:3장 만원:5장 천원:6장
/* 
    // 1. 금액 자릿수[익덱스] 이용 방법
let ex6No1 = prompt("십만원 단위 금액입력");
document.write(`<h1>문제 6번 : 입력하신금액의 십만원${ex6No1[0]}장, 만원${ex6No1[1]}장, 천원${ex6No1[2]}장</h1>`);
    // 2. 연산자 이용하기
let ex6No2 = parseInt(ex6No1/100000)
ex6No1=ex6No1-ex6No2*100000
let ex6No3 = parseInt(ex6No1/10000)
ex6No1=ex6No1-ex6No3*10000
let ex6No4 = parseInt(ex6No1/1000)

document.write(`<h1>문제 6번 : 입력하신금액의 십만원${ex6No2}장, 만원${ex6No3}장, 천원${ex6No4}장</h1>`);
 */


// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]
/* 
let ex7No1 = prompt("아이디를 입력해주세요");
let ex7No2 = prompt("비밀번호를 입력해주세요");
document.write(`<h1>문제 7번 로그인 결과 : ${ex7No1=='admin' && ex7No2 == 1234? "true":"false" } </h1>`);
 */


// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
    // - 홀[ 나누기 2 했을때 나머지가 1이면 ] / 배수 [ 나누기 배수 했을때 나머지가 0 이면 ]
/*     
let ex8No1 = Number(prompt("정수를 입력해주세요"));
document.write(`<h1>문제 8번 홀수 이면서 7배수인지? ${ex8No1%2 == 1 && ex8No1%7 == 0 ? "true":"false" } </h1>`);
 */


// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력
/* 
let ex9No1 = Number(prompt("정수를 입력해주세요"));
let ex9No2 = Number(prompt("정수를 입력해주세요"));
document.write(`<h1>문제 9번 입력하신 두수중 ${ex9No1>ex9No2? ex9No1 :ex9No2 }가 더 큽니다. </h1>`);
 */


// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력
/* 
let 정수1 = Number( prompt("정수1 입력하시오") );
let 정수2 = Number( prompt("정수2 입력하시오") );
let 정수3 = Number( prompt("정수3 입력하시오") );

    // - 임의 변수[저장/기억] 활용 [ 가장 큰 수를 기억하는 방법. ]
let max = 정수1;                    //1. 가장 큰수를 가지는 변수를 선언해서 첫번째 수 를 넣어둔다.
max = max < 정수2 ? 정수2 : max;    // 2. 두번째 수가 max보다 크면 max에 두번째 수를 대입
max = max < 정수3 ? 정수3 : max;    // 3. 세번째 수가 max보다 크면 max에 세번째 수를 대입
console.log(`가장 큰 수는 : ${ max }`)
 */
/* //내가푼거
let ex10No1 = Number(prompt("정수를 입력해주세요"));
let ex10No2 = Number(prompt("정수를 입력해주세요"));
let ex10No3 = Number(prompt("정수를 입력해주세요"));
document.write(`<h1>문제 10번 입력하신 세가지 수 중 
${ex10No1>ex10No2? ex10No1 > ex10No3? ex10No1:ex10No3 : ex10No2 > ex10No3? ex10No2 : ex10No3}가 더 큽니다. </h1>`);
 */


// [ JS 연산자 과제1 ]
// 문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]
/* 
let 정수1 = Number( prompt('정수1') );
let 정수2 = Number( prompt('정수2') );
let 정수3 = Number( prompt('정수3') );

// - 자릿수 각 비교 해서 스왑하는 방법      [ 추후에 제어문/반복문 이용한 효율적인 방법 ]
    // 1. 첫번째 자리 비교 [ 비교 2번 ]
    let temp = 정수1 > 정수2 ? 정수2 : 정수1;           // 정수2 -> temp 
    정수2 = 정수1 > 정수2 ? 정수1 : 정수2;              // 정수1 -> 정수2 
    정수1 = 정수1 > 정수2 ? temp : 정수2;              // temp -> 정수1

    temp = 정수1 > 정수3 ? 정수3 : 정수1;             
    정수3 = 정수1 > 정수3 ? 정수1 : 정수3;              
    정수1 = 정수1 > 정수3 ? temp : 정수1;              

    // 2. 두번째 자리 비교 [ 비교 1번 ]
    temp = 정수2 > 정수3 ? 정수3 : 정수2;
    정수3 = 정수2 > 정수3 ? 정수2 : 정수3;
    정수2 = 정수2 > 정수3 ? temp : 정수2;
    // 3. 세번째 자리 비교 X [ 비교 0번 ]

    // 4. 결과출력 
    console.log( `${정수1} , ${정수2} , ${정수3}`)
 */


let ex11No1 = Number(prompt("정수를 입력해주세요"));
let ex11No2 = Number(prompt("정수를 입력해주세요"));
let ex11No3 = Number(prompt("정수를 입력해주세요"));

// 1. 첫번째 자리 비교 [ 비교 2번 ]
// 정수1 > 정수2 ? 정수2 : 정수1 ;
// 정수1 > 정수3 ? 정수3 : 정수1 ;

let ex11No4= ex11No1>ex11No2? ex11No1 > ex11No3? ex11No1:ex11No3 : ex11No2 > ex11No3? ex11No2 : ex11No3;
let ex11No5= ex11No4>ex11No5>ex11No6
let ex11No6= ex11No1<ex11No2? ex11No1 < ex11No3? ex11No1:ex11No3 : ex11No2 < ex11No3? ex11No2 : ex11No3;


console.log(ex11No4);/* 가장 높은수 */
console.log(ex11No5);/* 중간수 */
console.log(ex11No6);/* 가장 낮은수 */
// 2. 두번째 자리 비교 [ 비교 1번 ]
// 정수2 > 정수3? 정수3 : 정수2 ;

// 3. 세번째 자리 비교 [ 비교 0번 ]

    /* 
        오름차순 하는 방법 [ 정렬 ]

            7   5   9
            a   b   c

            1. a와 b를 비교 a < b       a가 더 크면. 자리 바꾸기[스왑]
            --- 모든 자리수마다 비교..
            
            a자리는 b, c 와 비교
            b자리는 c와 비교    [ a자리와 비교를 안하는이유 = 비교 이미진행함 ]
            c자리는 X          [ b, c자리와 비교를 안하는 이유 = 이미 비교 진행함 ]

        - 변수 와 변수의 값 바꾸는 방법[스왑]

            a 와 b를 스왑
            [ 문제점 : a의 값은 사라짐.. 왜?? 변수는 1개밖에 저장을 못하니까. ]
            - 주면서 받기 불가능... 컴퓨터 동시에 불가능.

            - 스왑 하는 방법 [ 임의 변수 활용 ]
            1. temp 임의[임시저장소] 생성.
            2. temp에 a 를 대입
            3. a에 b를 대입
            4. b에 temp를 대입


            a <------ 직거래X ------> b
            7                        5

                    temp[임시]
     */


// 문제12 : [ 가위바위보 게임 ] 
// - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
// - 승리자 판단과 무승부 경우의수를 출력하시오.
// [입력]
// 플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
// 플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
// [경우의수 판단]
// 플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
// 플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
// 비겼을경우 '무승부' 출력
let player1 = Number(prompt('플레이어1'))
let player2 = Number(prompt('플레이어2'))
let answer = player1==player2 ? '무승부' :  player1==(player2+1)%3 ? '플레이어1 승리' :  '플레이어2 승리';
document.write(`<h3>${answer}</h3>`)
// // 1. 변수
//      - 변경이 가능한 자료
        let 변수 = 3;
        // ex1) 함수 내부에서 HTML에 등록할 값을 만들때 사용함
            // document.querySelector('boby').innerHTML = 변수
        // ex2) for문에서 반복될 문자를 지정함
            // for(let A=0; A<3; A++){"반복될꺼"}

// 2. 상수
//      - 변경이 불가능한 자료
        const 상수 = [];
        상수.push(변수); // 상수에 변수를 추가함
        상수.splice(1,1); //1번째 상수 1개를 삭제함
        // ex1) 함수로 만든 return 값을 상수에 추가해서 저장할때
            // function 상수추가용(){상수.push(1)}

// 3. 숫자
//      - 수로 이루어진 자료
        const 숫자 = Number("2"); console.log(숫자); console.log("숫자타입="+typeof(숫자));
        Number(변수);       console.log(Number(변수));
        parseInt(2.31);     console.log(parseInt(2.31));
        // ex1) 문자형으로 표현된 "1" 을 숫자형함수Number 사용해 변환후 사용함
            // const 숫자 = Number("2"); console.log(숫자);

// 4. 문자열
//      - 문자로 이루어진 자료
        const 문자 = String(123124);      console.log(문자); console.log("문자타입="+typeof(문자));
        // ex1) 숫자형으로 표현된 1 을 문자형함수string 사용해 변환후 사용함
        // ex2) 사용자의 ID가 숫자로만 이루어져서 문자열로 변경함
            // let A유저아이디 = 1234; console.log(String(A유저아이디));

// 5. 불
//      - 참true / 거짓false 로 이루어진 자료
        const 불 = 1>0; console.log(불);    console.log("불타입="+typeof(불))
        // ex1) if문에 주로 사용됨
            // if(불){console.log("항상참이여서 실행")}else{""}

// 6. 배열
//      - 자료를 묶어둔 자료 / 여러 자료를 묶어서 사용하는 특수한 자료형
        const 배열 = [1,2,3];        console.log("배열타입="+typeof(배열));
        // ex1) 함수로 안에서 만들어진값을 전역변수에 추가시킴
        // ex2) 고객이름을 "배열.push(고객이름)" 배열에 추가함

// 7. 함수
//      - 다시 사용할 가능성이 있는 연산을 저장해두는 틀
        function 함수(){};      console.log("함수타입="+typeof(함수));
        // ex1) 종료시간 - 시작시간 해서 사용시간 을 구함
            /* 
            let 시작시간 = "10:00"; let 종료시간 = "11:00"
            function 시간계산(){
                let 계산 = Number(시작시간.split(":")[0]*60)+Number(종료시간.split(":")[1])
            } 
            */


// 8. 객체
//      - 특정 대상에 대한 정보를 정보별로 이름표 붙여서 정보를 저장한 틀
        const 객체 = {};        console.log("객체타입="+typeof(객체));
        // ex1) 체력검정 정보들을 하나의 객체에 저장함. 
        /* const 객체1 = {이름:전승호, 윗몸일으키기 : 5, 팔굽혀펴기 : 5}
         */

//     1. 각 문법/자료형 정의
//     2. 각 문법/자료형 형태/모양
//     3. 각 문법/자료현 활용 예시
let 입력 =`// // 1. 변수</br>
//      - 변경이 가능한 자료</br>
        let 변수 = 3;</br>
        // ex1) 함수 내부에서 HTML에 등록할 값을 만들때 사용함</br>
        <ul>    // document.querySelector('boby').innerHTML = 변수</br></ul>
        // ex2) for문에서 반복될 문자를 지정함</br>
        <ul>// for(let A=0; A<3; A++){"반복될꺼"}</ul></br>
            </br>
// 2. 상수</br>
//      - 변경이 불가능한 자료</br>
        const 상수 = [];</br>
        상수.push(변수); // 상수에 변수를 추가함</br>
        상수.splice(1,1); //1번째 상수 1개를 삭제함</br>
        // ex1) 함수로 만든 return 값을 상수에 추가해서 저장할때</br>
        <ul>// function 상수추가용(){상수.push(1)}</ul></br>
            </br>
// 3. 숫자</br>
//      - 수로 이루어진 자료</br>
        const 숫자 = Number("2"); console.log(숫자); console.log("숫자타입="+typeof(숫자));</br>
        Number(변수);       console.log(Number(변수));</br>
        parseInt(2.31);     console.log(parseInt(2.31));</br>
        // ex1) 문자형으로 표현된 "1" 을 숫자형함수Number 사용해 변환후 사용함</br>
        <ul>// const 숫자 = Number("2"); console.log(숫자);</ul></br>
            </br>
// 4. 문자열</br>
//      - 문자로 이루어진 자료</br>
        const 문자 = String(123124);      console.log(문자); console.log("문자타입="+typeof(문자));</br>
        // ex1) 숫자형으로 표현된 1 을 문자형함수string 사용해 변환후 사용함</br>
        // ex2) 사용자의 ID가 숫자로만 이루어져서 문자열로 변경함</br>
        <ul>// let A유저아이디 = 1234; console.log(String(A유저아이디));</ul></br>
            </br>
// 5. 불</br>
//      - 참true / 거짓false 로 이루어진 자료</br>
        const 불 = 1>0; console.log(불);    console.log("불타입="+typeof(불))</br>
        // ex1) if문에 주로 사용됨</br>
        <ul>// if(불){console.log("항상참이여서 실행")}else{""}</ul></br>
            </br>
// 6. 배열</br>
//      - 자료를 묶어둔 자료 / 여러 자료를 묶어서 사용하는 특수한 자료형</br>
        const 배열 = [1,2,3];        console.log("배열타입="+typeof(배열));</br>
        <ul>// ex1) 함수로 안에서 만들어진값을 전역변수에 추가시킴</ul></br>
        <ul>// ex2) 고객이름을 "배열.push(고객이름)" 배열에 추가함</ul></br>
        </br>
// 7. 함수</br>
//      - 다시 사용할 가능성이 있는 연산을 저장해두는 틀</br>
        function 함수(){};      console.log("함수타입="+typeof(함수));</br>
        // ex1) 종료시간 - 시작시간 해서 사용시간 을 구함</br>
        <ul>    /* </br>
        let 시작시간 = "10:00"; let 종료시간 = "11:00"</br>
        function 시간계산(){</br>
        let 계산 = Number(시작시간.split(":")[0]*60)+Number(종료시간.split(":")[1])</br>
        } </br>
        */</ul></br>
            </br>
            </br>
// 8. 객체</br>
//      - 특정 대상에 대한 정보를 정보별로 이름표 붙여서 정보를 저장한 틀</br>
        const 객체 = {};        console.log("객체타입="+typeof(객체));</br>
        // ex1) 체력검정 정보들을 하나의 객체에 저장함. </br>
        <ul>/* const 객체1 = {이름:전승호, 윗몸일으키기 : 5, 팔굽혀펴기 : 5}</br>
        */</ul></br>
         </br>
//     1. 각 문법/자료형 정의</br>
//     2. 각 문법/자료형 형태/모양</br>
//     3. 각 문법/자료현 활용 예시`;
document.querySelector("body").innerHTML = 입력
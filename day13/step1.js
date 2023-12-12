console.log("step1 JS열림")

// ============================= 함수 밖에 선언한 이유 ============================= //
    // 여럿 함수들 {  }에서 사용하기 때문에. // 서언 1번하고 누적저장
const idArray = []; // 1. 아이디 들을 저장하는 배열
const pwArray = []; // 2. 패스워드 들을 저장하는 배열

// ============================= 1. 회원가입 함수 ============================= //
function 회원가입(){    // f start // 선언부 // 실행조건 : 가입버튼[<input type="butten"/>]을 클릭했을때.
    console.log("회원가입 버튼누름")
    // 1. [입력] document.querySelector('선택자').value
    const signId = document.querySelector("#signId").value;
    const signPw = document.querySelector("#signPw").value;
    // 2. [처리] 배열명.push( 추가할 요소 )
    idArray.push( signId );
    pwArray.push( signPw );
    
    // 3. [출력]
    alert("회원가입이 되었습니다.");
        // 성공후 해당 input value 값 초기화
        document.querySelector("#signId").value = " "
        document.querySelector("#signPw").value = " "
}   // f End

// ============================= 2. 로그인 함수 ============================= //
function 로그인(){  // f start // 선언부 // 실행조건 : 로그인버튼[<input type="butten"/>]을 클릭했을때.
    console.log("로그인 버튼누름")
    // 1. [입력]
    const loginId = document.querySelector("#loginId").value
    const loginPw = document.querySelector("#loginPw").value
    // 2. [처리] 배열명.indexOf( 값 )
    const sIndex = idArray.indexOf( loginId );
    
    if ( sIndex >= 0 && pwArray[sIndex] == loginPw ){
        // 1. 만약에 입력받은 로그인 아이디가 배열내 존재하면
        // 2. 찾은 아이디 인덱스의 패스워드도 동일한지.
    // 3. [출력]
        alert("로그인성공")
    }else{
        alert("동일한 회원정보가 없습니다.")
    }
    // 3. [출력]
}   // f End

/* 

    변수선언 : let 변수명 = 10;
    상수선언 : const 상수명 = 10;
    배열선언 : let/const 변수/상수명 = []
    함수선언 : function 함수명(){  }

    변수호출 : 변수명
    상수호출 : 상수명
    배열호출 : 변수/상수명  또는 변수/상수명[인덱스]
    함수호출 : 함수명()
*/

/* 
    JS 과제 [ 주차장 정산기 ] Day 13 step2.hteml, step2.JS, step2.css
        요구사항
        1. 입차
            1. 차번호를 입력받기 [ 숫자4자리 ] (input type = "text")
            2. 입차시간 을 (input type = "time")
        2. 저장
            배열 [차번호, 입차시간]에 저장
        3. 출력
            alert("입차 완료")
====================================================================
        4. 출차
            1. 차번호 숫자4자리 입력받기 type="text"
        5. 요금계산
            1. 차번호 숫자4자리 입력받기 type="text"
            2. 출차시간을 type="time"
        6. 계산
            해당 차번호의 입차시간과 출차시간을 계산해서
            계산식 : 30분 내외면 무료, 이후 10분당 1000원
        7. 출력
            alert( 요금 )
            또는
            alert( 입차한 차량이 없습니다.
                )
======================== 추가 요구사항 ===============================
        1. 입차/출차시 차량번호 4자리만 입력할수 있도록하고 아니면 입차 불가능.
        2. 입차/출자 시간을 입력 안했으면 입차/출차 불가능
        3. 일별 매출현황 HTML에 출력하는 [배열추가,함수추가]
        4. CSS간단하게.
*/

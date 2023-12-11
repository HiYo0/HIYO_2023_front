/* 
    변수/상수 : 자료를 저장해서 반복적으로 호출 여러번 가능 [재활용]
    함수      : 코드를 저장해서 호출을 여러번 가능 [재활용]
*/

/*
    if문 연습문제
    prompt 대신에 input으로 입력받기
    풀이 결과를 consloe.log 대신에 span 에 출력

    // 참고
    // 1. HTML 마크업 정보를 JS변수로 가져오는 함수.
    // document.querySelector( '마크업 또는 #id명 또는 .class명' )
    // 2. .value 속성 값 가져오기
    // document.querySelector( '마크업 또는 #id명 또는 .class명' ).value
    // 3. .innerHTML 속성 이용한 HTML에 출력
        // document.querySelector( '마크업 또는 #id명 또는 .class명' ).innerHTML = '출력하고싶은
 */

// 문제1 : 3개 점수를 각 input으로 입력받아 총점과 평균 span에 출력하시오.
    // - 함수선언
function 연습버튼을클릭했을때실행되는코드모음상자(){
    // 1. [입력] input에 입력받은 값 가져오기 [ ]
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;
    // 2. [처리]
    let sumValue = Number(value1)+Number(value2)+Number(value3);
    let avgValue = sumValue/3;
    // 3. [출력]
    document.querySelector('#result').innerHTML
             =`총점 : ${sumValue}점 평균${avgValue}점`
 }  // f end [ 1번문제 함수 끝 ]


// 문제2 : 2개 정수를 입력받아 더 큰 수를 출력
function 문제2함수(){
    // [입력]
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    // [처리] 만약에 첫번째
    let result = "";    // 결과변수 [ if조건에 따른 실행코드 결과를 저장하는 변수]
        // 처음에는 빈문자열.
        // 1. 만약에 첫번째 수가 더 크면 결과변수에 첫번째 수를 저장
    if(value1>value2){result = value1 + "가 큽니다.";}
        // 2. 만약에 첫번째 수가 더 작으면 결과변수에 두번째 수를 저장
    else if(value1<value2){result = value2 + "가 큽니다.";}
        // 3. 그외는 결과변수에 같다는 의미를 저장
    else{result="두수는 같다."}
    // 3. [출력]
    document.querySelector("#result").innerHTML = `${result}`
}   // f end [ 2번문제 함수 끝]


//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3함수(){
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;
    
    let result = "";

    if(value1>value2 && value1>value3){result=value1+"가 가장 큽니다.";}
    else if(value2>value3){result=value2+"가 가장 큽니다."}
    else(result=value3+"가 가장 큽니다.")
    
    document.querySelector("#result").innerHTML = `${result}`
}


//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4함수(){
    let value1 = document.querySelector('#input1').value;

    let result = ""; //답지

    if(value1>=90){result = "합격"}
    else{result ="탈락"}

    document.querySelector("#result").innerHTML = `${result}`
}


/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5함수(){
    let value1 = document.querySelector('#input1').value;

    let result = "";
    if(value1>=90){result="A등급";}
    else if(value1>=80){result="B등급";}
    else if(value1>=70){result="C등급";}
    else{result="재시험"}

    document.querySelector("#result").innerHTML = `${result}`
}


/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/
function 문제6함수(){
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;

    let result = "";

    if(value1=="admin" && value2==1234){result="로그인 성공";}
    else{result="로그인 실패";}
    document.querySelector("#result").innerHTML = `${result}`
}


//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력
function 문제7함수(){
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;

    let UP = "";
    let DOWN = "";

    let No1 = "";
    let No2 = "";
    let No3 = "";

    if( value1 > value2 && value1 > value3 ){ No1=value1; }
    else if( value2>value3 ){ No1=value2; }
    else( No1=value3 );/* 가장큰 수 = NO1 */

    if( value1 < value2 && value1 < value3 ){ No3=value1; }
    else if( value2 < value3 ){ No3=value2; }
    else( No3=value3 );/* 가장작은 수 = NO3 */

    if( value1!=No1 && value1!=No3 ){ No2=value1 }
    if( value2!=No1 && value2!=No3 ){ No2=value2 }
    if( value3!=No1 && value3!=No3 ){ No2=value3 }

    UP=[ No3,No2,No1 ]
    DOWN=[ No1,No2,No3 ]
    
    document.querySelector("#result").innerHTML = `${UP}`
}
function 문제7함수Ver2(){
    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;

    let UP = "";
    let DOWN = "";

    let No1 = "";
    let No2 = "";
    let No3 = "";

    if(value1>value2 && value1>value3){No1=value1;}
    else if(value2>value3){No1=value2;}
    else(No1=value3);/* 가장큰 수 = NO1 */

    if(value1<value2 && value1<value3){No3=value1;}
    else if(value2<value3){No3=value2;}
    else(No3=value3);/* 가장작은 수 = NO3 */

    if(value1!=No1 && value1!=No3){No2=value1}
    if(value2!=No1 && value2!=No3){No2=value2}
    if(value3!=No1 && value3!=No3){No2=value3}/* 중간 수 No2로 지정하기 */

    UP=[ No3,No2,No1 ]
    DOWN=[ No1,No2,No3 ]
    
    document.querySelector("#result").innerHTML = `${DOWN}`
    
}
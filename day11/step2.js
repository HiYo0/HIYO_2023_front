
// p.131 if조건문
    // 조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    // 가장 일반적인 조건문 : IF
/* 
    형태
    1.     
        if( True/False ){ 참true 일때 실행코드; }
    2. 
        if( true/false ){ 참true 일때 실행코드; }       <-----------> 삼항연산자    : 조건 ? 참 : 거짓
        else{ 거짓false 일떄 실행코드; }
    3.
        if( true/false ){               ----- 성별이 남자 중에서
            if( true/false ){}                  -- 미필군필 여부 확인
            else{ }
        }
        else{                           ----- 성별이 여자 중에서
            if( true/false ){}                  --
            else{ } 
        }
    4. 다수 조건 일때              < -------------->     다수 조건일때. 결과 여러개
        if( 조건1 ){ }                                  if( 조건1 ){ }
        else if( 조건2 ){ }                             if( 조건2 ){ }
        else if( 조건3 ){ }                             if( 조건3 ){ }
        else if( 조건4 ){ }                             if( 조건4 ){ }
        else { }                                        if( 조건5 ){ }
*/

// 1. if( 조건 ) : 조건의 결과가 참이면 { } 안으로 들어가고 아니면 { } 못들어감/
if( 273 < 100 ){ // if start , 273이 100보다 미만이면
    console.log( '273<100 => True' )}; // 실행X [ 조건이 false 이므로 ]
// if end

console.log('1종료'); // 실행O [ 조건문과 상관이 없어요.왜 { } 밖이니까. ]

// 2.
const date = new Date();    // new Date(); 현재시간을 알려주는 코드 [클래스 : 미리 만들어진 구조/코드 ]
    console.log( date );
const hour = date.getHours();   // 현재시간.getHours() : 현재시간에서 시분초 중에서 시 를 반환 함수.
    console.log( hour );

    // 1. 만약에 현재 시 가 12보다 작으면 오전
if(hour < 12){ console.log("오전입니다.") };

    // 2. 만약에 현재 시 가 12보다 이상이면 오후
if(hour >= 12){ console.log("오후입니다.") };

// 3. p.134

if(hour<12){ console.log("오전입니다."); }
else{ console.log("오후입니다."); }

// 4. p.135
if( hour < 11 ){ // 11시 미만
     console.log("아침 먹을 시간입니다.");}
else{ // [ 반대 ] 11시이상
    if( hour < 15 ){ // 11시 이상이면서 15미만.
            console.log("점심 먹을 시간입니다.");}
    else{console.log("저녁 먹을 시간입니다.")}
} // 첫번째 if 끝

//5. p.137
if( hour < 11 ){ console.log("아침 먹을 시간입니다.");}
else if( hour < 15 ){ console.log("점심 먹을 시간입니다.");}
else { console.log("저녁 먹을 시간입니다.");}
    // vs 위 코드는 결과를 무조건 1개만 실행되지만. 아래 코드는 조건에 따라 여러개가 실행될수 있다.
if( hour < 11 ){ console.log("아침 먹을 시간입니다.");}
if( hour < 15 ){ console.log("점심 먹을 시간입니다.");}
else { console.log("저녁 먹을 시간입니다.");}

// p.138

/* 
    확인문제
        1 : 3
        2 : Number, Number, a > b, a == b
        3.
                - x=10일떄 5보다 크고 20보다 작다.
                    5<x<20 [ 표현불가능 ]
                    x>5 && x<20 [ &&이용 ]
        4.
            const ex4 =prompt("숫자 써주세요.");
            if(ex4>0){document.write("양수입니다.");}
            else if(ex4<0){document.write("음수입니다.");}
            else{document.write("0입니다.")}
        5.
            const ex5 =prompt("숫자 써주세요.");
            if( ex5%2==0 ){document.write("짝수입니다.");}
            else{document.write("홀수입니다.");}
        6.
            계절 기준 : 3~5[봄], 6~8[여름], 9~11[가을], 12~2[겨울]
            const ex6 =prompt("숫자 써주세요.");
            // if(3<ex6<5)[X]
            if( ex6 >=3 && ex6<=5 ){document.write('봄 입니다.')}
            else if( ex6 >=6 && ex6<=8 ){document.write("여름 입니다.")}
            else if( ex6 >=9 && ex6<=11 ){document.write("가을 입니다.")}
            else{document.write("겨울 입니다.")};
            // else if( ex6 == 12 ||ex6 <= 2 ){document.write("겨울 입니다.")} => 12월 넘어가기때문에 연산자 || 써줘야함

*/
/* 
5.
변수 =
    엘리베이터 상태 [상승 / 정지 / 하강]
    현재층 [ 정지되어있는층 ]
    눌린층 [ 누른층 ]

    if(상승상태==true){
        if(현재층 < 눌린층){눌린층까지 작동}
        else{정지}
    }else{ }

    1. 중량 초과시 문닫기 X
        변수 =  [중량]  엘리베이터 중량
        
        if( [중량] > 1000){알림음과 정지}
                
    2. 사용자의 버튼 누른층 이동
        변수 =  [버튼]   버튼눌린 버튼
                [현재층] 엘리베이터가 멈춘층

        if([버튼]!=[현재층]){[현재층] 으로이동}

    3. 문 사이 물체에 의한 문 여닫이
        변수 = [물체여부]   문사이 센서로 있다 없다 탐지
                
        if([물체여부] == true){문 다시 열림}

    4. 점검중일때 작동 여부
        변수 = [상태] 엘리베이터의 상태 양호/중량초과/점검 등

        if([상태]!=양호){문열림 및 정지}
    5. 엘리베이터 올라가기
        변수 = [현재층] 엘리베이터가 멈춘층
                [버튼]   버튼눌린 버튼
                [이동상태] 엘리베이터의 진행방향1=올라감 0=내려감

        if([이동상태]==1 && [현재층]<[버튼]){[버튼]층 으로이동}
        else{정지후 초기화}

*/
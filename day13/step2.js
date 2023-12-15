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


const 차량번호 = [];
const 입차시간 = [];
const 나간차량 = [];
// =========================================================
function 입차기록(){
    console.log("입차기록 실행");/* 테스트 */
    
    const 차량번호입력값 = document.querySelector("#carNo").value
    const 입차시간입력값 = document.querySelector("#carT").value
    
    if(차량번호입력값.length != 4){alert("입차 불가능");}
    else if( 입차시간입력값 == ''){alert("입차 시간을 선택해주세요");}
    else{
        차량번호.push(차량번호입력값);
        입차시간.push(입차시간입력값);
        alert("입차 완료");
        }
        
    console.log(차량번호);
    console.log(입차시간);
}
// =========================================================
function 출차기록(){
    console.log("출차기록 실행");
    
    const 차량번호입력값 = document.querySelector("#carNo1").value
    const 출차시간입력값 = document.querySelector("#carT1").value

    let 요금 = 3000;/* 임시 */
// =========================================================
    const 차량번호Index = 차량번호.indexOf(차량번호입력값);
    // if(차량번호Index == -1){alert("입차한 차량이 없습니다."); return}


    const 차량번호Intime = 입차시간[차량번호Index];
        console.log(차량번호Intime);/* 테스트 */
        
    const 입차분 = (차량번호Intime.split(":")[0]*60)/* 시 */ + Number(차량번호Intime.split(":")[1] );/* 분 */
        console.log(입차분);/* 테스트 */
    
    const 출차분 = (출차시간입력값.split(":")[0]*60)+Number(출차시간입력값.split(":")[1]);
        console.log(출차분);
    
    const 계산 = (Number(출차분)-Number(입차분))
        console.log(계산)
    if((Number(출차분 - 입차분)<=30)){alert("무료출차");return}
    else{
        console.log(`${parseInt((계산-30)/10*1000)}`);
        나간차량.push(차량번호입력값)
        document.querySelector(`#carNumber`).innerHTML = `${나간차량}`;
    };
    
    // const 츨차분 = (차량번호Intime.split(":")[0]*60)/* 시 */ + Number(차량번호Intime.split(":")[1] );/* 분 */
    // 1. 시를 분으로 변환.
        /* 
            입차시간 : 02:30    --> 120분 + 30분 -> 150분
            출차시간 : 04:20    --> 240분 + 20분 -> 260분
                260 - 150 => 110 -> 60분당 1시간 => 1시간 50분
                110에 30분 무료차감 => 80분 * 100원 => 8000원
        */
    // const 출차계산시간 = 입차시간[차량번호.indexOf(차량번호입력값)].split(":")
    // console.log(출차계산시간);
        
    // console.log(차량번호.indexOf(차량번호입력값));
    // console.log(입차시간[차량번호.indexOf(차량번호입력값)])
    
    
    // alert(`출차완료 : ${요금}`)
    // alert("출차완료")

} // function끝


// ==============================================
const 등록 = [];
const 번호 = [];
const 시간s = [];
const 시간e = [];
const 사용자 = [];

const 사용시간 = [];
const 총금액 = 0; /* 하루매출 */

function 등록함수(){        // f s
    console.log('등록함수()실행')

    // 입력
    const 번호2 =  document.querySelector('#pcNum').value; console.log(번호2)
    const 시작시간 = document.querySelector('#시작시간1').value; console.log(시작시간)
    const 종료시간 = document.querySelector('#종료시간1').value; console.log(종료시간)
    const 사용자2 = document.querySelector('#사용자1').value; console.log(사용자2)
    const 사용시간2 = document.querySelector('#사용시간1').value; console.log(사용시간2)
   
    // 처리
    번호.push( 번호2 );         console.log(번호)
    시간s.push( 시작시간 );     console.log(시간s);
    시간e.push( 종료시간 );     console.log(시간e);
    사용자.push( 사용자2 );     console.log(사용자);
    사용시간.push( 사용시간2 );    console.log(사용시간);
   
    // 출력
    출력함수();
    
} // f e


function 출력함수(){
    
    let 출력함수 = '';

    for(let i = 0 ; i < 사용자.length ; i++ ){ 
        출력함수 +=`
        <div class="content1">
        <h1>${번호[i]}</h1>
        </div>

        <div class="content1">
            <h1>${시간s[i]}</h1>
        </div>

        <div class="content1">
            <h1>${시간e[i]}</h1>
        </div>

        <div class="content1">
            <h1>${사용자[i]}</h1>
        </div>

        <div class="content1">
            <h1>${사용시간[i]}</h1>
        </div>

        <div class="content1">
            <h1><input id="삭제함수버튼" onclick="삭제함수( ${ i } )" type="button" value="삭제" /></h1>
        </div>
        `
    }
    document.querySelector('#print').innerHTML = 출력함수
    
}

function 삭제함수(삭제할인덱스){         // f s
    
번호.splice(삭제할인덱스,1);
시간s.splice(삭제할인덱스,1);
시간e.splice(삭제할인덱스,1);
사용자.splice(삭제할인덱스,1);
사용시간.splice(삭제할인덱스,1);

출력함수();
} // f e 

/* 
const PC사용현황 = {
    시간s :"",
    시간e :"",
    사용자 : ""
} */

const PC좌석번호상태 = [];


const 누적된금액 = [];

좌석출력()
function 좌석출력(){


    let html = ``

    for(let i = 1; i<=6; i++){
        
        if( PC좌석번호상태.indexOf(i+"").번호 >= 0 && PC좌석번호상태[PC좌석번호상태.indexOf(i+"")].시간e =='' ){
        /* 번호의 값이 0보다 크면 있는거 *///끝나는 시간이 없으면 공백처리
            html +=`<div class="classBox"> ${ PC관리.사용자[PC좌석번호상태.indexOf(i+"")] } </div>`
        } else{
            html +=`<div class="classBox classBox1"> 빈자리 </div>`
        }

    }
    document.querySelector("#boxTop").innerHTML =html;

}


// 시간s = [01:00 , 02:00 , 03:00];

function 종료시간등록(){

    const 번호2 =  document.querySelector('#pcNum2').value; /* console.log(번호2) */
    const 종료시간a = document.querySelector("#종료시간1").value
    PC좌석번호상태[PC좌석번호상태.indexOf(번호2).번호].PC좌석번호상태.시간e = 종료시간a;


    

    document.querySelector('#pcNum2').value=''
    document.querySelector("#종료시간1").value=''
        // 출력
        출력함수();
        종료계산();

    

    

}
function 종료계산(){
    const PC번호선택값 = document.querySelector("option").value
    const 종료PC번호 = 번호.indexOf(PC번호선택값);
    /* 6분당 100원 하고 총금액에 추가함 */
    // 시간e - 시간s
    const 시간s분 = Number(PC좌석번호상태[종료PC번호].시간s.split(":")[0]*60)+Number(PC좌석번호상태[종료PC번호].시간s.split(":")[1]);
    console.log(시간s분)/* 테스트 */
    const 시간e분 = Number(PC좌석번호상태[종료PC번호].시간e.split(":")[0]*60)+Number(PC좌석번호상태[종료PC번호].시간e.split(":")[1]);
    // console.log(시간e분)/* 테스트 */
    const 계산 = parseInt((시간e분-시간s분)/6*100);
    console.log(계산)/* 테스트 */
    누적된금액.push(계산);
    console.log("누적된금액");
    console.log(누적된금액);

    let 합 = 0;
    for(a=0; a<누적된금액.length; a++){
        합 += 누적된금액[a];
    }
    document.querySelector("span").innerHTML = `${합}`

}

/* =========================ㅇㅇㅇㅇㅇ============================ */

function 등록함수(){        // f s
    console.log('등록함수()실행')

    // 입력
    const 번호2 =  document.querySelector('#pcNum').value; /* console.log(번호2) */
    const 종료시간a = document.querySelector("#종료시간1").value
    const 시작시간 = document.querySelector('#시작시간1').value; /* console.log(시작시간) */
    const 사용자2 = document.querySelector('#사용자1').value; /* console.log(사용자2) */

    // 처리
    const PC상태 = {
        번호 : 번호2 , 
        시간s : 시작시간 , 
        시간e : 종료시간a , 
        사용자 : 사용자2
    }
    PC좌석번호상태.push(PC상태)

    document.querySelector('#pcNum').value='';
    document.querySelector("#종료시간1").value=''
    document.querySelector('#시작시간1').value=''; /* console.log(시작시간) */
    document.querySelector('#사용자1').value=''; /* console.log(사용자2) */

    // 출력
    출력함수();
    
} // f e

function 출력함수(){
    const PC번호선택값 = document.querySelector("option").value
    // const 총금액 = 0; /* 하루매출 */


    let 출력함수 = '';

    for(let i = 0 ; i < PC좌석번호상태.length ; i++ ){ 

        const 시간s분 = Number(PC좌석번호상태[i].시간s.split(":")[0]*60)+Number(PC좌석번호상태[i].시간s.split(":")[1]);
        console.log(시간s분)/* 테스트 */
        const 시간e분 = Number(PC좌석번호상태[i].시간e.split(":")[0]*60)+Number(PC좌석번호상태[i].시간e.split(":")[1]);
                // console.log(시간e분)/* 테스트 */
        let 계산 = parseInt(시간e분-시간s분);
        console.log( 계산 );
        console.log(typeof(계산));
           if(계산<=0){계산.push(`0`)}
           else{계산}
        출력함수 +=`
        <div id="tablerow">
        <div class="content1">
        <h1>${PC좌석번호상태[i].번호}</h1>
        </div>

        <div class="content1">
            <h1>${PC좌석번호상태[i].시간s}</h1>
        </div>

        <div class="content1">
            <h1>${PC좌석번호상태[i].시간e} </h1>
        </div>

        <div class="content1">
            <h1>${PC좌석번호상태[i].사용자}</h1>
        </div>

        <div class="content1">
            <h1>${계산}</h1>
        </div>

        <div class="content1">
            <h1><input id="삭제함수버튼" onclick="삭제함수( ${ i } )" type="button" value="삭제" /></h1>
        </div>
        </div>
        `
    }
    
    document.querySelector('#table').innerHTML = 출력함수
    
    
    좌석출력();
    
    
}
function 삭제함수(삭제할인덱스){    // f s
    
번호.splice(삭제할인덱스,1);
시간s.splice(삭제할인덱스,1);
시간e.splice(삭제할인덱스,1);
사용자.splice(삭제할인덱스,1);
사용시간.splice(삭제할인덱스,1);

출력함수();
} // f e 
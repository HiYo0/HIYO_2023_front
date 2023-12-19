const 등록 = [];
const 번호 = [];
const 시간s = [];
const 시간e = [];
const 사용자 = [];

const 사용시간 = [];
const 총금액 = []; /* 하루매출 */
const 누적된금액 = [];

영역출력()
function 영역출력(){
    let 영역 =``

    /* 6개 칸 만들기 */
    for(let i=1; i<=6; i++){
        // console.log(번호);
        console.log(시간e);
        console.log(시간e[번호.indexOf(i+"")]);
        if(번호.indexOf(i+"") >= 0 && 시간e[번호.indexOf(i+"")] == undefined ){
            영역 += `<div class="boxcolorTrue"> ${사용자[번호.indexOf(i+"")] } </div>`}
        else{
            영역 +=`<div class="boxcolorTrue boxcolorFalse"> 빈자리 </div>`
        }
    }
    document.querySelector("#boxArea").innerHTML =영역;
}

function 시작등록(){
    const 선택번호 = document.querySelector('#번호선택1').value;
    const 시작시간 = document.querySelector('#startTime').value;
    const 사용자명 = document.querySelector('#userName').value;
    
    번호.push(선택번호);
    시간s.push(시작시간);
    사용자.push(사용자명);

    document.querySelector('#번호선택1').value='';
    document.querySelector('#startTime').value='';
    document.querySelector('#userName').value='';
    출력함수()
}

function 종료등록(){
    const 선택번호2 = document.querySelector('#번호선택2').value;
    const 종료시간 = document.querySelector("#finishTime").value;

    시간e[번호.indexOf(선택번호2)]=종료시간;
    // console.log(번호.length);
    
    document.querySelector('#번호선택2').value='';
    document.querySelector("#finishTime").value = '';
    
    출력함수()
}

function 종료계산(){/* 수정예정 */
    const PC번호선택값 = document.querySelector("option").value
    const 종료PC번호 = 번호.indexOf(PC번호선택값);
    /* 6분당 100원 하고 총금액에 추가함 */
    // 시간e - 시간s
    const 시간s분 = Number(시간s[종료PC번호].split(":")[0]*60)+Number(시간s[종료PC번호].split(":")[1]);
    console.log(시간s분)/* 테스트 */
    const 시간e분 = Number(시간e[종료PC번호].split(":")[0]*60)+Number(시간e[종료PC번호].split(":")[1]);
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
    총금액.push(합)
    console.log("총금액")
    console.log(총금액)
    
    document.querySelector("span").innerHTML = `${총금액}`

    총금액.splice(0,1)
}





function 출력함수(){
    let 번호용 = ``
    let 시작시간용 = ``
    let 종료시간용 = ``
    let 사용자명용 = ``
    let 삭제용 = ``
    for(let a=0; a<번호.length; a++){
        번호용 += `<table id="titleName">${번호[a]} </table><br/>`
        시작시간용 += `<table id="startInput">${시간s[a]}</table><br/>`
        종료시간용 += `<table id="startInput">${시간e[a]==undefined? "0":시간e[a]}</table><br/>`
        console.log(시간e[a])
        사용자명용  += `<table id="userInput">${사용자[a]}</table><br/>`
        삭제용 += `<input id="delitForm" onclick="삭제함수(${a})" type="button" value="삭제"/><br/>`
    }
    
    document.querySelector("#titleName").innerHTML = 번호용
    document.querySelector("#startInput").innerHTML = 시작시간용
    document.querySelector("#endInput").innerHTML = 종료시간용
    document.querySelector("#userInput").innerHTML = 사용자명용
    document.querySelector("#delit").innerHTML = 삭제용

    영역출력();
}

function 삭제함수(삭제할인덱스){

    번호.splice(삭제할인덱스,1);
    시간s.splice(삭제할인덱스,1);
    시간e.splice(삭제할인덱스,1);
    사용자.splice(삭제할인덱스,1);
    사용시간.splice(삭제할인덱스,1);

    출력함수();
}

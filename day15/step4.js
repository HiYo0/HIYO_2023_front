const 날짜=[];
const 항목=[];
const 금액=[];

function 등록함수(){
    alert('함수실행됨')
    const 날짜입력값 = document.querySelector('#dateValue').value;
    const 항목입력값 = document.querySelector('#textValue').value;
    const 금액입력값 = document.querySelector('#moneyValue').value;
    console.log(날짜입력값);console.log(항목입력값);console.log(금액입력값);

    날짜.push(날짜입력값);
    항목.push(항목입력값);
    금액.push(금액입력값);/* 데이터 입력 */
    console.log(날짜);
    console.log(항목);
    console.log(금액);
    
    출력함수();
}
function 삭제함수(삭제순서){
    날짜.splice(삭제순서,1);
    항목.splice(삭제순서,1);
    금액.splice(삭제순서,1);
    
    출력함수();
}
function 출력함수(){
    const dateInputA = document.querySelector('#dateInput');
    const textInputA = document.querySelector('#textInput');
    const moneyInputA = document.querySelector('#moneyInput');
    const delitInputA = document.querySelector('#delitInput');
    
    const totalInputA = document.querySelector('#form3');
    let pageDate =``;
    let pageText =``;
    let pageMoney =``;
    let pageDelit =``;
    let pageTotal =``;

    for(i=0; i<날짜.length; i++){
        pageDate += `<table id="dateInput"> ${날짜[i]} </table><br/>`;
        pageText += `<table id="textInput"> ${항목[i]} </table><br/>`
        pageMoney += `<table id="moneyInput"> ${금액[i]}원 </table><br/>`
        pageDelit += `<table id="delitInput"> <input onclick="삭제함수(${i})" type="button"value="삭제"/> </table><br/>`
    }
    dateInputA.innerHTML = pageDate
    textInputA.innerHTML = pageText
    moneyInputA.innerHTML = pageMoney
    delitInputA.innerHTML = pageDelit

    let totalMoney = 0;
    /* 총합구하기 */
    for(a=0; a<금액.length; a++){
        totalMoney += Number(금액[a]);}
    console.log(totalMoney)



    pageTotal = `<p id="totalInput">${totalMoney}원</p>`
    totalInputA.innerHTML = pageTotal
        
        
}
/* 
주제 : 가계부
[요구사항]
    [조건] 배열 3개사용/함수(등록함수,출력함수,삭제함수)

    [1.입력]
        날짜(날짜), 항목, 금액(천단위쉼표없이)[3가지항목]
        입력후 등록 버튼 클릭하면 저장.
    [2.출력]
        저장된 배열내 모든 요소의 값을 그림과 같이 출력
    [3.삭제]
        선택된 항목을 삭제. - 삭제시 날짜, 항목, 금액 같이 삭제.
    [4. 총합계]
        배열내 모든 금액을 더한 값을 출력하시오
        =====================추가요구사항=========================
        1. CSS간단하게.
        2. 천단위 쉼표 만들어주는 함수[*js에서 제공하는 함수x]
        3. 날짜를 무작위로 등록해도 오른차순으로 출력해주는 함수 또는 로직
*/

/* ========================================= */
/* 
    설계..
        1. 경험
        2. 기능 실행순서
            [키오스크 = 사용자입장]
                - 카테고리선택 -> 제품선택 -> 장바구니 담기 -> 결제내역
            [포스기 = 관리자입장]
                - 결제 내역 ( 주문상태 )
                - 카테고리 추가/삭제 기능
                - 제품 추가/삭제 기능

        3. 기능에 필요한 메모리(저장-DB설계) 설계
            카테고리 = [ {cno : 1, cname : '신제품(New)'},
            {cno : 2, cname :'프리미엄'},
            {cno : 3, cname :'와퍼&주니어'},
            {cno : 4, cname :'치킨&슈림프버거'},
            {cno : 5, cname :'올데이킹&모닝'} 
            ]
            - 관리자가 해당 배열을 추가/삭제

            

        4. 배열 안에 있는 데이터를 식별할때 기준점.
            사람 = {이름: '유재석', 나이 : 40세,직업 : 강사} - 이름으로 식별시 동명이인이 존재 하면 문제점 발생. [중복이 절대로 없어야함.]
            사람 = {주민등록번호 : '840420-1'이름: '유재석', 나이 : 40세,직업 : 강사} - 주민등록은 절대로 중복이 없음
            
            - 인덱스 VS 식별코드생성 VS 이름        !!! 중복이 없어야 한다. 고정 값.

*/


/* 백엔드로 데이터를 받았다 치고 진행 */
/* 1.카테고리 목록 */
let categoryArray = [
                {cno : 1, cname : '신제품(New)'},
                {cno : 2, cname :'프리미엄'},
                {cno : 3, cname :'와퍼&주니어'},
                {cno : 4, cname :'치킨&슈림프버거'},
                {cno : 5, cname :'올데이킹&모닝'} 
                ]

/* 2.제품목록 */
let productArray = [
        {pno:1, pName : '큐브 스테이크 와퍼', pPrice : 19000,pImg : '큐브스테이크와퍼.png' , cno : 1 },
        {pno:2, pName : '블양양맥시멈2', pPrice : 19000,pImg : '블양양맥시멈2.png' , cno : 1 },
        {pno:3, pName : '스파이시 큐브 스테이크 와퍼', pPrice : 19000,pImg : '스파이시_큐브_스테이크_와퍼.png' , cno : 1 },
        {pno:4, pName : '블양양맥시멈2', pPrice : 19000,pImg : '블양양맥시멈2.png' , cno : 4 },
        {pno:5, pName : '스파이시 큐브 스테이크 와퍼', pPrice : 19000,pImg : '스파이시_큐브_스테이크_와퍼.png' , cno : 5 }
]

// - [ 함수1 ] : 카테고리 출력하는 함수 ( 실행조건 : JS열렸을때 , 카테고리를 클릭했을때)
printCategory(1);    // 함수 실행 // 최초로 선택된 cno는 1로 가정함 // 매개변수 : 함수안으로 들어온 변수.
function printCategory(selectCno){
    console.log("카테고리실행됨");
    // 1. 어디에
    const categoryUl = document.querySelector("#header>ul")
    
    // 2. 무엇을
    let 출력용 =``;
    for(let i=0; i<categoryArray.length; i++){
        출력용 += `<li onclick="printCategory(${categoryArray[i].cno})" 
        class="${categoryArray[i].cno == selectCno ? "selectMenu" :""}">${categoryArray[i].cname}</li>`
    }// f end
    // 3. 출력
    categoryUl.innerHTML = 출력용;
    // 4. 제품출력
    printProduct(selectCno);    // 카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달
    // 왜?? 제품출력시 모든제품 출력이 아니고. 선택된 카테고리번호의 일치한 제품만 출력해야 되니까.
}

// [ 함수2 ] : 제품 출력하는 함수. ( 실행조건 : 카테고리출력 되었을때 )
function printProduct(selectCno) {   // 함수 선언 // 전체 출력x // 내가 선택한 카테고리[부]의 제품[자]만.
    console.log(selectCno);
    // 1. 어디에
    const productBox = document.querySelector('#productBox')
    // 2. 무엇을
    let 출력용2 = ``;
    for(let i = 0; i<productArray.length; i++){
        // 만약에 i번째 제품의 cno와 동일하다면 
        if(productArray[i].cno == selectCno){
            출력용2 +=`<div onclick="printCart(${productArray[i].pno})" class="product">
                            <img src="step1Img/${productArray[i].pImg}" />
                            <div class="pInfo">
                                <div class="pName"> ${productArray[i].pName} </div>
                                <div class="pPrice"> ${productArray[i].pPrice.toLocaleString()}원 </div>
                            </div>
                        </div>`
        }
        // console.log(productArray[i])
    }
    
    // 3. 출력
    productBox.innerHTML = 출력용2;
}

let cartArray = [] // 카트목록
// - [ 함수3 ] 재품 (선택/클릭)시 장바구니에 (제품을담아[대표자Pno])주는 함수. ( 실행조건 : 제품을 클릭했을때. )
function printCart(selectpno){
    console.log(selectpno);
    // 1. 입력
    // 2. 처리
    cartArray.push(selectpno);
        console.log(cartArray);
    printA()
        
}

function cartDelete(deleteIndex){
    // 1. 입력 --> 매개변수로 선택된 삭제인덱스.
    // 2. 처리 --> 배열에서 해당 인덱스 삭제
    cartArray.splice(deleteIndex,1);
    // 3. 출력 --> 카트상태 새로고침..
    printA();
}
// - [ 함수5 ] 카트의 현재 상태를 출력하는 함수 (실행조건 : 1.제품을 선택했을때 2. 제품을 삭제했을때)
function printA(){
    // 1. 어디에
    let cartBottom = document.querySelector('#cartBottom');
        // 2. 무엇을
    let 출력용3 = ``;
        let totalPrice = 0; // 카트내 제품 총 금액
        let cartCount = cartArray.length; // 카트내 pno 수량

    
        // 카트목록에 있는 모든 제품번호 출력[ 배열에 있는 모든 요소를 하나씩 출력 ]
        for(let i = 0; i<cartArray.length; i++){
            // -해당 i번째 pno 제품의 정보찾기.
            for(let j = 0; j<productArray.length; j++){
                if(cartArray[i]==productArray[j].pno){
                    출력용3 +=   `<div class="cItem">
                                    <div>${productArray[j].pName}</div>
                                    <div>${productArray[j].pPrice.toLocaleString()}원</div>
                                    <span onclick="cartDelete(${i})">X</span>
                                </div>`
                    totalPrice += productArray[j].pPrice; // j번째의 제품 가격을 총합계에 더하기

                }//2번for조건문
                
            }//2번for
            
            
        }//1번for
        // 3.출력
        console.log(totalPrice);
        document.querySelector('#count').innerHTML = cartCount;
        document.querySelector("#total").innerHTML = totalPrice.toLocaleString()+'원';
        cartBottom.innerHTML=출력용3   
}
// - [ 함수6 ] 장바구니 초기화 시키기
function cartCencle(){
    cartArray.splice(0); /* 전부 삭제 */
    printA();
}


// 함수 카테고리 등록 만들기
function categoryPlus(){
    // 입력
    
    const numberInput = Number(document.querySelector('#numberInput').value);
    const productnameInput = document.querySelector('#productnameInput').value;
    
    let 임시 = {};

    // 처리
    if(categoryArray.length+1 > numberInput){return alert("해당순번 이미있음")}
    if(categoryArray.length+1 < numberInput){return alert(`${categoryArray.length+1}번 부터 기입해주세요`)}
   
    임시.cno = numberInput;  // 번호추가 con
    임시.cname = productnameInput // 제품명 추가
    categoryArray.push(임시)
    console.log(임시)

    
    console.log(categoryArray)
    printCategory(1);

    document.querySelector('#productnameInput').value=''
}

function categoryDelete(){
    const numberInput = Number(document.querySelector('#numberInput').value);

    categoryArray.splice(numberInput-1,1);
    printCategory(1);

}

function 테스트용함수(){
    const test용 = document.querySelector('#test용').value;
    console.log(test용);
}
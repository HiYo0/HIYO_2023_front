let 매개변수 = JSON.parse(localStorage.getItem("매개변수"))


글보기(매개변수)

function 글보기(index){
    let userArray = JSON.parse(localStorage.getItem('userArray'));
    
    const 출력좌표 = document.querySelector("#출력좌표")
    
    // 조회수 추가하기
    let 조회수1 = userArray[index].조회수
    조회수1 += 1/* 조회수 추가하기 출력당 */
    // console.log(typeof(userArray[index].조회수))
    userArray[index].조회수 = 조회수1
    // localStorage.setItem(userArray[index].조회수,조회수1) 틀림
    // console.log(userArray)                          /* 대상불러옴 */
    // console.log(userArray[index])                   /* 불러온대상에서 필요한 객체 찾음 */
    // console.log(userArray[index].조회수 = 조회수1)   /* 그안에 조회수 +1 한거 로 바꿈 */
    // console.log(userArray[index])       /* 확인용 */
    // console.log(조회수1)                /* 확인용 */
    // localStorage.setItem("조회수",조회수1)
    // console.log(Number(userArray[index].조회수))
    localStorage.setItem("userArray",JSON.stringify(userArray)) /* 저장 */

    // let userArray2 = JSON.parse(localStorage.getItem('userArray')); /* 테스트용 */
    // console.log(userArray2)                                         /* 테스트용 */
    
                
    let html = `<div> 작성자 : ${userArray[index].id} 조회수 : ${userArray[index].조회수}</div>
                <div> 제목 : ${userArray[index].title} </div>
                <div> 내용 : ${userArray[index].content.replaceAll('\n','<br/>')} </div>
                <input onclick="글수정(${index})" type="button" value="수정"/>
                <input onclick="글삭제(${index})" type="button" value="삭제"/>
                `;

    출력좌표.innerHTML = html;
}

function 글수정(매개변수){
    alert("만드는중")
    /* 유효성검사 */
    let userArray = JSON.parse(localStorage.getItem('userArray'));/* 호출 */
    const userPw = prompt('비밀번호');


}
function 글수정임시( index ){ // 매개변수 : (대상)수정할 식별번호 // 리턴값 : X
    console.log(index);

    // 1. 검증[유효성검사] - 패스워드를 입력받아.. 해당 게시물의 패스워드와 동일하면.
    const checkPw = prompt('비밀번호');
    if(checkPw == boardArray[index].비밀번호){ // 만약에 입력받은 패스워드와 게시물의 패스워드가 일치하면
        // 수정할 값들을 입력받아.
        const updateTitle = prompt('수정할 제목');
        const updateContent = prompt('수정할 내용');
        // 수정처리
        boardArray[index].제목 = updateTitle;
        boardArray[index].내용 = updateContent;

        alert('수정성공');
        
        // 새로고침
        모든글출력();
        개별글출력(index);
    }else{
        alert('패스워드가 다릅니다. 수정 불가.')
    }

    return;
}

function 글삭제(매개변수){
    // console.log("글삭제 실행됨")
    let userArray = JSON.parse(localStorage.getItem('userArray'));/* 호출 */
    console.log(userArray[매개변수]);
    userArray.splice(매개변수,1)                            /* 처리 : 삭제배열 */
    console.log(userArray);
    localStorage.setItem("userArray",JSON.stringify(userArray)) /* 저장 */

    alert("삭제되었습니다.")

    location.href="list.html"

}
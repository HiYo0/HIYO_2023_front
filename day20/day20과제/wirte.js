/* 1. 입력값을 저장시키는 함수 */
function 글쓰기등록(){
    console.log("글쓰기 함수실행됨")
    
    const writer = document.querySelector("#writer").value;
        // console.log(writer);
    const passowrd = document.querySelector("#passowrd").value;
        // console.log(passowrd);
    const title = document.querySelector("#title").value
    const content = document.querySelector("#content").value

    let uesr={
        id : writer,
        pw : passowrd,
        title : title,
        content : content,
        조회수 : 0
    };

    let userArray = JSON.parse(localStorage.getItem('userArray')); // 유저 이름과 비밀번호를 로컬? 저장함
    if(userArray==null){userArray=[];}/* 만약 유저(로컬?)에 저장하려는대 배열이 없으면    배열을만듬 */
    
    userArray.push(uesr);

    localStorage.setItem("userArray",JSON.stringify(userArray))
    console.log(localStorage.setItem("userArray",JSON.stringify(userArray)))

    location.href="list.html"
}
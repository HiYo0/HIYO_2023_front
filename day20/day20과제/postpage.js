let 매개변수 = JSON.parse(localStorage.getItem("매개변수"))


글보기(매개변수)

function 글보기(index){
    let userArray = JSON.parse(localStorage.getItem('userArray'));
    
    const 출력좌표 = document.querySelector("#출력좌표")
    
    let 조회수1 = userArray[index].조회수
    조회수1 += 1/* 조회수 추가하기 출력당 */
    console.log(typeof(userArray[index].조회수))
    
    localStorage.setItem(userArray[index].조회수,조회수1)
    console.log(userArray)
    console.log(조회수1)
    // localStorage.setItem("조회수",조회수1)
    // console.log(Number(userArray[index].조회수))
    
    
                
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
}

function 글삭제(매개변수){
    // console.log("글삭제 실행됨")

}

글목록출력하기();

function 글목록출력하기(){

    let userArray = JSON.parse(localStorage.getItem('userArray'));
    // console.log(userArray.length)
    console.log(userArray)

    const 출력위치 = document.querySelector('#출력위치'); /* 출력좌표 */

    let html = ``;
    for( let i = 0 ; i<userArray.length ; i++ ){
        html += `<tr onclick="개별글출력( ${i} )" >
                    <th>${ i + 1 }</th>   
                    <th>${ userArray[i].title }</th>  
                    <th>${ userArray[i].id }</th>
                    <th>${ userArray[i].조회수 }</th>
                </tr>`
    }
    출력위치.innerHTML = html;
    return;

}

function 개별글출력(번호){

    console.log(번호+"누름")

    localStorage.setItem("매개변수",번호)
    console.log(JSON.parse(localStorage.getItem('매개변수')))
    location.href="postpage.html"

}
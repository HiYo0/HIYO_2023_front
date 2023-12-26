document.addEventListener('DOMContentLoaded',()=>{
    //전부 HTML 로드하면                  /* 익명함수ㄱㄱ */
    let counter = 0;
    let isConnect = false;

    const h1 = document.querySelector('h1');
    /* h1은 HTML 마크업h1 */
    const p = document.querySelector('p');
    /* p는 HTML에서 마크업 p태그 */
    const connectButton = document.querySelector('#connect');
    /* id ; connect 위치 */
    const disconnectButton = document.querySelector('#disconnect');
    /* id ; disconnect 위치 */

    const listener = (event) => {
        /* 함수실행 함수변수 = event */
        h1.textContent = `클릭횟수 : ${counter++}`
    }

    connectButton.addEventListener('click',()=>{
        /* connectButton에 이벤트 추가 / 클릭할때 함수실행 */
        if (isConnect === false ){
            h1.addEventListener('click',listener);
            /* h1 을 클릭할때 listener 함수실행(카운터 +1됨) */
            p.textContent = '이벤트 연결 상태 : 연결';
            /* p태그에 문구출력 */
            isConnect = true;
            /* isConnect 의 값을 true로 변경 */
        }
    })
    disconnectButton.addEventListener('click',()=>{
        /* disconnectButton에 이벤트 추가 / 클릭할때 함수실행 */
        if (isConnect === true ){
            h1.removeEventListener('click',listener);
            /* h1 을 클릭할때 listener 함수실행(카운터 +1됨) */
            p.textContent = '이벤트 연결 상태 : 해제';
            /* p태그에 문구출력 */
            isConnect = false;
            /* isConnect 의 값을 true로 변경 */
        }
    })

document.querySelector('').innerHTML = "123123"
})
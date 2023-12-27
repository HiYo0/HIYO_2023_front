
// 1. 기존에 있는 자료를 select에 넣을때.
const category = ['떡볶이','순대','오댕','튀김'];

document.addEventListener('DOMContentLoaded',function(){
    // 2. 
    const selectBox = document.querySelector('#selectBox');
    let html = '안녕';
        for(let i = 0; i<category.length; i++){
            html += `<option>${category[i]}</option>`
        }
    selectBox.innerHTML = html;
    // textContent : 문자열 그자체. // innerHTML : 문자열 HTML형식

    // [ p.343 ]
    // 1. 각 요소 객체로 호출
    const select = document.querySelector('select');
    const p = document.querySelector('p');
    // 2. 요소의 이벤트[ change : value 값이 바뀔때마다 ] 등록
    select.addEventListener( 'change',function(event){
        console.log( event );   // change 이벤트를 발생시간 요소
        console.log( event.currentTarget ); // select 하위 요소들/배열 반환
        console.log( event.currentTarget.options ); // select 하위 요소들/배열 반환
        console.log( event.currentTarget.options.selectedIndex );   // select 요소의 선택된 인덱스

        // [ 방법1 ]
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex
        p.textContent = `선택 : ${ options[index].textContent }`

        // [ 방법2 ]
        p.textContent = `선택 : ${ select.value }`;
    
    }); // e end

    // [ p.345 ]
    let 현재값;
    let 변환상수;

    const select3 = document.querySelector('select:nth-child(6)');  // select중에서 3번쨰
        console.log( select3 );
    const input = document.querySelector('input');
    const span = document.querySelector('span');

    const calulate = function(){
        span.textContent = (현재값*변환상수).toFixed(2);    // toFixed() : 소수점 자르기 함수 [반올림]
    }

    select3.addEventListener('change',function(){
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex;
        변환상수 = Number( options[index].value );
            // 변환상수 = Number( options.value );
        
        calulate(); // 계산 및 출력 함수 실행
    }); // end

    input.addEventListener('keyup',function(){
        현재값 = Number( event.currentTarget.value );
        // 현재값 = Number( event.value );

        calulate(); // 계산 및 출력 함수 실행
    });

}); // event end



// [ p.343 ]
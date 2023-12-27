

document.addEventListener('DOMContentLoaded',function(){
    // [ p.346 ]
    // 1.
    let timer = 0;      // 타이머(초)
    let timerId = 0;    // 시간을 체크하는 함수를 가지는 변수.

    // 2. 각 요소를 객체로 호출
    const h1 = document.querySelector('h1');
    const checkbox = document.querySelector('input');

    // 3. 체크박스의 이벤트 등록
    checkbox.addEventListener('change', function(event){
        // 4. checked 속성 확인
        console.log( checkbox.checked );
        /* console.log( event.currentTarget.checked ); */
        // 5. 만약에 체크가 되어있으면.
        if( event.currentTarget.checked ){ // 체크 상태
            // 6. 1초마다 익명함수를 실행
            timerId = setInterval( function(){
                timer++;
                h1.textContent = `${timer}초`;  // 타이머 출력
            } , 1000 )
        }else{  // 체크해제상태
            clearInterval( timerId );
        }
    }); // [ p.346 ]e end

    // [ p.348 ] 라디오버튼 사용하기
    // 1. 각 요소를 객체로 호출
    const output = document.querySelector('#output');
    const radios = document.querySelectorAll('[name=pet]');
    

    // 2. 모든 라디오 버튼을 하나씩 호출
    for(let i = 0; i<radios.length; i++){
        // 3. 이벤트[change] 등록
        radios[i].addEventListener('change' , function(){
            // [ 방법1 ]
            const current = event.currentTarget
            if( current.checked ){  // 막약에 해당 요소가 체크되어 있으면 value 출력
                output.textContent = `좋아하는 애완동물은 ${current.value} 이군요.`
            }
            // [ 방법2 ]
            const checkValue = document.querySelector('input[name=pet]:cgecked').value;
            output.textContent = `좋아하는 애완동물은 ${checkValue} 이군요.`
        })  // e end
    }   // e end

}); // e end

/*
    1. 인터벌 실행
    setInterval(함수() , 밀리치 );  : 밀리초 마다 해당 함수를 실행하는 함수.
    
    2. 인터벌 끄기
    clearInterval( setInterval변수 );
*/
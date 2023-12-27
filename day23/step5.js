document.addEventListener('DOMContentLoaded',function(){
    // 문서 를 객체로 가져옴
    const input = document.querySelector('#todo')
    const addButton = document.querySelector('#add-button')
    const todoList = document.querySelector('#todo-list')

    let keyCount = 0;/* 이후에 removeTodo()함수에서 문서 객체를 쉽게 제거하기위한 용도로 만든 변수 */

    // 함수선언 1
    const addTodo = function(){
        if(input.value.trim() === ''){  /* .trim() 공백을 제거해주는 함수 */
        alert('할 일을 입력해주세요.');
        return;
    }
    
    const item = document.createElement('div')
    // 문서에 div라는 객체생성? 을 item 이라고 하기로 함
    const checkbox = document.createElement('input')
    // input 이라는 객체생성?
    const text = document.createElement('span')
    const button = document.createElement('button')

    /* 문서 객체를 식별할 키 */ // 이후removeTodo()함수에서 문서 객체를 쉽게 제거하기 위한 용도로 만든 변수
    const key = keyCount;
    keyCount += 1   /* 한번실행되면 keyCount가 +1 됨 */

    // item 객체를 조작하고 추가함
    item.setAttribute('data-key',key);   /* .setAttribute = 요소에 속성/값을 추가함 */
    item.appendChild(checkbox);          /* item(div)에 자식으로 checkbox(input)을 추가함 */
    item.appendChild(text);
    item.appendChild(button)   ;         /* 요약 div 안에 체크박스/문구쓸부분/버튼 추가함 */
    
    todoList.appendChild(item);         /* 방금만든 item(div)를 #todoList 부분에 자식요소로 추가함 */


    // checkbox 객체를 조작합니다.
    checkbox.type = 'checkbox';     /* checkbox 의 타입을 정해줌 : checkbox */
    checkbox.addEventListener('change', function(event){
        /* checkbox 가 변경될떄 함수 실행 */
        // console.log(event)
        item.style.textDecoration = event.target.checked ? 'line-through' : "" 
                                    /* 이벤트 타겟 클릭되있으면 선긋기 */
    });

    // text 객체를 조작합니다.
    text.textContent = input.value; /* text(span) 부분에 입력받은 택스트를 입력 */

    // button 객체를 조작합니다.
    button.textContent = '제거하기' /* button 부분에 택스트 추가 */
    button.addEventListener('click',function(){
        /* 버튼이 클릭 될때 함수removeTodo()실행  removeTodo=삭제용함수 */
        removeTodo(key);
    });

    // 입력 양식의 내용을 비웁니다.
    input.value = '';
    }; //f1 end


    // 함수2 (식별 키로 문서 객체를 제거하기)
    const removeTodo = function(key){
        const item = document.querySelector(`[data-key = "${key}"]`)
        todoList.removeChild(item);
    }; //f2 end
    
    // 이벤트 연결
    addButton.addEventListener('click', addTodo)
    input.addEventListener('keyup', function(event){
        // 입력 양식에서 enter 키를 누르면 바로 addTodo() 함수를 호출
        const ENTER = 13
        if(event.keycode === ENTER ){
            addTodo()
        }
    });
    
}); //e end
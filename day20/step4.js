// 1. 등록함수 : 실행조건 : 등록버튼을 클릭했을때
function 등록(){
    console.log("등록함수켜짐")
    // 1. 입력
    const mid = document.querySelector('#mid').value;
        console.log("아이디"+mid);
    const mpw = document.querySelector('#mpw').value;
        console.log("패스워드"+mpw);
    // 2. 처리
        // 1. {아이디와 비밀번호} 회원 를 객체화
    const member = {
        mid : mid,
        mpw : mpw
    };
        // 2. 객체를 배열에 저장. [전역변수]가 아닌[브라우저]에 저장.
        // localStorage 에 입력받은 객체를 저장한다. [ JSON.stringify(  ) : ror]

    let memberArray = JSON.parse(localStorage.getItem('memberArray')); // 기존 배열 호출
    if(memberArray==null){ memberArray=[] } // 배열을 새로 만들어준다.
    memberArray.push(member);   // 방금 가입된 회원객체를 배열에 추가


        
    localStorage.setItem('memberArray',JSON.stringify(memberArray))
    // 3. 출력[x]
    alert('회원가입 성공')
}//f end
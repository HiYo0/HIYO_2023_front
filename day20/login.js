
// 1. 로그인 함수 : 실행조건 : 로그인버튼을 클릭했을때.
function 로그인(){console.log("로그인함수")
    // 1.[입력]
    const mid = document.querySelector('#mid').value;
        // console.log("아이디"+mid);
    const mpw = document.querySelector('#mpw').value;
        // console.log("패스워드"+mpw);

    // 2.[처리] 로그인? 기존에 있던 데이터와 입력받은데이터와 비교
        
        // 1. 기존 가져오기 [ 회원가입에서 저장된 객체 ]
    const memberArray = JSON.parse( localStorage.getItem('memberArray') );
        // 2. 입력받은 객체 [ 로그인에서 입력받은 객체 ]
    const member = { mid : mid , mpw : mpw }
        // 3. 비교
    for(let i = 0; i<memberArray.length; i++){
        console.log(memberArray[i]); // 배열내 요소 하나씩 출력
        let oldMember = memberArray[i]; // i번쨰 회원을 변수에 지정
        if( oldMember.mid == member.mid && oldMember.mpw == member.mpw ){
            alert('로그인성공');
            location.href="step4.html"
            return;
        };
    };
    // 모두 확인후 끝까지 원하는 값을 못찾았을때 == 반복문이 끝났을때
    alert('동일한 회원정보가 없습니다.')
    // 3.[출력]
}
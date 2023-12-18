

// 0. 전역변수 [ 배열 ] 
    // - 속성[상태] 마다 배열을 하나씩 만들면 배열이 너무 많아져. 관리 힘들어..
    // 객체지향 나오기전... 여러속성들을 하나의 배열에서 관리하고 싶다.
        // 1. boardArray  = [ ] 
            // - 단점 : 하나의 서로다른 유형의 4가지의 데이터 저장하면 인덱스 관리 힘들다.
        // 2. boardArray  = [ "작성자/비밀번호/제목/내용" ,  "작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용" ]
            // - 여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함 [ 구분 문자는 개발자 마음. ]
            // - 입력 데이터에는 구분 문자가 포함되면 안된다.
            // - 단점 : 분해 하고 분해후 순서번호 기억.

            const boardArray  = [ ]

            // 1. [C]글쓰기 [ 글쓰기 버튼을 클릭 했을때. ]
            function 글쓰기(){  // 매개변수 : X // 리턴값 : X
                // 1. HTML로 부터 입력받은 값 가져오기 
                const writer = document.querySelector('#writer').value;
                const passowrd = document.querySelector('#passowrd').value;
                const title = document.querySelector('#title').value;
                const content = document.querySelector('#content').value;
                /* 입력값 받아오기 */

                // 2. 객체에 저장하기
                const board = {
                    작성자 : writer , 
                    비밀번호 : passowrd , 
                    제목 : title , 
                    내용 : content
                }
                board.조회수 = 0;   // 객체내 없는 key 호출시 key생성됨.    // 이제 등록했으니까 조회수는 0부터 시작함
                /* /넣어서 지정한 이유 == 배열내용을 구분지을라고  */

                boardArray.push( board );
                // 3. 배열에 HTML에 출력하기

                모든글출력();
                //
                document.querySelector('#writer').value = "";
                document.querySelector('#passowrd').value = "";
                document.querySelector('#title').value = "";
                document.querySelector('#content').value = "";

                return;
            }
            
            function 모든글출력(){
                const tableBody = document.querySelector('table>tbody');
                let html = ``;
                for( let i = 0 ; i<boardArray.length ; i++ ){
                    html += `<tr onclick="개별글출력( ${i} )" >
                                <th>${ i }</th>   
                                <th>${ boardArray[i].제목 }</th>  
                                <th>${ boardArray[i].작성자 }</th>
                                <th>${ boardArray[i].조회수 }</th>
                            </tr>`
                }
                tableBody.innerHTML = html;
                return;
            }
            
            function 개별글출력( index ){

                // *조회수 증가.
                boardArray[index].조회수 += 1;모든글출력()
                const boardBox = document.querySelector('#boardBox');
                
                let html = `<div> 작성자 : ${boardArray[index].작성자} 조회수 : ${boardArray[index].조회수}</div>
                            <div> 제목 : ${boardArray[index].제목} </div>
                            <div> 내용 : ${boardArray[index].내용.replaceAll('\n','<br/>')} </div>
                            <input onclick="(글수정${index})" type="button" value="수정"/>
                            <input onclick="글삭제(${index})" type="button" value="삭제"/>
                            `;
                            /* 1. 작성자 : boardArray의 index배열의 수를 /단위로 쪼갠것의 0번째 배열의 있는 수 */
                            /* 2. 제목 : boardArray의 index배열의 수를 /단위로 쪼갠것의 2번째 배열의 있는 수 */
                            /* 3. 내용 : boardArray의 index배열의 수를 /단위로 쪼갠것의 3번째 배열의 있는 수 + replaceAll는 해당 문자열에서 앞에 선언한 문구와 같으면 모두 치환하는거 */
                            /* 4. 수정버튼 생성해주면서 몇번째 글인지 지정해줌 */
                            /* 5. 삭제버튼 생성해주면서 몇번째 글인지 지정해줌 */
                
                boardBox.innerHTML = html;          /* HTML에 앞 상수로 지정한 좌표에 html변수를 적용함 */
                
                return;
            }
            // 3. [U]글수정 [ 글수정 버튼을 클릭했을때. ]
            function 글수정( index ){ // 매개변수 : (대상)수정할 식별번호 // 리턴값 : X
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
            // 4. [D]글삭제 [ 글삭제 버튼을 클릭했을때.]
            function 글삭제( index ){ // 매개변수 : (대상)삭제할 식별번호  // 리턴값 : X
                const checkPw = prompt('비밀번호')
                if( checkPw == boardArray[index].비밀번호 ){
                    // 삭제처리
                    boardArray.splice( index, 1);
                    alert('삭제 성공');
                    // 새로고침.
                    모든글출력();
                    document.querySelector("#boardBox").innerHTML = ``; // 개별글보기 구역 초기화.
                }else{
                    alert('패스워드가 가릅니다. 삭제 불가.')
                }

                return;
            }
            /*
                함수 만들때 고민할점.
                    1. 언제 실행하는 함수인지?
                    2. 함수 안으로 넣을 매개변수?
                    3. 함수 밖으로 반환할 값?
                    4. 무엇을 실행 하는지?
            */
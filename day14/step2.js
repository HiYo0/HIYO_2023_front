
// let output= ``;
// 문제1) 입력받은 수 만큼 * 출력 
/* 
let output = ``;        // - 출력할 내용을 저장하는 임시변수.
const value = Number(prompt('문제1 수 입력;'));
for( let i = 1; i<=value; i++){
    // - i는 입력받은 수 까지 1씩 증가
    output +=`*`;
}//for end
console.log( output );
 */

// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
/* 
let output = ``;
const value2 = Number( prompt('문제2 수 입력'));
for( let i = 1 ; i<=value2; i++){
    output +=`*`;
    // 만약 i 가 3배수이면 줄 바꿈 처리.
    if(i%3 == 0 ){output +=`\n`;}   //  \n : 제어(이스케이프) 문자
}//for end
console.log( output );
 */

// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/* 
let output = ``;
const line3 = Number( prompt('문제3 수 입력'));
for( let i = 1; i<=line3; i++){ // for1 start   [행]
    
    // 별찍기 [열]
    for( let s = 1; s<=i; s++){
        output += `*`; 
        }   // for2 End

    // 줄바꿈
    output += '\n';
}   //for1 End
console.log(output);
 */

// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
/* 
let output = ``;
const line4 = Number( prompt('문제4 수 입력'));
for(let i = 1; i<=line4; i++){
    for(let s = i; s<=line4-1+1; s++){
        output +=`*`
    }
    output += '\n';
}
console.log(output);
 */

// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]

/* 
const line5 =Number( prompt('문제5 수 입력'));
for(let i = 1; i<=line5; i++){
    for(let s =i; s<=line5-1; s++){ output += " "; }
    for(let p = 1; p<=i; p++){ output +="*"; }
    output += "\n";
}
console.log(output)
 */

// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/* 
const line6 =Number( prompt('문제6 수 입력'));
for(let i = 1; i<=line6; i++){
    for(let p = 1; p<=i-1; p++){ output += " ";}
    for(let s= 1; s<=line6-i+1; s++){ output += `*`; }

    output += "\n";
}
console.log(output)

*/
// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/*
const line7 =Number( prompt('문제7 수 입력'));
for(let i = 1; i<=line7; i++){
    for(let s = 1; s<=line7-i; s++ ){ output += " " ;}
    for(let p = 1; p<=i*2-1; p++ ){ output += `*` ;}
    output += "\n";
}
console.log(output);
 */

// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
/* 
const line8 =Number( prompt('문제8 수 입력'));
for(let i = 1; i<=line8; i++){
    for(let s= 1; s<=i-1; s++){output += " "}
    for(let p = 1; p<=(line8-i+1)*2-1; p++){output += "*"}
    output += "\n";
}
console.log(output);
*/

// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ](짝수만 입력)
/* // 해결법1
// const line9 =Number( prompt('문제9 수 입력'));
// for(let i = 1; i<=line9; i++){
//     for(let a = 1; a<=line9/2-i; a++){output +=" ";}//
//     for(let b = line9/2; b>=(line9/2)-(i*2-2); b--){output +=`*`;}
//     // (line9/2)=4 2
//     output += "\n";
// }
 */
/* 
// 해결법2
const line9 =Number( prompt('문제9 수 입력'));
for(let i = 1; i<=(line9/2); i++){
    for(let s = 1; s<=(line9/2)-i; s++ ){ output += " " ;}
    for(let p = 1; p<=i*2-1; p++ ){ output += `*` ;}
    output += "\n";
}
for(let i = 1; i<=(line9/2); i++){
    for(let s= 1; s<=i-1; s++){output += " "}
    for(let p = 1; p<=((line9/2)-i+1)*2-1; p++){output += "*"}
    output += "\n";
}
console.log(output);
 */

/* 예제모양
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
*/
// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ](홀수만입력)
/* 
const line10 =Number( prompt('문제10 줄수 입력 : '));
for(let r = 1; r<=line10; r++){
    //[열]      [td]
    for(let c = 1; c<=line10; c++){
        // [조건1 = 행과 열이 같으면 ]
        if( r == c){output +='★';}
        // [조건2 = 행과 열이 더한 값이 입력받은값+1]
        else if(r+c == line10+1){output +="★";}
        // 아니면 공백
        else{output +='☆';}
    }
    output += `\n`;
}
console.log(output);
 */
/*
*     *
 *   *
  * *
   *
  * *
 *   *
*     *
*/

// 문제10-2

function 문제10(){
    const line1 = Number(document.querySelector('#line10').value);
    let html = ``;
    // [행]
    for(let r = 1 ; r<=line1; r++){
        
        // 행 시작
        html += `<tr>`;
        // [열]
        for(let c = 1; c<=line1; c++){
            if(c==r){ html +=`<td>★</td>`}
            else if(c+r == line1+1 ){html +=`<td>★</td>`}
            else{ html +=`<td> </td>` }
        }
        // 줄 끝
        html += `</tr>`;
    }
    const tableObj = document.querySelector('#table10');
    tableObj.innerHTML = html;
    document.querySelector('#line10').value = ``
}

function 문제9(){
    
    const line9 =Number(document.querySelector("#line9").value);
    let output = ``;
    for(let 행 =1; 행<=line9; 행++){
        output += `<tr>`
        
        for(let 열 =1; 열<=line9; 열++){
            if(열==parseInt(line9/2+1)){ output +=`<td>★</td>`;}
            else if(행==parseInt(line9/2+1)){ output +=`<td>★</td>`;}
            else if(열+행==parseInt(line9/2)+2){ output +=`<td>★</td>`;}
            else if(열>=parseInt(line9/2+1) && 행<=parseInt(line9/2+1)){ output +=`<td>★</td>`;}
            else{ output +=`<td>☆</td>`;}
        }
        
        output += `</tr>`
    }
    
    const tableObj = document.querySelector('#table9');
    tableObj.innerHTML = output;
    document.querySelector('#line9').value = ``
}


// function 문제9(){

//     const q7 = Number(document.querySelector(`#line9`).value)/2

//     let html = ``;

//     if((2*q7)%2==0){

//         for(let i=1 ; i<=q7 ; i++ ){

//             html += `<tr>`

//             for(let b=1; b<=q7-i; b++){ html += `<td>☆</td>`;
//             }
//             for(let s=1; s<=2*i-1; s++){ html += `<td>★</td>`
//             }
            
//             html += `</tr>`;
//         }


//         for(let i=1; i<=q7; i++){
//             html += `<tr>`
//             for(let b=1; b<=i-1; b++){ html += `<td>☆</td>`;
//             }
//             for(let s=1; s<=2*q7-2*i+1; s++){html += `<td>★</td>`;
//             }
            

//             html += `</tr>`;
//         }   
//     }

//     else{
//         for(let i=1 ; i<=q7+0.5 ; i++ ){
//             html += `<tr>`
//             for(let b=1; b<=(q7+0.5)-i; b++){ html += `<td>☆</td>`; }
//             for(let s=1; s<=2*i-1; s++){ html += `<td>★</td>`
//             }
            
//             html += `</tr>`;
//         }


        
//         for(let i=1; i<=q7-0.5; i++){

//             html += `<tr>`
            
//             for(let b=1; b<=i; b++){ html += `<td>☆</td>`;
//             }
//             for(let s=1; s<=2*(q7-0.5)-2*i+1 ; s++){html += `<td>★</td>`;
//             }
           


//             html += `</tr>`;
//         }
//     }

//     const tableObj = document.querySelector('table');
//     console.log(tableObj);
//     tableObj.innerHTML = html;
// }
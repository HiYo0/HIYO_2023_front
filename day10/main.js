
console.log('자바스크립트실행2');

// p.90
console.log(); // 크롬 F12( 개발자도구 -> consol )에 출력하는 함수

console.log(5+3*2);
console.log((5+3)*2);   // 사칙연산 [ 연산자 우선순위 ]

console.log( 10 % 2 );  // 나머지 : 10에서 2를 나눈 나머지값 0
console.log( 10 % 3 );  // 나머지 : 10에서 3를 나눈 나머지값 1
console.log( 10 % 4 );  // 나머지 : 10에서 4를 나눈 나머지값 2

console.log( 10 / 2 );  // 나누기 : 10에서 2를 나눈값 5
console.log( 10 / 3 );  // 나누기 : 10에서 3를 나눈값 3.3333~

// 몫 구하기 [ parseInt() : 정수로 변환해주는 함수 = 소수점 버리기 ]
console.log( parseInt( 10 / 3 ));


// p.90 ~ 91 불 자료형
console.log(true);
console.log(false);

console.log( 52 > 273 );    // 52가 273 보다 크다.
console.log( 52 < 273 );    // 52가 273 보다 작다.
        
        // 강력비교                 비교
console.log( 10 === 10 );   console.log( 10 == 10 );    // true, true
console.log( 10 === '10');  console.log( 10 == "10" );  // false, true
console.log( '가방'>'하마');    // false    // 오름차순 : 0 1 2 3 4 ~~ , a b c d ~~, ㄱ ㄴ ㄷ ㄹ ~~

console.log( 52 >= 273 );   // 크거나 같다 false
console.log( 52 <= 273 );   // 작거나 같다 true
console.log( 10 != 11 );    // 10과 11은 다르다. true

console.log( !true );       // true -> false
console.log( !false );      // false -> true

console.log( true && true );    // true 그리고 true => true
console.log( true && false );   // true 그리고 false => false
console.log( false && true );   // false 그리고 true => false
console.log( false && false );   // false 그리고 false => true

console.log( true || true );   // true 또는 true => true
console.log( true || false );   // true 또는 false => true
console.log( false || true );   // false 또는 true => true
console.log( false || false );   // false 또는 false => false

// p.96~97 자료형검사 ( 현재 자료가 숫자인가? 문자열인가? 불인가? )
    // - 왜?? 유효성검사 [ 데이터가 확인? -- 자료형에 따른 로직/기능 하기위해 ]

console.log( typeof('안녕하세요') );  // '안녕하세요'의 자료형 확인 string[문자열]
console.log( typeof(273) );         // 273의 자료형 확인 number[숫자]
console.log( typeof( true ) );      // true의 자료형 확인 boolean[불]

console.log( typeof '안녕하세요' );
console.log( typeof 50);        console.log( typeof (50-30 ) );
console.log( typeof false );    console.log( typeof (50<30 ) );


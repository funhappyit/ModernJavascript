//수열을 표시하는 프로그램
digits = "";
for (let i = 0; i < 10; i++) {
  digits += i;
}
console.log(digits); //0123456789
//무작위 알파벳 문자열을 표시하는 프로그램
/*
String.fromCharCode() 메서드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환합니다.
String.fromCharCode(65, 66, 67);  // "ABC"
String.fromCharCode(0x2014)       // "—"
 */
randomChars = "";
for (var i = 0; i < 8; i++) {
  randomChars += String.fromCharCode(
    Math.floor(Math.random() * 26 + "a".charCodeAt(0))
  );
}
console.log(randomChars);
//공통 부분을 고차 함수로 만들어서 하나로 만들어 봅니다.
function joinStrings(n, f) {
  var s = "";
  for (var i = 0; i < n; i++) {
    s += f(i);
  }
  return s;
}

// 숫자 0123456789
var digits = joinStrings(10, function (i) {
  return i;
});
// 무작위 알파벳 문자열을 표시
var randomChars = joinStrings(8, function (i) {
  return String.fromCharCode(
    Math.floor(Math.random() * 26) + "a".charCodeAt(0)
  );
});
console.log(digits);
console.log(randomChars);

//let으로 선언한 변수는 수정이 가능하다.
let l1 = 1;
l1 = 10;
//let l1 = 2;//오류발생(let으로 선언한 후 같은 이름의 변수를 선언할 수 없다.)
console.log(l1);

//const로 선언한 변수는 값을 변경할 수 없음
const c1 = 100;
//c1 = 1000; //오류발생(const로 선언한 후 값을 변경할 수 없다.)
console.log(c1);

//이렇게 하면 안된다. 일단 const로 선언한 뒤에, 나중에 변경할 일이 생기면 let으로 변경해서 사용하기.
v1 = 1000;
console.log(v1);

//변수의 스코프
function f() {
  {
    let num = 1;
    console.log(num); // 1
  }
  //console.log(num); // error
  // (중괄호 안에서 선언된 변수는 중괄호 안에서만 쓸 수 있다.)
}

f();

let s = `hello
world`;
console.log(s);

const name = "김철수";
const age = 20;
const message = `이름:${name}, 나이:${age}, 내년나이:${age + 1}`;
console.log(message);

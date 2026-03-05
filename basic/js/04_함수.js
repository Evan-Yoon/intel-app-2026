function greet(name = "고객님", age = 999) {
  console.log(name, "안녕하세요");
  console.log(age, "살이시군요");
  console.log("반갑습니다!");
  return true;
}

greet();
console.log(greet());

//반지름을 입력받아 원의 넓이를 구하는 화살표함수 작성
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const circleArea = (r) => 3.14 * r * r;

rl.question("숫자를 입력하세요: ", (answer) => {
  const radius = Number(answer);
  console.log(circleArea(radius));
  rl.close();
});

//(1)제곱 계산
const square = (n) => n * n;
console.log(square(2));

//(2)인사말 생성 (기본 매개변수 포함)
const greet = (name, greeting = "안녕하세요") => {
  console.log(`${name}님 ${greeting}`);
};
greet("김인텔");

//(3)합격 여부 판별
const isPassed = (score) => {
  if (score >= 60) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
};
isPassed(80);

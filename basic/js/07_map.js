const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => {
  return n * 2;
});

console.log(doubled);

// 객체 배열 다루기 ["<p>철수(25)</p>", "<p>영희(30)</p>", "<p>민수(28)</p>"]
const users = [
  { id: 1, name: "철수", age: 25 },
  { id: 2, name: "영희", age: 30 },
  { id: 3, name: "민수", age: 28 },
];
const users_tag = users.map((user) => {
  return `<p>${user.name}(${user.age})</p>`;
});
console.log(users_tag);

//dd
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//짝수만 출력
const evens = numbers2.filter((n) => n % 2 === 0);
console.log(evens);

//5보다 큰 수만 출력
const biggerThan5 = numbers2.filter((n) => n > 5);
console.log(biggerThan5);

// 객체 배열에서 조건 필터링
const users1 = [
  { id: 1, name: "철수", age: 25, isActive: true },
  { id: 2, name: "영희", age: 30, isActive: false },
  { id: 3, name: "민수", age: 28, isActive: true },
];

// 활성 사용자만
const activeUsers = users1.filter((guest) => guest.isActive === true);
console.log(activeUsers);

// 나이가 27세 이상인 사람만
const olderThan27 = users1.filter((guest) => guest.age >= 27);
console.log(olderThan27);

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>We already know that if we declare an variable with let or var keyword and we don't asign any value for this variable JavaScript dos't give any error.In this question above variable greeting has been declared without any value then next line assign an empty object as variable value. That's why the correct answer will be option 'A'</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>In JavaScript if we sum an number with an string javascript will convert the result as an string. In the question above was called the sum function and give 2 values as parameter. But parameter two was an string that's why the answer will option "C: "12" "</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: "A: `['🍕', '🍫', '🥑', '🍔']`"

<i>In the question above a food variable is created as an array, and then an object info is created with a property favoriteFood set to the first element of the food array, which is "🍕". The subsequent line where info.favoriteFood is assigned a new value "🍝" does't modify the food array. It remains unchanged, and that's why the answer will be option "A": ["🍕", "🍫", "🥑", "🍔"]</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>In javascript if we call any function which is accept argument and we called it without any argument then if the function argument don't have any default value it will consider as "undefined". That's why the answer will be option "B"</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>In the question above array.forEach method has been applyed on nums array. In the forEach method has been given a condition also, so when num value will true only then count variable value will be increase . The nums array have 4 element but first element is 0 which is an falsy value so we can say the count variable will increase only 3 times. That's why the answer will be option "C </i>

</p>
</details>

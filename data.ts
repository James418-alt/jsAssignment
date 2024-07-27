export const data = [
  {
    id: 0,
    task: `Write a code to change the first 5 letters of the string ("Amazing Grace") to capital letters`,
    answer: `const word = "Amazing Grace";
const b = word.slice(0, 5).toUpperCase().concat(word.slice(5));`,
    redirect: "level2",
    desc: "In the given example above, you'd have to write a code using JavaScript string method to turn the first 5 characters of the given string to uppercase",
    examples: [
      { input: "fedora is cute", output: "FEDORa is cute" },
      { input: "i will be great", output: "I WILl be great" },
    ],
  },
  {
    id: 1,
    task: "Create a post",
    answer: "post created",
    redirect: "level3",
    desc: "you have to create a new post",
    examples: [
      { input: "fedora is cute", output: "FEDORa is cute" },
      { input: "i will be great", output: "I WILl be great" },
    ],
  },
  {
    id: 2,
    task: "Create a post",
    answer: "post created",
    redirect: "level4",
    desc: "you have to create a new post",
    examples: [
      { input: "fedora is cute", output: "FEDORa is cute" },
      { input: "i will be great", output: "I WILl be great" },
    ],
  },
  {
    id: 3,
    task: "Create a post",
    answer: "post created",
    redirect: "stage4",
    desc: "you have to create a new post",
    examples: [
      { input: "fedora is cute", output: "FEDORa is cute" },
      { input: "i will be great", output: "I WILl be great" },
    ],
  },
];

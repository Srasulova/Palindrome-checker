const checkButton = document.querySelector<HTMLButtonElement>(".check-btn")!;

// function reverseString(str: string) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }

checkButton!.addEventListener("click", () => {
  let input: HTMLInputElement =
    document.querySelector<HTMLInputElement>(".input")!;

  const inputValLowerCase: string = input.value.toLocaleLowerCase().trim();

  let newString: string = "";
  for (let i = inputValLowerCase.length - 1; i >= 0; i--) {
    newString += inputValLowerCase[i];
  }
  let checkResult =
    document.querySelector<HTMLParagraphElement>(".check-result")!;

  if (inputValLowerCase === newString) {
    checkResult.innerHTML = `${input.value} is a Palindrome`;
  } else {
    checkResult.innerHTML = `${input.value} is not a Palindrome`;
  }

  console.log(input.value);
  input.value = "";
  console.log(input.value);
});

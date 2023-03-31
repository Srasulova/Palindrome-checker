var checkButton = document.querySelector(".check-btn");
// function reverseString(str: string) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
checkButton.addEventListener("click", function () {
    var input = document.querySelector(".input");
    var inputValLowerCase = input.value.toLocaleLowerCase().trim();
    var newString = "";
    for (var i = inputValLowerCase.length - 1; i >= 0; i--) {
        newString += inputValLowerCase[i];
    }
    var checkResult = document.querySelector(".check-result");
    if (inputValLowerCase === newString) {
        checkResult.innerHTML = "".concat(input.value, " is a Palindrome");
    }
    else {
        checkResult.innerHTML = "".concat(input.value, " is not a Palindrome");
    }
    console.log(input.value);
    input.value = "";
    console.log(input.value);
});

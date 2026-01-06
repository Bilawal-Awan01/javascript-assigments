let number = prompt("Enter a number for table:");

if (isNaN(number) || number === "") {
  alert("Invalid input! Please enter a number.");
} else {
  number = Number(number);
  console.log(`Table of ${number}`);
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}
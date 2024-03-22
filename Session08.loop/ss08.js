let userInput = parseInt(prompt("Nhập vào một số nguyên dương:"));

// In ra tất cả các số nguyên tố nhỏ hơn số vừa nhập
console.log("Các số nguyên tố nhỏ hơn " + userInput + " là:");
for (let i = 2; i < userInput; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

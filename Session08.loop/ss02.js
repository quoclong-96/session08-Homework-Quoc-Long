let number = parseFloat(prompt("Nhập vào một số nguyên dương:"));

// Kiểm tra xem số nhập vào có phải là một số nguyên dương không
if (number > 0 && Number.isInteger(number)) {
    let result = 1;
    // Tính giai thừa của số nhập vào
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    console.log(`Giai thừa của ${number} là: ${result}`);
} else {
    console.log("Vui lòng nhập vào một số nguyên dương.");
}

let number = parseFloat(prompt("Nhập vào một số nguyên dương bất kỳ"));

//Hàm Number.isInteger() để kiểm tra xem một giá trị có phải là một số nguyên hay không.
if (Number.isInteger(number) && number > 0) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
} else {
    console.log("Giá trị nhập vào không hợp lệ");
}

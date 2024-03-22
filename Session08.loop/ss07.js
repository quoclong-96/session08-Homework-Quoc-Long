let number = parseInt(prompt("Nhập vào một số nguyên dương:"));

// Khởi tạo biến để lưu tổng của các ước số
let sum = 0;

// Kiểm tra số hoàn hảo
for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        sum += i; // Cộng ước số vào tổng
    }
}

// Kiểm tra xem số đó có phải là số hoàn hảo không
if (sum === number) {
    console.log(number + " là số hoàn hảo.");
} else {
    console.log(number + " không phải là số hoàn hảo.");
}

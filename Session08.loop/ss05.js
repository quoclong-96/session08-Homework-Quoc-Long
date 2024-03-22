let random = Math.floor(Math.random() * 10) + 1;

// Khởi tạo biến để lưu số người dùng nhập vào
let userInput;

// Lặp cho đến khi người dùng nhập đúng với số ngẫu nhiên
do {
    // Yêu cầu người dùng nhập vào một số
    userInput = parseInt(prompt("Nhập vào một số từ 1 đến 10:"));
    // Kiểm tra số người dùng nhập và hiển thị thông báo tương ứng
    if (userInput > random) {
        console.log("Lớn hơn số ngẫu nhiên.");
    } else if (userInput < random) {
        console.log("Nhỏ hơn số ngẫu nhiên.");
    } else {
        console.log("Chúc mừng! Bạn đã đoán đúng số ngẫu nhiên là", random);
    }
} while (userInput !== random);

let a = +prompt("Nhap vao so nguyen duong a:");
let b = +prompt("Nhap vao so nguyen duong b:");

if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
    for (let i = 1; i <= a; i++) {
        if (i % b === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Giá trị không hợp lệ, vui lòng nhập vào số nguyên dương");
}

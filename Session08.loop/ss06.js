// Vòng lặp for để in bảng cửu chương từ 1 đến 10
for (let i = 1; i <= 10; i++) {
    // In ra số đang lặp
    console.log(`Bảng cửu chương của ${i}:`);

    // Vòng lặp for để in ra phép nhân từ 1 đến 10
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

    // Dòng trống để phân biệt bảng cửu chương của các số
    console.log("");
}

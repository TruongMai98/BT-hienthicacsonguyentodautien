/*let numbers = parseInt(prompt("Vui lòng nhập số lượng số nguyên tố đầu tiên cần in ra"));
let count = 0;
let result = "2 <br>"
let num = 3

while (count <= numbers) {
    let  isPrime = false;
    for (let i = 2; i < num -1; i++) {
        if (num % i === 0) {
             isPrime = true;
            break;
        }
    }
    if ( isPrime === false) {
        result += num + "<br>"
    }
    count++
    num++
}
document.write(result);*/

let number = +prompt('nhập số lương snt cần được in');
let count = 0; // đếm SNT đang xét
let countSNT = 0; // đếm xem đã đủ SNT cần in ra chưa



for (let i = 2; i < 1000; i++) {
    if (countSNT < number) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count += 1;
            }
        }
        if (count == 2) {
            document.write(i + '<br>');
            countSNT += 1;
        }
        count = 0;
    } else {
        break;
    }
}

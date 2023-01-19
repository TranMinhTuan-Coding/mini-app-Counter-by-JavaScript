// Sử dụng hàm IIFE = Invoked Immediately Function Expression
// CHú ý: tính chất quan trọng nhất của hàm IIFE là tính Private
// => Không thể gọi hàm ngoài phạm vi của hàm.
// => Không thể truy cập vào các biến được khai báo trong hàm

(function mainIIFEFunction() {

    const counterValue = document.querySelector('.counter-value');
    const appButtons = document.querySelectorAll('.app-buttons');
    var counter = 0;

    // Tư duy bài toán: convert 2 element cùng mang class như trên thành 1 mảng bằng Array.from()
    // Sau đó sử dụng phương thức forEach() để duyệt qua mảng trên:
    Array.from(appButtons).forEach(function (singleButton) {
        singleButton.addEventListener('click', function (event) {
            console.log(event.target);
            // => event.target = DOM element button phân biệt nhau bởi 2 class:
            // Sử dụng thuộc tính classList kiểm tra Attribute class của element:

            if (event.target.classList.contains('next-button')) {
                counter ++;
            } else if (event.target.classList.contains('previous-button')) {
                counter --;
            }

            counterValue.textContent = counter;

            if (counter === 0) {
                counterValue.style.color = 'red';
            } else if (counter > 0) {
                counterValue.style.color = 'blue';
            } else {
                counterValue.style.color = 'green';
            }
        })
    })
})();
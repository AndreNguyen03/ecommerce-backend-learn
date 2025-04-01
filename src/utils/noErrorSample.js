// sampleWithoutErrors.js

const someVar = "Hello, world!";  // Đúng: Sử dụng `const` cho biến
const someValue = 123;  // Đúng: Tên biến sử dụng camelCase

const greeting = "Hi";  // Đúng: Tên biến tuân theo quy tắc `id-match`
const secret = "hidden";  // Đúng: Không có dấu gạch dưới ở đầu tên biến

function fetchDataFromAPI() {  // Đúng: Hàm sử dụng camelCase
    console.log("Fetching data...");
}

function checkValues() {
    if (someValue === greeting) {  // Đúng: `someValue` và `greeting` đều là `const`
        return "Match!";
    }
    return "No match";
}

console.log(fetchDataFromAPI());

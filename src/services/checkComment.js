// sampleWithErrors.js

const some_var = "Hello, world!";  // Lỗi: Không sử dụng `const` hay `let` cho biến
let SomeValue = 123;  // Lỗi: Biến không dùng camelCase

const GREETING = "Hi";  // Lỗi: `GREETING` không phải là tên biến hợp lệ theo quy tắc `id-match`
const _secret = "hidden"; // Lỗi: Không sử dụng dấu gạch dưới ở đầu biến (no-underscore-dangle)

function get_data_from_api() {  // Lỗi: Tên hàm không dùng camelCase
    console.log("Fetching data...");
}

function checkValues() {
    if (SomeValue === GREETING) { // Lỗi: `SomeValue` cần phải là `const` thay vì `let`
        return "Match!";
    }
    return "No match";
}

console.log(get_data_from_api());

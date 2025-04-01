// errorFile.ts

let name = "John";  // Lỗi: Nên dùng const

function greet() {
  console.log("Hello, " + name);;
}

if  (name) {  // Lỗi: Dư khoảng trắng
  greet();
}

var pattern1 = /s$/;                   // use literal
var pattern2 = new RegExp("s$");       // use constructor

//      /[abc]/      // a, b, hoặc c
//      /[^abc]/     // bất kỳ ký tự nào ngoài a, b, c
//      /[a-zA-Z]/   // bất kỳ chữ cái Latin

//      /\d{2,4}/       // 2 đến 4 chữ số
//      /\w{3}\d?/      // 3 ký tự từ + 0 hoặc 1 chữ số
//      /\s+java\s+/    // java với ít nhất 1 space 2 bên

//      /java(script)?/     // "java" hoặc "javascript"
//      /(\d+)-(\d+)/        // 2 nhóm số cách nhau dấu '-'
//      /(['"])[^'"]*\1/     // Trích chuỗi trong cùng loại dấu quote

//      /^\d+$/           // Toàn bộ chuỗi là số
//      /\bJava\b/        // "Java" là một từ độc lập
//      /Java(?!Script)/  // "Java" không kèm "Script"
//      /Java(?=\:) /     // "Java" theo sau bởi dấu `:` mà không lấy `:`

//      /\bjava\b/i      // Khớp "Java", "JAVA", "java"
//      /\bjava\b/gi     // Tìm tất cả từ "java" không phân biệt hoa thường


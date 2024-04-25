// Khai báo useEffect và useState để sử dụng
import { useEffect, useState } from "react";

const Effect = () => {
    // Khai báo useState để lưu trữ biến trạng thái count và Hàm thay đổi biến trạng thái setCount
    const [count, setCount] = useState(0);

    // Hàm onClick xử lý sự kiện khi người dùng click vào nút Click và tăng count lên 1 đơn vị
    const onClick = () => {
        // Sử dụng Hàm thay đổi biến trạng thái setCount
        setCount(count + 1);
    };

    // Sử dựng Hook useEffect có phụ thuộc là count để khi mỗi lần count lên 1 đơn vị thì useEffect sẽ thực thi
    // và in giá trị ra
    useEffect(() => {
        // Lấy Element có Id là title
        const titleElement = document.getElementById("title");
        // Kiểm tra titleElement có được khai báo hay không
        if (titleElement) {
            // Xuất giá trị HTML vào element có Id là title
            titleElement.innerHTML = `Bạn đã bấm nút Click ${count} lần.`;
        } else {
            // Thông báo lỗi nếu không tìm thấy element có Id là title
            console.error(
                "Element with ID 'title' not found. Please ensure it exists in your HTML."
            );
        }
    }, 
    // Tùy chọn phụ thuộc count
    [count]);

    // Xuất ra HTML
    return (
        <div>
            <h2 id="title"></h2>
            <button onClick={onClick}>Click</button>
        </div>
    );
};

export default Effect;

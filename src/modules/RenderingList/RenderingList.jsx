import React from "react";

function ListComponent() {
    // Khai báo dữ liệu gồm 1 mảng có 3 phần từ
    const items = ["Item 1", "Item 2", "Item 3"];

    return (
        <div>
            {/* Sử dụng hàm map để in ra từng phần tử của mảng items và gán mỗi phần tữ là 1 prop key */}
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}

export default ListComponent;

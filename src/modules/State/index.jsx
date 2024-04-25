// Khai báo useState của react
import { useState } from "react";
// Khai báo tập dữ liệu
import { sculptureList } from "./data";

export default function Gallery() {
    // Sử dụng useState khai báo trạng thái và hàm cập nhật trạng thái
    // index là biến trạng thái để lưu trữ giá trị
    // setIndex là hàm cập nhất biến trạng thái
    const [index, setIndex] = useState(0);

    // Khai báo hàm handleClick để gọi đến hàm setIndex cập nhật biến trạng thái index lên 1 đơn vị 
    // khi người dùng click chuột vào nút Next 
    function handleClick() {
        setIndex(index + 1);
    }

    // Khái báo biến cục bộ để lưu trữ giá trị dữ liệu của danh sách sculptureList thứ index
    let sculpture = sculptureList[index];

    // Kết xuất ra HTML
    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </>
    );
}

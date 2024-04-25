// Ví dụ về xử lý sự kiện nhấp chuột trong React
function handleClick() {
    console.log("Đã nhấp chuột!");
}

function MyComponent() {
    return <button onClick={handleClick}>Nhấp vào Tôi</button>;
}

// Ví dụ về truy cập các thuộc tính của sự kiện trong React
function handleChange(event) {
    console.log("Giá trị đầu vào:", event.target.value);
}

function MyComponent() {
    return <input type="text" onChange={handleChange} />;
}

// Ví dụ về việc truyền đối số vào trình xử lý sự kiện trong React
function handleButtonClick(param) {
    console.log("Đã nhấp chuột với tham số:", param);
}

function MyComponent() {
    return (
        <button onClick={() => handleButtonClick("Xin chào")}>
            Nhấp vào Tôi
        </button>
    );
}

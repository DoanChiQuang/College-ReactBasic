import React from "react";

// props được sử dụng khi 1 Component khác truyền 1 giá trị qua
const ComponentA = (props) => {
    // Xác định biến truyền thuộc tính là title và truyền giá trị mặc định là Hello
    const { title = "Hello" } = props;

    // Hiển thị biến title truyền qua
    return (
        <div>
            <h2>Hello, My name is {title} This is a Component</h2>
        </div>
    );
};

const ComponentB = () => {
    return (
        <>
            <ComponentA title="John A" />
            <ComponentA title="John B" />
            <ComponentA title="John C" />
        </>
    );
};

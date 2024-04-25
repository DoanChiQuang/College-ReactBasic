// Khai báo thư viện cần thiết
import { createContext, useContext, useState } from "react";

// Khai báo MyContent bằng createContext với giá trị null
const MyContext = createContext(null);

// Khai báo hàm Provider nhận thuộc tính children
const Provider = ({ children }) => {
    // Khai báo useState để lưu trữ biến trạng thái value là Hello và Hàm thay đổi trạng thái setValue
    const [value, setValue] = useState("Hello");

    // Trả về MyContext.Provider với thuộc tính value là value
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Khai báo ComponentA chưa 2 component con là ComponentB và ComponentC
// Theo logic để ComponentB và ComponetC có thể sử dụng giá trị ở ComponentA thì phải truyền giá trị vào thuộc tính của ComponentB hoặc ComponentC
// Điều này thật khó khăn nếu chúng ta có một cấu trúc cây Cha Con
// Nhưng ở đây chúng ta sử dụng useContext thì vẫn đề đã được giải quyết
const ComponentA = () => {
    return (
        <>
            <ComponentB />
            <ComponentC />
        </>
    );
};

// Khai báo ComponentB được sử dụng useContent để lấy giá trị value mà không cần phải được truyền từ Cha: ComponentA
const ComponentB = () => {
    const value = useContext(MyContext);
    return <div>Component B {value}</div>;
};

// Khai báo ComponentC được sử dụng useContent để lấy giá trị value mà không cần phải được truyền từ Cha: ComponentA
const ComponentC = () => {
    const value = useContext(MyContext);
    return <div>Component C {value}</div>;
};

// Khai báo Hàm Context để lồng Provider để các Component sử dụng được giá trị của Context
const Context = () => {
    return (
        <Provider>
            <ComponentA />
        </Provider>
    );
};

export default Context;

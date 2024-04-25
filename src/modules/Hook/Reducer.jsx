import { useReducer } from "react";

// Khai báo biến khởi tạo ban đầu initialState với giá trị là Object: {count: 0}
const initialState = { count: 0 };

// Khai báo Hàm reducer khai báo việc xử lý như thế nào về cập nhật trạng thái khi tăng hoặc giảm count
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

// Khai báo hàm Reducer
const Reducer = () => {
    // Khai báo useReducer để xử lý logic giữa Hàm reducer và biến khởi tạo initialState
    // Trả về 2 đối số là count và dispatch
    // count là state chứa các giá trị của trạng thái sau khi thay đổi
    // dispatch là hàm cập nhật trạng thái 
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                INCREMENT
            </button>
            <h2>Count: {count.count}</h2>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                DECREMENT
            </button>
        </div>
    );
};

export default Reducer;

import { useState } from "react";

const Functional = () => {
    const [count, setCount] = useState(1);

    const onClick = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={onClick}>Click</button>
        </div>
    )
};

export default Functional
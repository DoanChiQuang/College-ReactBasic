import { useRef } from "react";

const UncontrolledComponents = () => {    

    const nameRef = useRef(null);

    const onClick = () => {
        alert(nameRef.current.value);
    }

    return (
        <div>
            <div className="">
                <label>Name:</label>
                <input type="text" name="name" ref={nameRef} />
            </div>
            <button onClick={onClick}>Submit</button>
        </div>
    );
};

export default UncontrolledComponents;

import { useState } from "react";

const ControlledComponents = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div>
            <div className="">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="text"
                    name="name"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ControlledComponents;

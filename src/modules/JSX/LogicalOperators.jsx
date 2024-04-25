const LogicalOperators = () => {
    const isLoggedIn = true;

    const element = (
        <div>
            {/* Kiểm tra isLoggedIn = true thì sẽ Render <p>Welcome back!</p> */}
            {isLoggedIn && <p>Welcome back!</p>}
            {/* Toán tử ! là phủ định, ở đây phủ định của isLoggedIn là false thì sẽ Render <p>Please log in.</p> */}
            {!isLoggedIn && <p>Please log in.</p>}
        </div>
    );

    return element;
};

export default LogicalOperators;

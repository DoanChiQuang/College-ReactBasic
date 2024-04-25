import React from "react";

class Class extends React.Component {
    // Phương thức contructor luôn gọi khi mà một component được khởi tạo
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }

    // Phương thức componentDidMount sẽ được gọi sau khi component đã render lần đầu
    componentDidMount() {
        // Phương thức setTimeout sẽ cập nhật trạng thái favoritecolor sau 3 giây
        setTimeout(() => {
            this.setState({ favoritecolor: "blue" });
        }, 3000);
    }

    // Phương thức shouldComponentUpdate được khai báo là component có nên được cập nhật hay không
    shouldComponentUpdate() {
        return true;
    }

    // Phương thức getSnapshotBeforeUpdate thực hiện trước khi trạng thái của component cập nhật
    // Trước khi cập nhật: favoritecolor = "red"    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the update, the favorite was " + prevState.favoritecolor;
    }

    // Phương thức componentDidUpdate thực hiện sau khi trạng thái của component đã cập nhật
    // Sau khi cập nhật: favoritecolor = "blue"
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "The updated favorite is " + this.state.favoritecolor;
    }

    // Phương thức changeColor để xử lý sự kiện khi click nút Change color
    changeColor = () => {
        this.setState({ favoritecolor: "orange" });
    };

    // Phương thức kết xuất ra HTML
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
                <button type="button" onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}

export default Class;

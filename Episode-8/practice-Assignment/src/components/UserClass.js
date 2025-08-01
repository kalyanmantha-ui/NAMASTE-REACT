import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

        console.log(this.props)

        this.state = {
            count : 0,
            dummy : "",
        }
    }
    componentDidMount () {
        console.log("hi there mounting");
        this.timer = setTimeout(() => {this.setState({
            dummy : "afterMount"
        });
    console.log("will stop after moving")},5000)
    }
    componentWillUnmount () {
        clearInterval(this.timer);
    }
    render() {
        const { name,userId } = this.props;
        const {count,dummy} = this.state;
        return (
            <div>
                <h1>User Name : {name}</h1>
                <h2>User Id : {userId}</h2>
                <h2>User Id : {count}</h2>
                <button onClick = {() => {
                    this.setState(
                        {
                            count: this.state.count+1
                        }
                    )
                }}>Count Increase</button>
                <p>{this.state.dummy}</p>

            </div>
        )
    }
}

export default UserClass;
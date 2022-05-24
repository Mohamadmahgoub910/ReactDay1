import React from "react";
import Link from "../link/Link";

export default class Navbar extends React.Component {
    // constructor(1)
    constructor() {
        // console.log("from constructor");
        super(); // inherit from parent class{react.component}
        // state created to contains a data
        this.state = {
            name: "Mohamad",
            title: "Front end developer",
            email: "mohamad@react.com",
        };
    }

    componentDidMount() {
        // from react (3)
        // this.setState({
        //     name: 'aliaa'
        // })
        // console.log("DidMount fire");
    }
    // componentDidUpdate() {
    //     // fired if component changed
    //     console.log("Did update");
    // }
    // componentWillUnmount() {
    //     // clean method
    //     console.log(
    //         "destroy if route change to remove a component and add a new one"
    //     );
    // }
    changeUserName = (name) => {
        this.setState({
            // name: 'layla'
            name: name
        })
    }
    render() {
        // console.log(this.props);
        // (2)
        // console.log("from rerender");
        return (<>
            {/* <h1>Hello {this.state.name} </h1> */}
            {/* <p>From App.js we make a props called {this.props.name}</p> */}
            {/* <Link name={'Home '} />
            <Link name={'AboutUs '} />
            <Link name={'ContactUs'} />
            <br />
            <button onClick={() => this.changeUserName("ali")}>Change User Name</button> */}
        </>)
    }
}

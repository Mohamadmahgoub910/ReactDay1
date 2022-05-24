import React from "react";

export default class Navbar extends React.Component {
    // constructor
    constructor() {
        console.log("from constructor");
        super(); // inherit from parent class{react.component}
        // state created to contains a data
        this.state = {
            name: "Mohamad",
            title: "Front end developer",
            email: "mohamad@react.com",
        };
    }

    componentDidMount() {
        // from react (1)
        console.log("after rendering dom DidMount fire");
    }
    componentDidUpdate() {
        // fired if component changed
        console.log("Did update");
    }
    componentWillUnmount() {
        // clean method
        console.log(
            "destroy if route change to remove a component and add a new one"
        );
    }
    render() {
        // (2)
        console.log("from rerender");
        return <h1 style={{ textAlign: "left" }}>Hello from Class </h1>;
    }
}

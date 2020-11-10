import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(props){
        super();
        console.log("Inside Constructor!");
        this.state={
            name:"Bhavna",
        }

        setTimeout(()=>{
            this.setState({name:"Avani"})
        }, 3000);
    }

    componentWillMount(){
        console.log("Component Will Mount");
    }
    shouldComponentUpdate(){
        console.log("Inside Should Component Update!");
        return true;
    }
    componentWillUpdate(newProps, newState){
        console.log("Component Will Update", newProps);
        console.log(newState);
    }

    componentDidUpdate(preProps, preState){
        console.log("Component Did Update");
        console.log(preState);
    }

    render() {
        console.log("Inside render Function!");
        return (
            <div>
                
            </div>
        )
    }
}

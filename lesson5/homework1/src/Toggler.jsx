import React, { Component } from "react";
let toggler = "Off"

class Toggler extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggler: 'off'
    }
    this.changeStatus = this.changeStatus.bind(this)
}
    changeStatus() {
        if( this.state.toggler === 'off'){
        this.setState({
            toggler: 'on',
        })
    }
    else{
        this.setState({
            toggler: 'off',
        })  
    }
    };
    render() {
        return (
<div className="toggler" 
onClick={this.changeStatus}
>
{this.state.toggler}
</div>
        )
    }
}


export default Toggler;

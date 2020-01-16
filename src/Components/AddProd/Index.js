import React, { Component } from "react";
class AddProd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new:
            [ 
                {num: "test"},
                {num: "tefffst"},
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        // this.setState({test: event.target.value});
        const tab = [...this.state.new]
        tab.push(event.target.value)
        this.setState({tab})
    }
    handleSubmit(event){
        // console.log(event)
        // this.setState({
        //     new:
        //     [ 
        //         {num: "test"},
        //         {num: "tefffst"},

        //     ]
        // });
        // event.preventDefault();
    }
    render() {
        return(
            <div>
                <h1>iA Web Space</h1>
                <form action="" method="post" onSubmit={this.handleSubmit}>
                        <input type="text"   onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                </form>
                <ul>{this.state.new.map(Index => (
                    <li>{Index.num}</li>
                ))}</ul>
            </div>

        )
    }

}
export default AddProd;
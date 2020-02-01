import React, { Component } from 'react';

class Instance extends Component{

        //     renderObj = () => { 
        //   const test =   Object.keys(this.props.minisites).map((obj, i) => {
        //       return (
        //         <li>
                    
        //             {console.log("ff")}
        //         </li>
        //       )})}
    render(){
            const test =   Object.keys(this.props.minisites).map((obj, i) => {
                return (
                  <li>
                      {obj}
                  </li>
                )})
        return(
            <li>
                <h3>{this.props.title}</h3>
                <p>{this.props.is_docker}</p>
                <p>{this.props.environment}</p>
                <p>{this.props.vhost_name}</p>
                <p>{this.props.total_size}</p>
                <p>{this.props.host}</p>
                <ul>
                    {test}
                </ul>
                <br/>
            </li>
                
        )
    }
}

export default Instance;
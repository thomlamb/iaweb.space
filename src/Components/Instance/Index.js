import React, { Component } from 'react';
import './index.css'
class Instance extends Component{
    render(){
        console.log(Object.keys(this.props.minisites).length)
            const test =   Object.keys(this.props.minisites).map((obj, i) => {
                return (
                  <li>
                      {obj}
                  </li>
                )})
        return(
            <li className="instance_elements">
                <h3>{this.props.title}</h3>
                <div className="docker">
                    <span >Docker</span >
                    <div class={"cover " + (this.props.is_docker === "yes" ? 'green': 'red')}>
                    </div>
                </div>
                <p>{this.props.environment}</p>
                <p>{this.props.vhost_name}</p>
                <p>{this.props.total_size}</p>
                <p>{this.props.host}</p>
                <div>
                    <span>{Object.keys(this.props.minisites).length}</span>
                    <ul>
                        {test}
                    </ul>
                    <button class="play-button"></button>
                </div>
                <br/>
            </li>
                
        )
    }
}

export default Instance;
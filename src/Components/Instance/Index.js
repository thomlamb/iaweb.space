import React, { Component } from 'react';
import './index.css'
class Instance extends Component{
    render(){
            const listMinisites =   Object.keys(this.props.minisites).map((obj, i) => {
                return (
                  <li>
                      {obj}
                  </li>
                )})
        return(
            <tr className="instance_elements">
                <td className="element_ville">{this.props.title}</td>
                <td className="element_environment">{this.props.environment}</td>
                <td className="element_url">{this.props.vhost_name}</td>
                <td className="element_size">{this.props.total_size}</td>
                <td className="element_serveur">{this.props.host}</td>
                <td>
                    <span className="element_minisite">{Object.keys(this.props.minisites).length}</span>
                    <ul>
                        {/* {trstMinisites} */}
                    </ul>
                    {/* <button class="play-button"></button> */}
                </td>
                <td className="docker">
                   <span class={"cover " + (this.props.is_docker === "yes" ? 'green': 'red')}></span>
                </td>
            </tr>
                
        )
    }
}

export default Instance;
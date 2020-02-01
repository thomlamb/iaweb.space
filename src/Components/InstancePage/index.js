import React, { Component } from 'react';  
import Instance from '../Instance/Index';
import data from './applications.json';
import './index.css'


class InstancePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            website: [],
        };
    }   

    componentDidMount(){
        const result = data.applications.filter(data => data.type === "website");

        this.setState({website: result})
        //  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        //      .then(response => response.json())
        //      .then(data => {console.log("test" + data); this.setState({ data: data.base_experience })});

        // fetch('http://infra-api.imio.be/applications')
        //     .then(response => response.json())
        //     .then(data => {console.log(data.applications[2]); this.setState({ test: data.length})});
    }
    getItemInfo(site){
        if(site.is_docker){
            return 'yes';
        }return 'no'
    }
    getMinisites(site){
        let found = null;
        let arr = Object.keys(site.minisites);
        arr.forEach(val => { 
             if (val) {
             found = val;
             return found
         }
        })
    }
    getName(site) {
        let str = site.application_name;
        let num = str.indexOf("_");
        return str.slice(0, num)
    }
    render(){
        const instancelist = this.state.website.map((site,) =>        
        <Instance 
            title={ this.getName(site)}
            is_docker={this.getItemInfo(site)} 
            environment={site.environment}
            vhost_name={site.vhost_name}
            total_size={site.total_size}
            host={site.host}
            minisites={site.minisites}
        />)
        return(
            <div>
                <div>
                    <h1 className="imio-title"> iMio Website</h1>
                </div>
                <div className="instance-container">
                    <h2>liste de instances</h2>
                    <ul className="instance-ul"> 
                        {instancelist}
                    </ul>
                </div>
            </div>
        )
    }
}

export default InstancePage;
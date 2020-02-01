import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    state = {
        clients: [
            { id: 1, nom: "thomas" },
            { id: 2, nom: "Jean" },
            { id: 3, nom: "Michmich"},
            { id: 3, nom: "ffffffff" }
        ],
        newClient : ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime();
        const nom = this.state.newClient;
        const clients = [...this.state.clients];
        clients.push({id,nom})
        this.setState({clients, newClient: ''})
    }
    handleChange = (event) => {
        this.setState({newClient: event.currentTarget.value})
    }
    handleDelet = (id) => {
        const clients = [...this.state.clients];
        const index = clients.findIndex((client) => client.id === id)
        clients.splice(index, 1);
        this.setState({clients});
    }
    render() {
        return (
            <div>
                <h1>HEllo</h1>
                <ul>
                    {this.state.clients.map(client => (
                        <li>
                            {client.nom} <button onClick = {() => this.handleDelet(client.id)}>X</button>
                        </li>
                    ))}
                </ul>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.newClient} onChange={this.handleChange} type="text" placeholder="search"/>
                <button>Add client</button>
            </form>
            </div>
        )
    }

}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';

import "./App.css";
import Column from './components/Column'
import Container from './components/Container';

class App extends Component {
    
    render() {
        let i = 0;
        const columns = [];
        columns.push(<Column key={++i} />);
        columns.push(<Column key={++i} />);
        columns.push(<Column key={++i} />);
        columns.push(<Column key={++i} />);
        columns.push(<Column key={++i} />);
        columns.push(<Column key={++i} />);
        columns.push(<Column key={++i} />);

        return (
            <div className = "App">
                <Container Columns={columns} />
            </div>
        );
    }
}

export default App;
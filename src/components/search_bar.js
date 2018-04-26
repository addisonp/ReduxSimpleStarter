import React, { Component } from 'react';

// React.Component converted to just Component since we are importing the React.Component as Component
class SearchBar extends Component {
    constructor(props) {
        super(props); // initialize state in class base component

        this.state = { term: '' };
    }
    render() {
        // return <input onChange={this.onInputChange} />;
        // combine the function called by the onChange
        // return <input onChange={(event) => console.log(event.target.value)} />;
        // single line arrow function, a single argument can drop off leading parenthesis
        // return <input onChange={event => console.log(event.target.value)} />;
        // to update the state
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
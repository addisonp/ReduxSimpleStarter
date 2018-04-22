import React from 'react';
import ReactDOM from 'react-dom';
// relative path from this file
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDpQ-J7bT3jy3aQ0AmaVrzf01CzvNGUfcY';

// Create a new component.  This component should contain some HTML
const App = () => {
    return (
        <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
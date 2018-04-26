import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDpQ-J7bT3jy3aQ0AmaVrzf01CzvNGUfcY';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); // equivalent to { videos : videos } where key and prop same name
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
            </div>
        );
    }
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector(".container"));
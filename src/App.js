import TAB_TYPES from './common/tabTypes.js'

import SearchBar from './components/SearchBar.js';
import Tabs from './components/Tabs.js';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "App__container">
          <SearchBar onSearchResults={this._onSearchResults} />
          <Tabs ref="tabs" currentTabId={parseInt(this.props.params.tabId)} />
        </div>
      </div>
    );
  }

  _onSearchResults = (data) => {
    this.refs.tabs.addTab(data, TAB_TYPES.SEARCH_RESULTS);
  }
}

export default App;

import React from 'react';
import debounce from 'lodash.debounce';
// provide-store refactor
import storeProvider from 'components/storeProvider';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  // debounced function that calls app component dosearch
  doSearch = debounce(() => {
    // this.props.doSearch(this.state.searchTerm); // provide-store refactor
    this.props.store.setSearchTerm( this.state.searchTerm );
  },300);

  handleSearch = (event) => { // recommended way to handle inputs
    // second arg in setState is callback after setState is done
    this.setState({
      searchTerm: event.target.value
    }, () => {
      this.doSearch();
    });
  }

  doReset = debounce(() => {
    // this.props.doReset(); // provide-store refactor
    this.props.store.resetSearchTerm();
  },100);
  handleReset = () => {
    this.setState({
      searchTerm: ''
    }, () => {
      this.doReset();
    });
  }

  render() {
    return (
      <div>
        {/* Get value from input via ref - exposes the input element */}
        {/* RECOMMENDED OPTION - put value on the component state */}
        <h2>{this.state.searchTerm}</h2>
        <input
          // ref={(inputEl) => this.searchInput = inputEl}
          type="search"
          value={this.state.searchTerm}
          placeholder="Enter search term" 
          onChange={this.handleSearch}
        />
        {this.state.searchTerm && 
        <button className="btn btn-primary"
          onClick={this.handleReset} >
          Reset
        </button>}
      </div>
    );
  }
}

// export default SearchBar;
// extraprops no optional
export default storeProvider()( SearchBar );
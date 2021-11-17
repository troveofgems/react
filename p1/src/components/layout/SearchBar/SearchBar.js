import React, {Component} from 'react';
import PropTypes from "prop-types";

class SearchBar extends Component  {
  state = {
    queryStr: ''
  };

  static propTypes = {
    clearUsers: PropTypes.func.isRequired,
    searchGitHubUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  }

  onChange = evt => this.setState({ [evt.target.name]: evt.target.value });

  onSubmit(evt) { // If This is not defined as an arrow function, context must be bound with .bind(this); Line 19
    evt.preventDefault();
    if (this.state.queryStr.length <= 0) {
      this.props.setAlert('Search Failed - Please Enter Some Search Criteria', 'light');
    } else {
      let query = this.state.queryStr;
      this.setState({ queryStr: '' });
      this.props.searchGitHubUsers(query);
    }
  }

  render() {
    return (
      <>
        <div className="searchBarContainer">
          <form className='form' onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              name="queryStr"
              placeholder="Search Users..."
              value={this.state.queryStr}
              onChange={this.onChange}
            />
            <input id="submitSearch" type="submit" value="Search" className="btn btn-dark btn-block" />
            {this.props.showClear && (
              <button className="" onClick={this.props.clearUsers}>Clear</button>
            )}
          </form>
        </div>
      </>
    );
  }
}

export default SearchBar;



/*
const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <form>
        <input type="text" name="text" placeholder="Search Users..." />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
    </div>
  );
};*/
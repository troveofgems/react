import React, { useState, useContext } from 'react';

import GithubContext from "../../../context/github/github.context";
import AlertContext from "../../../context/alert/alert.context";

// Refactored To Use Context Hook
const SearchBar = () => {
  const
    alertContext = useContext(AlertContext),
    githubContext = useContext(GithubContext);

  const [queryStr, setQueryStr] = useState('');
  const onChange = evt => setQueryStr(evt.target.value);
  const onSubmit = evt => {
    evt.preventDefault();
    if (queryStr === '') {
      alertContext.setAlert('Search Failed - Please Enter Some Search Criteria', 'light');
    } else {
      let query = queryStr;
      setQueryStr('');
      return githubContext.searchGitHubUsers(query);
    }
  }
  return (
    <>
      <div className="searchBarContainer">
        <form className='form' onSubmit={onSubmit}>
          <input
            type="text"
            name="queryStr"
            placeholder="Search Users..."
            value={queryStr}
            onChange={onChange}
          />
          <input id="submitSearch" type="submit" value="Search" className="btn btn-dark btn-block"/>
          {githubContext.users.length > 0 && (
            <button className="" onClick={githubContext.clearUsers}>Clear</button>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchBar;
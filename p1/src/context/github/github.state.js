import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from "./github.context";
import GithubReducer from './github.reducer';
import {
  SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS
} from '../types';

let githubClientId;
let githubClientKey;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientKey = process.env.REACT_APP_GITHUB_CLIENT_KEY;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientKey = process.env.GITHUB_CLIENT_KEY;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchGitHubUsers = async queryStr => {
    setLoading();
    const res = await axios
      .get(
        `https://api.github.com/search/users?q=${queryStr}` +
        `&client_id=${githubClientId}` +
        `&client_id=${githubClientKey}`
      );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  }

  // Get User
  const getUser = async username => {
    setLoading();
    const res = await axios
      .get(
        `https://api.github.com/users/${username}?` +
        `client_id=${githubClientId}` +
        `&client_id=${githubClientKey}`
      );

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  }

  // Get Repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&` +
        `client_id=${githubClientId}` +
        `&client_id=${githubClientKey}`
      );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  }

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Return Github Context
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        clearUsers,
        getUser,
        getUserRepos,
        searchGitHubUsers,
        setLoading
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
};

export default GithubState;
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from "./components/users/Users";
import User from "./components/users/User";
import SearchBar from "./components/layout/SearchBar/SearchBar";
import Alert from "./components/layout/Alert";
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    repos: [],
    user: {},
    loading: false,
    alert: null
  }

  // Component Lifecycle
/*  componentDidMount(error, errorInfo) {  // PROMISE FORMAT
    console.log('Component Did Mount');
    axios.get('https://api.github.com/users').then(res => console.log(res.data));
  }*/
/*  async componentDidMount() {  // Async/Await ECMA
    console.log('Component Did Mount');
    this.setState({loading: true});
    const res = await axios.get('https://api.github.com/users');
    this.setState({users: res.data, loading: false})
  }*/

  searchGitHubUsers = async queryStr => {
    this.setState({loading: true});
    const res = await axios
      .get(
        `https://api.github.com/search/users?q=${queryStr}` +
        `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
        `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_KEY}`
      );

    this.setState({users: res.data.items, loading: false});
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  getUser = async username => {
    const res = await axios
      .get(
        `https://api.github.com/users/${username}?` +
        `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
        `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_KEY}`
      );
    this.setState({user: res.data, loading: false});
  }

  setLoading = () => this.setState({loading: true});

  getUserRepos = async username => {
    const res = await axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&` +
        `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}` +
        `&client_id=${process.env.REACT_APP_GITHUB_CLIENT_KEY}`
      );
    this.setState({repos: res.data, loading: false});
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='pageContainer'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <>
                  <SearchBar
                    searchGitHubUsers={this.searchGitHubUsers}
                    clearUsers={this.clearUsers} showClear={this.state.users.length > 0}
                    setAlert={this.setAlert}
                  />
                  <Users loading={this.state.loading} users={this.state.users}/>
                </>
              )}
              />
              <Route exact path="/about" component={About}/>
              <Route exact path="/user/:login" render={props => (
                <User
                  getUser={this.getUser} user={this.state.user}
                  getUserRepos={this.getUserRepos} repos={this.state.repos}
                  setLoading={this.setLoading} loading={this.state.loading}
                  {...props}
                />
              )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

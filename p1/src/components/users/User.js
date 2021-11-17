import React, {Component} from 'react';
import Spinner from "../layout/Spinner/Spinner";
import {Link} from "react-router-dom";
import {OPEN_NEW_PAGE, SECURITY_OPTS} from "../../constants/generic.constants";
import Repos from "../repos/Repos";

class User extends Component {
  componentDidMount() {
    this.props.setLoading();
    setTimeout(() => {
      console.log('Simulating Loading');
      this.props.getUser(this.props.match.params.login);
      this.props.getUserRepos(this.props.match.params.login);
    }, 1000);
  }
  render() {
    const {
      name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists,
      hireable
    } = this.props.user;
    const { loading } = this.props;
    return (
      <>
        {loading && (<Spinner />)}
        {!loading && (
          <div>
            <Link to={'/'}>
              Back To Search
            </Link>
            <div className={'pageContainer userDetailContainer'}>
              <div className={'pageContainer hireContainer'}>
                <h2>Available For Hire</h2> {hireable ? (
                  <i className={"fas fa-check text-success"}>{''}</i>
                ) : (
                  <i className={"fas fa-times-circle text-danger"}>{''}</i>
                )}
              </div>
              <div className={'cardContainer'}>
                <img src={avatar_url} className={'round-img'} alt={''} />
                <h3>{name}</h3>
                <div>
                  {bio && (
                    <>
                      <h4>Bio</h4>
                      <p>{bio}</p>
                    </>
                  )}
                  <a href={html_url} target={OPEN_NEW_PAGE} rel={SECURITY_OPTS}>
                    Visit GitHub Profile
                  </a>
                  <ul>
                    <li>
                      {login && (
                        <>
                          <strong>Username: </strong> {login}
                        </>
                      )}
                    </li>
                    <li>
                      {location && (
                        <>
                          <strong>Company: </strong> {location}
                        </>
                      )}
                    </li>
                    <li>
                      {blog && (
                        <>
                          <strong>Website: </strong> {blog}
                        </>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>Followers: {followers}</div>
                <div>Following: {following}</div>
                <div>Public Repos: {public_repos}</div>
                <div>Public Gists: {public_gists}</div>
              </div>
              <Repos repos={this.props.repos} />
            </div>
          </div>
        )}
      </>
    );
  }
}

export default User;
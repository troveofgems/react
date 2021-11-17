// Class Component - Component State & Some ECMAScript
import React, {Component} from 'react';

class UserItem extends Component {
  state = {
    id: 'someIdValue',
    login: 'ttog',
    avatar_url: 'https://avatars.githubusercontent.com/u/59453879?s=400&u=ced33e55ff5766e77fbc18285336b238c9527d72&v=4',
    html_url: 'https://github.com/troveofgems',
    openNewPage: '_blank',
    rel_ONP: 'noopener noreferrer'
  };

  render() {
    const {login, avatar_url, html_url, openNewPage, rel_ONP} = this.state;
    return (
      <div className='card'>
        <img src={avatar_url} alt={`UserLogo-${login}`} />
        <h3>{login}</h3>
        <div>
          <a href={html_url} target={openNewPage} rel={rel_ONP}>
            View User Repos
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
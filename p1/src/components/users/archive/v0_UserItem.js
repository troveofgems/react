// Class Component - Components, State, & PropTypes
import React, {Component} from 'react';

class UserItem extends Component {
  constructor() {
    super();
    console.log('123');
    this.state = {
      id: 'someIdValue',
      login: 'ttog',
      avatar_url: 'https://avatars.githubusercontent.com/u/59453879?s=400&u=ced33e55ff5766e77fbc18285336b238c9527d72&v=4',
      html_url: 'https://github.com/troveofgems',
      openNewPage: '_blank',
      rel_ONP: 'noopener noreferrer'
    };
  }

  render() {
    return (
      <div className='card'>
        <img src={this.state.avatar_url} alt={`UserLogo-`} />
        <h3>{this.state.login}</h3>
        <div>
          <a href={this.state.html_url} target={this.state.openNewPage} rel={this.state.rel_ONP}>
            View User Repos
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
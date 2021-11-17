// Class Component - Receiving Props From Parent Component
import React, {Component} from 'react';

class UserItem extends Component {
  render() {
    const {login, avatar_url, html_url, openNewPage, rel_ONP} = this.props.user;
    return (
        <div style={cardContainer}>
          <img src={avatar_url} alt={`UserLogo-${login}`} style={imgRestraints} />
          <h3>{login}</h3>
          <div>
            {html_url.length === 0 ? (
              <h3>
                No GitHub Repo Available
              </h3>
            ) : (
              <a href={html_url} target={openNewPage} rel={rel_ONP}>
                View User Repos
              </a>
            )}
        </div>
      </div>
    );
  };
}

const
  cardContainer = {
    margin: '0 auto',
    textAlign: 'center',
    width: '50%'
  },
  imgRestraints = {
    height: '5rem',
    width: '5rem'
  };

export default UserItem;
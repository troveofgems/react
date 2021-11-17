// Class Component - React Lists & State Passing Props
import React, {Component} from 'react';
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    let mockAPIData = [
      {
        id: '1',
        login: 'ttog',
        avatar_url: 'https://avatars.githubusercontent.com/u/59453879?v=4',
        html_url: 'https://github.com/troveofgems'
      },
      {
        id: '2',
        login: 'vss',
        avatar_url: 'https://avatars.githubusercontent.com/u/27980585?v=4',
        html_url: 'https://github.com/HG-Jung'
      },
      {
        id: '3',
        login: 'sdc',
        avatar_url: '',
        html_url: ''
      }
    ];

    return (
      <div style={gridView}>
        {mockAPIData.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const gridView = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
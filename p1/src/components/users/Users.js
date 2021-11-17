// Class Component - React Lists & State Passing Props
import React from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner/Spinner";

const Users = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <Spinner/>
      ) : (
        <>
          <div style={gridView}>
            {users.map(user => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

const gridView = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
// Class Component - React Lists & State Passing Props
import React, { useContext } from 'react';
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner/Spinner";
import GithubContext from "../../context/github/github.context";

const Users = () => {
  const
    githubContext = useContext(GithubContext),
    {loading, users} = githubContext;
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
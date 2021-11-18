import React, { useContext } from 'react';
import GithubContext from "../../context/github/github.context";
import RepoItem from './RepoItem';

const Repos = () => {
  const
    githubContext = useContext(GithubContext),
    { repos } = githubContext;

  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
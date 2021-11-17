import React from 'react';
import PropTypes from 'prop-types';
import {OPEN_NEW_PAGE, SECURITY_OPTS} from "../../constants/generic.constants";

const RepoItem = ({ repo }) => {
  return (
    <div className={'card'}>
      <h3>
        <a href={repo.html_url} target={OPEN_NEW_PAGE} rel={SECURITY_OPTS}>
          View Repository - {repo.name}
        </a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem;
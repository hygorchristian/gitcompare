import React from "react";

import { Container, Repository } from "./styles";

const CompareList = ({ repositories }) => {
  repositories.sort((a, b) => {
    if (a.stargazers_count > b.stargazers_count) return -1;
    if (a.stargazers_count < b.stargazers_count) return 1;
    return 0;
  });

  return (
    <Container>
      {repositories.map(repository => (
        <Repository key={repository.id}>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>
          <ul>
            <li>
              <i className="fa fa-star" />
              {repository.stargazers_count} <small>stars</small>
            </li>
            <li>
              <i className="fa fa-code-fork" />
              {repository.forks_count} <small>forks</small>
            </li>
            <li>
              <i className="fa fa-exclamation-circle" />
              {repository.open_issues_count} <small>issues</small>
            </li>
            <li>
              <i className="fa fa-clock-o" />
              {repository.last_commit} <small>last commit</small>
            </li>
          </ul>
        </Repository>
      ))}
    </Container>
  );
};

export default CompareList;

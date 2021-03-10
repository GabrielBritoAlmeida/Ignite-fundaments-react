import { useState, useEffect } from "react";

import { Counter } from "../Counter";
import { RepositoryItem } from "../RepositoryItem";

import "../../styles/repositories.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  useEffect(() => {
    setList(
      repositories.map((repo) => (
        <RepositoryItem key={repo.name} repository={repo} />
      ))
    );
  }, [repositories]);

  if (list.length === 0) return <p>carregando...</p>;

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>{list}</ul>

      <Counter />
    </section>
  );
}

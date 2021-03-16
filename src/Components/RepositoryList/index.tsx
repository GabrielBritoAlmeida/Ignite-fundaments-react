import React, { useState, useEffect } from "react";

import { Counter } from "../Counter";
import { RepositoryItem } from "../RepositoryItem";

import "../../styles/repositories.scss";

type Repository = {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [list, setList] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  useEffect(() => {
    setList(
      repositories.map((repository) => (
        <RepositoryItem key={repository.name} repository={repository} />
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

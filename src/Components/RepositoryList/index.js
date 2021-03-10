import { Counter } from "../Counter";
import { RepositoryItem } from "../RepositoryItem";

import "../../styles/repositories.scss";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem
          repository="unform"
          description="Forms in React"
          link="https://github.com/unform/unform"
        />

        <RepositoryItem
          repository="unform"
          description="Forms in React"
          link="https://github.com/unform/unform"
        />

        <RepositoryItem
          repository="unform"
          description="Forms in React"
          link="https://github.com/unform/unform"
        />
      </ul>

      <Counter />
    </section>
  );
}

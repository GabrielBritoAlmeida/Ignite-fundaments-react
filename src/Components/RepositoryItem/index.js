export function RepositoryItem({ repository, description, link }) {
  return (
    <li>
      <strong>{repository}</strong>

      <p>{description}</p>

      <a href={link}>Acessar repositórios</a>
    </li>
  );
}

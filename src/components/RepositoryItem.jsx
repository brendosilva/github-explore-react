export function RepositoryItem(props){
  return (
    <li>
          <strong>{props.repository.name ?? 'default'}</strong>
          <p>Forms in React</p>

          <a href="#">
            Acessar repositorio
          </a>
    </li>
  )
}
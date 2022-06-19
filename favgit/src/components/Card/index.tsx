import { Container } from './styles'

//React-Icons
import { FaGithubSquare } from 'react-icons/fa'

//Hooks
import { useRepositories } from '../../hooks/useRepo'

export function Card() {
  const { repositories } = useRepositories()

  const date = new Date()
  date.setDate(date.getDate() - 7)

  const formattedDate = date
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('/')

  return (
    <Container>
      <div>
        <header>
          <h4>Quantidade</h4>
          <FaGithubSquare size={50} color="white" />
        </header>
        <strong>{repositories.length} Repositórios </strong>
        <p>desde {formattedDate}</p>
      </div>
    </Container>
  )
}

import { Container } from './styles'

//React-Icons
import { MdFavorite } from 'react-icons/md'
import { useMemo, useState } from 'react'
import { useRepositories } from '../../hooks/useRepo'

interface MyFavoriteSelectedProps {
  onClick: () => void
}

export function MyFavoriteSelected({ onClick }: MyFavoriteSelectedProps) {
  const [favoriteSelected, setFavoriteSelected] = useState(false)

  const { repositories } = useRepositories()

  return (
    <Container
      isSelected={favoriteSelected === true}
      activeColor={'orange'}
      onClick={onClick}
    >
      <MdFavorite
        size={30}
        onClick={() => setFavoriteSelected(!favoriteSelected)}
      />
    </Container>
  )
}

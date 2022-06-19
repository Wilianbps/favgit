import { Container, Content } from './styles'

//Icons
import { AiFillGithub } from 'react-icons/ai'

//Modal
import { MyFavoritesModal } from '../MyFavoritesModal'
import { useState } from 'react'

export function Header() {
  const [isMyFavoritesModalOpen, setIsMyFavoritesModalOpen] = useState(false)

  function handleOpenListMyFavoritesModal() {
    setIsMyFavoritesModalOpen(true)
  }

  function handleCloseListMyFavoritesModal() {
    setIsMyFavoritesModalOpen(false)
  }

  return (
    <Container>
      <Content>
        <div className="logo">
          <AiFillGithub size={60} color="var(--orange)" />

          <span>favgit_explorer</span>
        </div>
        <button type="button" onClick={handleOpenListMyFavoritesModal}>
          Meus Favoritos
        </button>
      </Content>

      <MyFavoritesModal
        openMyFavorites={isMyFavoritesModalOpen}
        onRequestClose={handleCloseListMyFavoritesModal}
      />
    </Container>
  )
}

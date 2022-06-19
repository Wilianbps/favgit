//react-icons
import { AiOutlineClose } from 'react-icons/ai'
import { GoLogoGithub } from 'react-icons/go'
import { BsGithub } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

//Style
import { Container, Content } from './styles'

//Modal
import Modal from 'react-modal'

Modal.setAppElement('#root')

interface MyFavoritesModalProps {
  openMyFavorites: boolean
  onRequestClose: () => void
}

export function MyFavoritesModal({
  openMyFavorites,
  onRequestClose
}: MyFavoritesModalProps) {
  const storageMyFavorites = JSON.parse(
    localStorage.getItem('@favgit:myFavoritesRepositories')!
  )

  return (
    <Modal
      isOpen={openMyFavorites}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <AiOutlineClose size={30} color="var(--orange)" />
      </button>
      <Container>
        <header>
          <div className="logo">
            <GoLogoGithub size={80} color="var(--orange)" />

            <BsGithub size={50} color="var(--orange)" />
          </div>
          <h2>Meus Favoritos</h2>
        </header>

        <Content>
          {storageMyFavorites?.map((repositorie: any) => (
            <ul key={repositorie.owner.id}>
              <li>
                <img src={repositorie.owner.avatar_url} alt={repositorie.name} />

                <div className="Title">
                  <strong>{repositorie.name}</strong>
                  <a href={repositorie.html_url} target="_blank">
                    {repositorie.html_url}
                  </a>
                </div>

                <div className="Favorite">
                  <div className="stars">
                    <AiFillStar size={15} color="var(--orange)" />
                    <span>stars: {repositorie?.stargazers_count}</span>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </Content>

        <button type="button" onClick={onRequestClose}>
          Fechar
        </button>
      </Container>
    </Modal>
  )
}

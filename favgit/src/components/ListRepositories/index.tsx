import { useEffect, useMemo, useState } from 'react'
import { useRepositories } from '../../hooks/useRepo'
import { MyFavoriteSelected } from '../MyFavoriteSelected'

import { Container } from './styles'

//React-Icons
import { AiFillStar } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

interface RepositoriesProps {
  name: string
  html_url: string
  owner: {
    id: number
    avatar_url: string
  }

  stargazers_count: number
}

export function ListRepositories() {
  const { repositories } = useRepositories()

  const [arrayFavorites, setArrayFavorites] = useState<RepositoriesProps[]>(
    () => {
      const storageMyFavoriteRepository = localStorage.getItem(
        '@favgit:myFavoritesRepositories'
      )

      if (storageMyFavoriteRepository) {
        return JSON.parse(storageMyFavoriteRepository)
      } else {
        return []
      }
    }
  )

  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem(
      '@favgit:myFavoritesRepositories',
      JSON.stringify(arrayFavorites)
    )
  }, [arrayFavorites])

  function handleAddOrRemoveFavorites(repositoryData: any, id: number) {
    const newFavoriteSelected = {
      name: repositoryData.name,
      html_url: repositoryData.html_url,
      owner: { id: id, avatar_url: repositoryData.owner.avatar_url },
      stargazers_count: repositoryData.stargazers_count
    }

    if (arrayFavorites.length === 0) {
      setArrayFavorites(favorites => [...favorites, newFavoriteSelected])
    } else {
      const findFavorite = arrayFavorites.find(
        favorite => favorite.owner.id === id
      )
      if (findFavorite) {
        const filteredFavorites = arrayFavorites.filter(
          arrayFavorite => arrayFavorite.owner.id !== id
        )
        setArrayFavorites(filteredFavorites)
      } else {
        setArrayFavorites(favorites => [...favorites, newFavoriteSelected])
      }
    }
  }

  const repositoriesFilter = useMemo(() => {
    return repositories.filter(repository =>
      repository.name.toLowerCase().includes(search)
    )
  }, [search, repositories])

  return (
    <Container>
      <header>
        <div className="search_comic">
          <input type="text" onChange={(e: any) => setSearch(e.target.value)} />
          <BsSearch size={25} color="var(--orange)" />
        </div>
      </header>
      {repositoriesFilter?.map(repository => (
        <ul key={repository.owner?.id}>
          <li>
            <img src={repository.owner?.avatar_url} alt={repository.name} />

            <div className="Title">
              <strong>{repository?.name}</strong>
              <a href={repository?.html_url} target="_blank">
                {repository?.html_url}
              </a>
            </div>
            <div className="Favorite">
              <div className="stars">
                <AiFillStar size={15} color="var(--orange)" />
                <span>stars: {repository?.stargazers_count}</span>
              </div>

              <MyFavoriteSelected
                onClick={() =>
                  handleAddOrRemoveFavorites(repository, repository?.owner.id)
                }
              />
            </div>
          </li>
        </ul>
      ))}
    </Container>
  )
}

import styled from 'styled-components'

export const Container = styled.div`
  margin-top: -6rem;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .search_comic {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      > input {
        height: 2.5rem;
        width: 25rem;
        border-color: red;
        outline-color: var(--orange);
        border-radius: 0.25rem;
        border: 1px solid gray;
        font-weight: 400;
        font-size: 1rem;
        color: var(--text-title);
      }
    }
  }

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ul {
    li {
      display: flex;
      align-items: center;
      background-color: var(--shape);
      border-radius: 0.625rem;
      width: 100%;
      padding: 1rem;
      list-style: none;
    }

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
    .Title {
      display: flex;
      flex-direction: column;
      margin-left: 1.25rem;
      strong {
        font-size: 1.25rem;
        color: #3d3d4d;
      }
      a {
        text-decoration: none;
        font-size: 1.125rem;
        color: #a8a8b3;
        margin-top: 0.25rem;
      }
    }

    .Favorite {
      margin-left: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;

      .stars {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px;
        background-color: #eee8ff;
        padding: 0.3rem;
        border-radius: 0.3rem;
      }

      svg {
        cursor: pointer;
      }
    }
  }
`

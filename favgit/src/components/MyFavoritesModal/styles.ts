import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    align-self: flex-end;
    width: 8rem;
    padding: 0 1rem;
    height: 3rem;
    background: var(--orange);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Content = styled.form`
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

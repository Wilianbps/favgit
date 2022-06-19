import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


:root{

  --blue:#7629CC;
  --orange: #E39144;
  --blue-light:#8e5ee8;

  --text-title:#363F5F;
  --text-body:#969CB3;

  --shape:#FFFFFF;
  --background:#f8f2f5;

 }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media(max-width: 720){
    font-size: 87.5%;
  }
}

body{
  -webkit-font-smoothing:antialiased;
}

body, input, textarea, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  background-color: var(--shape);
}

h1, h2, h3, h4, h5 ,h6, strong{
  font-weight: 600;
}

button{
  cursor:pointer;
}

overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--text-body);
    border-radius: 20px;
    border: 3px solid whitesmoke;
  }

.react-modal-overlay {
  background: rgba(0,0,0,0.5);
  
  position: fixed;
  top: 0;
  bottom:0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
width: 100%;
max-width: 60rem;
background: var(--background);
padding: 3rem;
position: relative;
border-radius: 0.25rem;
}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border:0 ;
  background: transparent;

transition: filter 0.2s;

  &:hover{
    filter:brightness(0.8)
  }
}
    
`

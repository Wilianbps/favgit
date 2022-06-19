import styled from 'styled-components'
import {transparentize} from 'polished'


interface MyFavoriteProps {
  isSelected: boolean
  activeColor: 'orange'
}

const colors = {
  orange: '#E39144'
}

export const Container = styled.div<MyFavoriteProps>`
  svg {
    color: ${props =>
      props.isSelected ? transparentize(0, colors[props.activeColor]) : 'gray'};
  }
`


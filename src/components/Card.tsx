import React, { FC } from 'react'

export enum CardVatiant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
    width?: string
    height?: string
    variant: CardVatiant
    children?: React.ReactNode
}

const Card: FC<CardProps> = 
  ({
    width, 
    height, 
    variant,
    children
  }) => {
    return (
      <div style={{width, height, border: 
        variant === CardVatiant.outlined ? '1px solid grey' : 'none',
        background: variant === CardVatiant.primary ?  'lightgrey' : ''
      }}>
          {children}
      </div>
    )
  }

export default Card
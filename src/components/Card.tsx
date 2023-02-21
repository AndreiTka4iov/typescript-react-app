import React, { FC } from 'react'

interface CardProps {
    width?: string
    height?: string
    children?: React.ReactNode
}

const Card: FC<CardProps> = 
  ({
    width, 
    height, 
    children
  }) => {
    return (
      <div style={{width, height, border: '1px solid grey'}}>
          {children}
      </div>
    )
  }

export default Card
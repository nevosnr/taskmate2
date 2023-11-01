import React from 'react'

export const alertCard = ({result, children}) => {
  return (
    <div className={result}>
        {children}
    </div>
  )
}

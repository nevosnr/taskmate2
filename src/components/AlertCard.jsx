import React from 'react'

export const AlertCard = ({ result, children }) => {
  return (
    <div className={`box ${result}`}>
        {children}
    </div>
  )
}

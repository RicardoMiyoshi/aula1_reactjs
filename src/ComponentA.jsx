import React, { Children } from 'react'

function ComponentA(props) {

  return (
    <div>Componente A =D
      {props.children}
    </div>
  )
}

export default ComponentA
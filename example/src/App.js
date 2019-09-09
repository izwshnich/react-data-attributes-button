import React, { useState } from 'react'

import DataAttrButton from 'react-data-attributes-button'

const App = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = e => {
    const active = JSON.parse(e.target.dataset.active)

    setIsActive(!active)
  }

  return (
    <div>
      <DataAttrButton data={{ 'data-active': isActive }} handler={handleClick}>
        {isActive ? 'ACTIVE' : 'INACTIVE'}
      </DataAttrButton>
    </div>
  )
}

export default App
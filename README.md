# react-data-attributes-button

> react button component with data-attribute

[![NPM](https://img.shields.io/npm/v/react-data-attributes-button.svg)](https://www.npmjs.com/package/react-data-attributes-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-data-attributes-button
```

## Usage

```tsx
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
```

## License

MIT © [izwshnich](https://github.com/izwshnich)

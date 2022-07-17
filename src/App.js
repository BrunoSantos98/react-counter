import React, {useState} from 'react'

import Counter from'./Counter.js'
import Albuns from './Albuns.js'
import Users from './Users.js'

const pages = {
  albuns: {
    text: 'Álbuns',
    component: Albuns,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  user: {
    text: 'Usuário',
    component: Users,
  }
}

function App() {
  const [page,setPage] = useState('albuns')

  const handleChangePage = (page) => {
    setPage(page)
  }

  const Page = pages[page].component

  const pageNames = Object.keys(pages)

  return (
    <>

    {
      pageNames.map(page => <button onClick = {() => handleChangePage(page)}>{pages[page].text}</button>)
    }      

      {Page && <Page />}
    </>
  )
}

export default App

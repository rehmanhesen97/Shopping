import React, { useState } from 'react'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/style.css"
import Products from './components/Products'
import { AppContext } from './context/AppContext'
import {
  BrowserRouter,
  Routes,
  Route
 
}
  from 'react-router-dom';
import Detail from './components/Detail'
import { product_list } from './constants/products'

function App() {

  const [card, setCard] = useState([])
  const [count, setCount] = useState(0)


  // console.log(newCard2);
  // console.log(newCard2.count);

  const addToCard = (product) => {

    const existProduct = card.find(x => x.id === product.id)

    setCount(prevState => prevState + 1)

    if (!existProduct) {
      setCard(prevState => [
        ...prevState,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          old_price: product.old_price,
          count: 1
        }
      ])
      return
    }

    existProduct.count = existProduct.count + 1

    setCard(prevState => prevState)
  }

  const adRemoveCard = (product) =>{
    const existProduct = card.find(x => x.id === product.id)
    if (!existProduct){
      return
    }
    else if(existProduct.count > 0) {
    setCount(prevState => prevState - 1)
    existProduct.count = existProduct.count - 1
    setCard(prevState => prevState)
    console.log("existProduct",existProduct);
    
  return
} 


  }

  return (
    <BrowserRouter>
      <AppContext.Provider value={{
        card,
        addToCard,
        count,
        
        adRemoveCard
        
       
      }}>
        <div>

          <Header />
          <Routes>
            <Route path='/detail/:id' element={< Detail />}></Route>
            <Route path='/' element={<Products />}></Route>
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>

  )
}

export default App
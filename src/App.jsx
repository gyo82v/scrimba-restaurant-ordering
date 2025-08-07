import { useState } from "react"
import {menuArray} from "./data.js"
import headerImg from "./images/bg.png"

import Item from "./components/Item"
import Order from "./components/Order.jsx"
import Form from "./components/Form.jsx"

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [formData, setFormdata] = useState({ name : "", cardNumber : "", cvv : ""})
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [isOrderCompleted, setIsOrderCompleted] = useState(false)

  //tailwind styles
  const container = `${isFormVisible && "bg-gradient-to-b from-neutral-500 via-neutral-300 to-neutral-500"} h-screen`
  const header = `bg-cover bg-center p-8 text-neutral-300`
  const title = `text-2xl`
  const description = ``
  const main = `p-4 flex flex-col`
  const itemsSection = `flex flex-col gap-5 mt-4`
  //

  const addItemTocart = (name, price) => {
    setCart(c => [...c, {name : name, price : price}])
    setTotal(t => t + price)
  }
  const removeItemFromCart = () => {
      console.log("removed")
  }
  const handleChange = e => {
    const {name, value} = e.target
    setFormdata(d => ({...d, [name] : value }))
  }
  const handleForm = () => (setIsFormVisible(f => !f))
  const handleIsOrderCompleted = () => {
    setIsOrderCompleted(o => !o)
    setIsFormVisible(f => !f)
    setCart([])
    setTotal(0)
    setFormdata({name : "", cardNumber : "", cvv : ""})
  }

  const itemsArray = menuArray.map(i => (
    <Item data={i} key={i.id} addItem={addItemTocart} />
  ))


  return (
   <div className={container}>
    <header className={header} style={{backgroundImage: `url(${headerImg})`}}>
      <h1 className={title}>Gyos's diner</h1>
      <p className={description}>The best burgers and pizzas in town.</p>
    </header>
    <main className={main}>
      <section className={itemsSection}>
        {itemsArray}
      </section>
      {cart.length > 0 && 
        <Order 
          cart={cart} 
          total={total} 
          removeItem={removeItemFromCart} 
          isVisible={isFormVisible}
          handleForm={handleForm} 
        />
      }
      {isFormVisible && <Form data={formData} handleChange={handleChange} completed={handleIsOrderCompleted} /> }
      {isOrderCompleted && <div><h1>Order completed</h1></div>}
    </main>
   </div>
  )
}

export default App

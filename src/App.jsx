import { useState } from "react"
import {menuArray} from "./data.js"
import headerImg from "./images/bg.png"

import Item from "./components/Item"
import Order from "./components/Order.jsx"

function App() {
  const [cart, setCart] = useState([{coka : 10}, {pizza : 4}, {salmon : 3}])

  //tailwind styles
  const container = ``
  const header = `bg-cover bg-center p-8 text-neutral-300`
  const title = `text-2xl`
  const description = ``
  const main = `p-4 flex flex-col`
  const itemsSection = `flex flex-col gap-5 mt-4`
  //

  const itemsArray = menuArray.map(i => (
    <Item data={i} key={i.id} />
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
      {cart.length > 1 && <Order cart={cart} />}
      <div>
        <p>form here</p>
      </div>
    </main>
   </div>
  )
}

export default App

import { useState } from "react"
import headerImg from "./images/bg.png"

function App() {
  //tailwind styles
  const container = ``
  const header = `bg-cover bg-center p-8 text-neutral-300`
  const title = `text-2xl`
  const description = ``
  //

  return (
   <div className={container}>
    <header className={header} style={{backgroundImage: `url(${headerImg})`,}}>
      <h1 className={title}>Gyos's diner</h1>
      <p className={description}>The best burgers and pizzas in town.</p>
    </header>
    <main>
      <h1>dishes here</h1>
      <div>
        <p>complete order here</p>
      </div>
      <div>
        <p>form here</p>
      </div>
    </main>
   </div>
  )
}

export default App

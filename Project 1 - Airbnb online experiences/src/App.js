import React from "react"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./Data"


/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
export default function App() {

    const cards = Data.map((card)=>{
        return (
          <Card
            key={card.id}
            // item = {card}
            {...card}
          />
        )
    })




    return (
      <div> 
        <NavBar/>
        <Hero/>
        <div className="cards-list">{cards}</div>
        
      </div>
       
    )
}
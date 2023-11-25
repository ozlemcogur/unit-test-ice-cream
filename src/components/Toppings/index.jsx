import React, { useEffect, useState } from 'react'
import axios from "axios"

const Toppings = () => {
  const [toppings, setToppings] = useState([])
  const [basket, setBasket] = useState([])
 
  useEffect(()=>{
    axios.get("http://localhost:3006/toppings")
    .then((res)=>setToppings(res.data))
  })

  const handleChange=(e, topping)=>{
    e.target.checked 
    ? setBasket([...basket, topping])
    : setBasket(basket.filter((i)=>i.name !== topping.name))

  }

  return (
    <div className='container my-5'>
      <h1>Sos Çeşitleri</h1>
      <p>Tanesi <span className='text-warning'>3tl</span></p>
      <h3>Soslar Ücreti <span>{basket.length * 3}</span></h3>
  
      <div className='row gap-3 mt-4'>
        {toppings.map((topping) => (
          <div onClick={(e) => handleChange(e, topping)} className='top-card'>
            <label
              className='d-flex flex-column align-items-center py-4 rounded-4'
              htmlFor={topping.name}
            >
              <img src={topping.imagePath} alt={topping.name} />
              <p>{topping.name}</p>
            </label>
            <input id={topping.name} type='checkbox' />
          </div>
        ))}
      </div>
    </div>
  );}
  

export default Toppings

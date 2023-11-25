import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../Card'


const Scoops = () => {
  const [scoopsData, setScoopsData] = useState([])
  const [basket, setBasket] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3006/scoops")
    .then((res)=>setScoopsData(res.data))
    .catch((err)=>console.log(err))
  },[])
 
  return (
    <div className='container'>
      <h1>Dondurma Çeşitleri</h1>
      <p>Tnesi 20 tl</p>
      <h2 data-testid="toplam">Çeşitler Ücreti: {basket.length * 20}</h2>
    <div className='row gap-5 justify-content-between'>
      {scoopsData.map((scoop,index)=>( 
      <Card 
      key={index}
      basket={basket}
      setBasket={setBasket}
      scoop={scoop}/>    
      ))}
    </div>
    </div>
  )
}

export default Scoops

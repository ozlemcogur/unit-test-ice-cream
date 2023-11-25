import React from 'react'


const Card = ({scoop, basket, setBasket}) => {
  const found = basket.filter((item)=> item.name === scoop.name)
  const amount = found.length
   const handleReset=()=>{
    const clearArray = basket.filter((item) => item.name !== scoop.name);
    setBasket(clearArray);
  }
   
  return (
    <div 
    style={{width:"150px"}}
    className='d-flex flex-column align-items-center gap-2'>
      <img src={scoop.imagePath} className='img-fluid' alt='image'/>
      <label htmlFor=''>{scoop.name}</label>
      <div className='d-flex align-items-center gap-2 mt-2'>
        <button onClick={()=>handleReset()} name='Sıfırla' className='btn btn-danger'>Sıfırla</button>
        <span className='fs-2'>{amount}</span>
        <button onClick={()=>setBasket([...basket, scoop])} name='Ekle' className='btn btn-success'>Ekle</button>
      </div>
    </div>
  )
}

export default Card

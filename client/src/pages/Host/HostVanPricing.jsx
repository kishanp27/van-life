import React from 'react'
import { useOutletContext } from 'react-router-dom';

const HostVanPricing = () => {
  const {currentVan} = useOutletContext(); 
  return (
    <h1 className='host-van-price'>${currentVan.price} <span>/day</span> </h1>
  )
}

export default HostVanPricing
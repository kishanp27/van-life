import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const HostVanPhotos = () => {
  const {currentVan} = useOutletContext();
  return (
    <img src={currentVan.imageUrl} className='host-van-detail-image'></img>
  )
}

export default HostVanPhotos
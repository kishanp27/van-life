import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const HostVanInfo = () => {

  const {currentVan} = useOutletContext();
  // const{id} = useParams();

  // const [description, setDescription] = useState(null);
  // useEffect(()=>{
  //   fetch(`/api/host/vans/${id}`).then(res => res.json()).then(data => console.log(setDescription(data.vans.description)))
  // },[])

  return (
    <section className='host-van-detail-info'>
      <h4>Name: <span>{currentVan.name}</span></h4>
      <h4>Category: <span>{currentVan.type}</span></h4>
      <h4>Description: <span>{currentVan.description}</span></h4>
      <h4>Visibility: <span>Public</span></h4>
    </section>
  )
}

export default HostVanInfo
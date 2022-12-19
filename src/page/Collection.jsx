import React from 'react'
import "./Collection.scss";

const Instagram = () => {
  return (
    <div className='collection'>
      <div className="collectionLeft">
        <img src="/fila1.jpg" alt="" />
        <h1>ONLINE EXCLUSIVE<br/>DOWN COLLECTION</h1>
        <button>Detail View</button>
      </div>
      <div className='collectionRight'>
        <div className='collectionTop'>
          <img src="/fila2.jpg" alt="" />
          <h2>헤리티지 미들 다운</h2>
          <button>Detail View</button>
        </div>
        <ul>
          <li>
            <a href="#"><img src="/fila3.jpg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="/fila4.jpg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="/fila5.jpg" alt="" /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Instagram
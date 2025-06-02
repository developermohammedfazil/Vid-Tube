import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../component/Sidebar/Sidebar'
import Feed from '../../component/Feed/Feed'

const home = ({sidebar}) => {
  const[category,setcategory]=useState(0);
  return (
    <>
       <Sidebar sidebar ={sidebar} category={category} setcategory={setcategory}/>
       <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed category={category} />
       </div>
    </>
  )
}

export default home

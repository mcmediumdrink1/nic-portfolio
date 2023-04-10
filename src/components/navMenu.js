import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'
import React, {useState} from 'react'


function Navigation (){
    const[showMenu,setShowMenu]=useState(false)
    let menu

    if(showMenu){
     menu = <div>
        The Menu
         </div>
     }

    return(
        <nav>
            <span>
        <Bars
        onClick={() => setShowMenu(!showMenu)}
        />

        </span>
        {menu}
        </nav>
    )

}








export default Bars
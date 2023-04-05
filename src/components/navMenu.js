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







const Bars = styled(FaBars)`
display:none;
fill: #F2EFE8;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute
  padding: 0 2rem;
  margin-top: 1rem;
  margin-right: 1rem;
  transform: translate (-100%, 75%);
  fill: #F2EFE8;
  font-size:1.5rem;
  font-weight: lighter;
  stroke-width= 0.5;
  cursor: pointer;
}
`
export default Bars
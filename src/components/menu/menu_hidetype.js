import './style.css'
import { useState, useEffect } from 'react';
export default function DropMenu(x)
{
  const[state, SetState]=useState('hide');
  const[stateBtn,SetStateBtn]=useState('showBtn');
  const[stateBtn1,SetStateBtn1]=useState('hideBtn1');
  function clicked()
  {
    if(state=='hide')
      {SetState('show');SetStateBtn('hideBtn');SetStateBtn1('showBtn1');}
    else {SetState('hide');SetStateBtn('showBtn');SetStateBtn1('hideBtn1')}
  }
  return(     
    <div class="dropdown">
          <button className={stateBtn}><div onClick={clicked}>  &#9776;</div></button>
          <button class={stateBtn1}><i class="fa fa-times" onClick={clicked}>X</i></button>
          <div class={state} >
              <div className='content'><a href="#" className='text'> • HOME1</a></div>
              <div className='content'><a href="#" className='text'> • ABOUT</a></div>
              <div className='content'><a href="#" className='text'> • SEVICES1</a></div>
              <div className='content'><a href="#" className='text'> • WORKS</a></div>
              <div className='content'><a href="#" className='text'> • CLIENTS</a></div>
              <div className='content'><a href="#" className='text'> • CONTACTS</a></div>
        </div>
  </div>);
}


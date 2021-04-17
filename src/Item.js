import React,{useState,useEffect,useContext} from "react";
import './App.css'
import DialogItem from './Dialog'
import {ContextValue} from './App'







function Item (props) {
    
let value=useContext(ContextValue)
    
    
    
  return (
    
      
        <div>
       <span  className={value.item.active ? 'item': null} 
       onClick={()=>value.dispatch({type:'handleActive', payload:{id:value.item.id}})}>{value.item.value}</span>
       <button onClick={()=>value.dispatch({type:'openDialog'})} >Edit</button>
       <button onClick={()=>value.dispatch({type:'handleDelete', payload:{id:value.item.id}})}>delete</button>
       {value.isOpen &&  <DialogItem />}
      </div>
    
   
  )
}




export default Item
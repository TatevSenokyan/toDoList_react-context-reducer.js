import React,{useState,useEffect,useRef, useReducer} from "react";
import Item from './Item';
import {v4 as uuidv4} from "uuid";
import './App.css'

export const ContextValue=React.createContext()

const reducer=(items,action)=>{
  switch(action.type) {
    case 'handleAdd':
        let id=uuidv4();
      return  {...items, data:[...items.data, {value:action.payload.value, id:id, active:false}],}
      case 'handleDelete':
        return {...items, data: items.data.filter((item)=>item.id!==action.payload.id)}
      case 'handleActive':
        return {...items, data: items.data.map(item=> { 
          if(item.id==action.payload.id) {
           
            if(!item.active) {
              return {...item,active:true}
            
            
          }  else {
            return {...item,active:false}
          }
          
         } else {
          return {...item}
      }
     
      
  
    })} 
    case 'openDialog':
      return {...items, isOpenDialog:!items.isOpenDialog}
      case 'closeDialog':
          return {...items, isOpenDialog:false}

  

  case 'saveChange':
    return  {...items, isOpenDialog:false, data: items.data.map(item=> {
          if(item.id==action.payload.id) {
            return {...item, value:action.payload.newValue}
        
          
         } else {
          return {...item}
      }
      
      
      
      })
      }
}
}


function App () {


 
  let [inputValue,setInputValue]=useState('')
  let [items,dispatch]=useReducer(reducer,{data:[], isOpenDialog:false})
  
  
  let inputRef=useRef()


 const handleInputChange=(e)=>{
  setInputValue(e.target.value)

 }




useEffect(()=>
  inputRef.current.focus()
)




  return (
    
     
        <div>
          <input ref={inputRef} value={inputValue} onChange={handleInputChange}/>
          <button onClick={()=>dispatch({type:'handleAdd', payload:{value:inputValue}})}>add</button>
        {items.data.map((item)=>
        <ContextValue.Provider value={{item:item, isOpen: items.isOpenDialog, dispatch:dispatch}} >
         <Item key={item.id} item={item} />
         </ContextValue.Provider>
        )
        }
      </div>
    
   
  )
}




export default App;

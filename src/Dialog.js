import React, {useState,useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {ContextValue} from './App'


 function   DialogItem(props) {
  
    let value=useContext(ContextValue)
    let [inputValue,setInputValue]=useState(value.item.value)
    
  

 

  const handleInputChange=(e)=>{
      setInputValue(e.target.value)
  }



  return (
    <div>
     
      <Dialog open={true} onClose={()=>value.dispatch({type:'closeDialog'})} aria-labelledby="form-dialog-title">
        
        <DialogContent>
          <DialogContentText>
            change input value
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={inputValue}
            onChange={handleInputChange}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button  onClick={()=>value.dispatch({type:'closeDialog'})} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>value.dispatch({type:'saveChange',payload:{newValue:inputValue, id:value.item.id}})} color="primary">
             Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogItem;
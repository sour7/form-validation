import React from 'react';
import { useState } from 'react';
import './forms.css';

export const Forms = (props) => {
  const {label,errorMessage, onChange, id, ...inputProps} =props;
  const [focused, setFocused] = useState(false);

  const handleFocus=(e)=>{
    setFocused(true)

  }
  
  return (
    <>
      
        <div className="formInput">
          <label>{label}</label>
          {/* <input type="text" placeholder={props.placeholder} onChange={e=>props.setUsername(e.target.value)} /> */}
          {/* <input type="text" placeholder={props.placeholder} ref= {props.refer} /> */}
          {/* <input  placeholder={props.placeholder} name={props.name} /> */}
          <input {...inputProps} onChange={onChange} onBlur ={handleFocus}  focused= {focused.toString()} onFocus={()=>inputProps.name==="confirmpassword" && setFocused(true)} />
          <span>{errorMessage}</span>
        </div>
     
    </>
  );
};

import React from 'react'
// import PropTypes from 'prop-types';

export default function Alert(props) {
    const capitalize = (word) =>{
        const lowercase = word.toLowerCase();
        const capital = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
        return(capital);
        // return(lowercase);

    }
  return (
    <div style={{height:'50px'}}>
   {props.mesg && <div>
     <div className={`alert alert-${props.mesg.type} alert-dismissible fade show`} role="alert">
     {capitalize(props.mesg.type)} : {props.mesg.messg}!
         </div>
    </div>
    }
    </div>
  )
}

// import react, { useState } from 'react'

//  function App(){


// const [val,setval]=useState()
// //     const valArray = val.split(' ').join('').split('');
// //     var valSpace = val.split("")

// //     // to work with backspace
// //     if(valSpace[valSpace.length-1] == ' '){
// //         var valSpaceN = valSpace.slice(0, -2)
// //         val = valSpaceN.join("")
// //         setval({ number:val });
// //         return;
// //     }

// //     if(isNaN(valArray.join('')))
// //         return;
// //     if(valArray.length === 17)
// //         return
// //     if(valArray.length % 4 === 0 && valArray.length <= 15) {
// //         setval({ number: val + "  " });
// //     }else{

// //         setval({ number: val})
// //     }
  
  
//   return(
// <div>
// <input  onChange={((e)=>{var val = e.target.value;
//               this.setState({
//                number: val.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
//          });})}/>
  
// </div>

//   )
// } 

// export default App;







import './App.css';
import React, { useState } from "react";
import {  useForm } from "react-hook-form";
import AadharInput from './AadharInput';
function App() {

  var x=[' ',"0","1","2","3","4","5","6",'7',"8","9",null]
  // const formMethods = useForm();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const onSubmit = (storedata) => {
    alert("Submitted");
    console.log(storedata)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <FormProvider {...formMethods} > */}
      <label>Adhar Number:</label> <br></br>
      {/* <AadharInput /> */}
      <input type="text" maxLength={14} {...register("adharnumber", {
        required: true, maxLength: 14,
        onChange(event) {

          console.log("event",x.includes(event.nativeEvent.data))

          if(!x.includes(event.nativeEvent.data)){
            console.log(event.target.value)
           setValue("adharnumber", event.target.value.slice(0,-1) )

          }

          if (event.target.value.length==4 &&event.nativeEvent.data!=null) {
            
            setValue("adharnumber", event.target.value +' ')
            console.log("lenghth of string  enter by user" , event.target.value.length)
          }
          if (event.target.value.length == 9&&event.nativeEvent.data!=null) {
           
             setValue("adharnumber", event.target.value +' ')
            //  console.log('lenghth of string enter by user when >9' , event.target.value.length)
           }
        }, pattern: /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/
      })} />
      
      {errors.adharnumber && <p>Invalid Adhar number</p>}
      <button>Submit</button>
      {/* </FormProvider> */}
    </form>
  );
}
export default App;

<h1 align="center"> React Form </h1>



## 01. Simple Form

```js

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }
    return (
        <div style={{marginTop:"50px"}}>
            <h2 className="mb-10 text-2xl text-purple-600"> Simple Form </h2>

            <form onSubmit={handleSubmit}  className=" flex flex-col mx-auto w-80 gap-3 border p-3 rounded-xl bg-gray-600" >
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                <input type="number" name="phone" placeholder="Your Phone" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
  
        </div>
    );
};

export default SimpleForm;

```


## 02. State Form


```js
/* eslint-disable no-undef */

import { useState } from "react";


const StateForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    // Submit Handler 
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6 ){
            setError("Password must be 6 charecter")
        }else{
            setError('')
            console.log(name, email, password)
        }
    }

    // ONchange Name handler 
    const onChangeName = e => {
        setName(e.target.value)
    }

    // ONchange Email handler 
    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    // ONchange Password handler 
    const onChangePassword = e => {
        setPassword(e.target.value)
    }


    return (
        <div style={{marginTop:"50px"}}>

            <h2 className="mb-10 text-2xl text-red-500">Use State Form </h2>

            <form onSubmit={handleSubmit}  className=" flex flex-col mx-auto w-80 gap-3 border p-3 rounded-xl bg-gray-600" >
                <input onChange={onChangeName} type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                <input onChange={onChangeEmail} type="email" name="email" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                <input onChange={onChangePassword} type="password" name="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                <button type="submit"  className="btn btn-primary">Submit</button>


                {/* Display Error Message  */}
                {
                    error && <p className="text-red">{error}</p>
                }
            </form>
  
        </div>
    );
};

export default StateForm;

```

## 03. Refference Form

```js
import { useEffect, useRef, useState } from "react";

const RefForm = () => {
    // Refference 
    const reffName = useRef(null)
    const reffEmail = useRef(null)
    const reffPassword = useRef(null)

    const [error, setError] = useState('')

    // Default cursor in Name Fiels 
    useEffect(()=> {
        reffName.current.focus()
    },[])


    // Handler for submit button 
    const handleSubmit = e => {
        e.preventDefault();

        // Password Validation 
        if(reffPassword.current.value.length <  6){
            setError('Password Must be 6 charecter or Longer')
        }else{
            setError('')
            
            console.log(reffName.current.value)
            console.log(reffEmail.current.value)
            console.log(reffPassword.current.value)
        }

    }

    return (
        <div>
            <div style={{marginTop:"50px"}}>

                <h2 className="mb-10 text-2xl text-blue-500">Refference Form </h2>

                <form  onSubmit={handleSubmit} className=" flex flex-col mx-auto w-80 gap-3 border p-3 rounded-xl bg-gray-600" >
                    <input ref={reffName}  type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                    <input ref={reffEmail} defaultValue={'@gmail.com'} type="email" name="email" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                    <input ref={reffPassword} type="password" name="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                    <button type="submit"  className="btn btn-primary">Submit</button>


                    {/* Display Error Message  */}

                    {
                        error && <p>{error}</p>
                    }
                    
                </form>

            </div>
        </div>
    );
};

export default RefForm;

```

## 04. Reusable Form


****APP.jsx**
```js

import './App.css'
import ReUsableForm from './components/ReUsableForm'
function App() {

  const handleSignUpSubmit = data => {
    console.log('Signup Data', data)
  }

  const handleUpdateProfile = data => {
    console.log('Update Profile', data)
  }

  return (
    <>
      
      <ReUsableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please signup Right Now</p>
        </div>
        
      </ReUsableForm>,
      <ReUsableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile} >
        <div>
          <h2>Update profile</h2>
          <p>Please Update your Profile</p>
        </div>
      </ReUsableForm>,

    </>
  )
}

export default App

```
**Form**
```js
/* eslint-disable react/prop-types */


const ReUsableForm = ({handleSubmit, formTitle, submitBtnText = 'Submit' , children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault()
        const data = {
            name: e.targer.name.value,
            email: e.targer.email.value,
            password: e.targer.password.value,

        }
        handleSubmit(data)
    }

    return (
        <div>
            <div style={{marginTop:"50px"}}>

                <h2 className="mb-10 text-2xl text-orange-500">ReUsable Form </h2>

                <h2 className="mb-10 text-xl text-pink-500 ">{formTitle} </h2>

                <form onSubmit={handleLocalSubmit} className=" flex flex-col mx-auto w-80 gap-3 border p-3 rounded-xl bg-gray-600" >
                    <input  type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                    <input  defaultValue={'@gmail.com'} type="email" name="email" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                    <input  type="password" name="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs focus:outline-none" />
                    {/* <button type="submit" value={submitBtnText} className="btn btn-primary">Submit</button> */}
                    <input type="submit" value={submitBtnText} className="btn btn-primary" />


                    {/* Display Error Message 

                    {
                        error && <p>{error}</p>
                    } */}
                    
                </form>

            </div>
        </div>
    );
};

export default ReUsableForm;
```

## 05. Form Master

GrandPa.jsx
```js
import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";

export const GiftContext = createContext('Gold Ring');


const GrandPa = () => {
    return (
        <div style={{marginTop:"50px"}}>
            <h2 className="mb-10 text-2xl text-green-500 text-center">Grand Pa</h2>

            <GiftContext.Provider value="Gold">
                <div className="flex justify-between border rounded-xl p-4 gap-4">
                    <Dad></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </div>
            </GiftContext.Provider>
            
            
        </div>
    );
};

export default GrandPa;
```
MySelf.jsx
```js
import Spacial from "./Spacial";


const MySelf = () => {
    return (
        <div className=" border rounded-xl p-4 w-full">
            <h2>My Self</h2>
            <Spacial name={'Rabi'}></Spacial>
        </div>
    );
};

export default MySelf;
```
Special.jsx
```js
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useContext } from "react";
import { GiftContext } from "../GrandPa";


const Spacial = ({name}) => {
    const gifts = useContext(GiftContext)
    return (
        <div className=" border rounded-xl p-4 w-full">
            <h2 className="mb-2">Spacial</h2>
            <hr />
            <div>
                <h3> {name}</h3>
                <p>Gift:{gifts} </p>
            </div>
        </div>
    );
};

export default Spacial;
```

## 06. Custom Hook Form

```js

```

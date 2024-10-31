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
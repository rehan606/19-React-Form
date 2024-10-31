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
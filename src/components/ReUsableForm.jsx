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
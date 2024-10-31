

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
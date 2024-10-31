/* eslint-disable react/prop-types */


const Cousin = ({name}) => {
    return (
        <div className=" border rounded-xl p-4 w-full">
            <h2 className="mb-2">Cousin</h2>
            <hr />
            <div>
                <h3>Name: {name}</h3>
            </div>
        </div>
    );
};

export default Cousin;
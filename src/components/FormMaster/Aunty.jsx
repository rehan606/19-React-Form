import Cousin from "./Child/Cousin";


const Aunty = () => {
    return (
        <div className=" border rounded-xl p-4 w-full mx-auto">
            <h2 className="text-center font-bold">Aunty</h2>
            <div className="flex justify-between gap-4">
                <Cousin name={"Rabina"}></Cousin>
                
                <Cousin name={"Rehan"}></Cousin>
            </div>
        </div>
    );
};

export default Aunty;
import Cousin from "./Child/Cousin";


const Uncle = () => {
    return (
        <div className=" border rounded-xl p-4 w-full">
            <h2 className="text-center font-bold">Uncle</h2>
            <div className="flex justify-between gap-4">
                <Cousin name={"Rehan"}></Cousin>
                <Cousin name={"Hassan"}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;
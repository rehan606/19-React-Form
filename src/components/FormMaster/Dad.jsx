import Brother from "./Child/Brother";
import MySelf from "./Child/MySelf";
import Sister from "./Child/Sister";


const Dad = () => {
    return (
        <div className=" border rounded-xl p-4 w-full " >
            <h2 className="text-center font-bold">Dad</h2>
            <div className="flex justify-between gap-4">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Dad;
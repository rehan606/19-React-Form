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
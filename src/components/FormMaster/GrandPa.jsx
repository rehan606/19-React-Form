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
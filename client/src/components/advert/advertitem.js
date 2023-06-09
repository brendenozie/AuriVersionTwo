
import { useContext, useState,memo, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

// const colors = ['#000000','#e32f70','#000000','#d86405','#347f37', '#ff5722']

function AdvertItem({value}) {


    // const height =     
    const {dispatch} = useContext(CartContext);

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_ITEM", payload: value });
    };    

  return (
            <div className={`md:w-[42rem] p-10 mt-6 rounded-md dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse`} style={{height: `${value.height}` , background:`${value.rangi}`}}>
                <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                    <div className="h-full w-full relative ">
                        <img
                            src={value.pImage[0].url}
                            alt="thumbnail"
                            layout="fill"
                            objectFit="cover"
                            className='h-full w-full rounded-md'
                        />
                    </div>
                </div>

                <div className=" h-full w-full mr-2 rounded-2xl ">
                        <h1 className="m-2 text-3xl font-bold text-white">
                            {value.pName}
                        </h1>

                        <div className="flex flex-col justify-around flex-wrap">
                            <div className="flex flex-row items-center m-2">
                                <h1 className="text-[#c3bfbf]">{value.pDesc}</h1>
                            </div>
                        </div>

                        <div className="flex flex-row">
                        <button className="md:m-2 m-auto mt-8 bg-[#b7b8c48c] shadow-md shadow-[#b4b5b92e]  pt-2 pb-2 pl-4 pr-4 rounded-md flex flex-row justify-center items-center hover:bg-[#424bb6] ease-linear duration-300">
                            <h1 className="justify-center text-white text-xl font-semibold ">
                                &gt;
                            </h1>
                        </button>
                        </div>
                    </div>
                </div>
        );
};

export default memo(AdvertItem);

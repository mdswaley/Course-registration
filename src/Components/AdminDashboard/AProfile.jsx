import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

const AProfile = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <title>{props.title}</title>
      <Dashboard />
<div class="bg-gray-300 antialiased" style={{width:"100%",height:"700px"}}>
    <div class="container my-40">
        <div>

            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div class="flex justify-center">
                        {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/> */}
                </div>
                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">ADMIN</h1>
                    <p class="text-center text-sm text-gray-400 font-medium">Head of CUTM</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div class="my-5 px-6">
                        <Link to="/ahome" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span class="font-bold">Admin</span></Link>
                    </div>
                    <div class="flex justify-between items-center my-5 px-6">
                        <Link to="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter:-@cutm</Link>
                        <Link to="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram:-@cutm_shout</Link>
                        <Link to="" class="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email:-cutm@gmail.com</Link>
                    </div>

                </div>
            </div>

        </div>
        </div>
    </div>
    </div>
  );
};

export default AProfile;

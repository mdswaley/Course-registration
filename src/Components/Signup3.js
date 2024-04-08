import imgbook from "./img/book.jpg";
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import Navbar from './Navbar'
import { service } from './user-service'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer'

export default function Signup3(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const[data,setdata]=useState({
    firstname:'',
    lastname:'',
    email:'',
    gender:'',
    password:'',
   
})
const[error,setError]=useState({
    errors:{},
    isError:false
})
useEffect(()=>{
    console.log(data)

},[data])
const handleChange=(event,property)=>{
setdata({...data,[property]:event.target.value})
}
const submitform=(event)=>{
event.preventDefault();
if(!data.firstname||!data.lastname||!data.email||!data.password||!data.password){
    toast.error("plz fill all the field")
    event.preventDefault();
    return;
}



//call the api
//event.preventDefault();
service(data).then((resp)=>{
console.log(resp);

Swal.fire(
    'Good job!',
    `${resp.firstname} Register successfully`,
    'success'
  )
  setdata({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    gender:''
  })
  

}).catch((error)=>{
console.log(error);
//handel
setError({
    errors:error,
    isError:true
})
})
}
  return (
    <div>
        <title>{props.title}</title>
      <Navbar/>
      <div class="h-full bg-gray-400 dark:bg-gray-900">
        {/* <!-- Container --> */}
        <div class="mx-auto">
          <div class="flex justify-center px-6 py-12">
            {/* <!-- Row --> */}
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* <!-- Col --> */}
              <div
                class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{ backgroundImage: `url(${imgbook})` }}
              ></div>
              {/* <!-- Col --> */}
              <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-black">
                  Create an Account!
                </h3>
                <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={submitform}>
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-black"
                        for="firstName"
                      >
                        First Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => handleChange(e, "firstname")}
                        value={data.firstname}
                      />
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-black"
                        for="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => handleChange(e, "lastname")}
                        value={data.lastname}
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-black"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                  </div>
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-black"
                        for="password"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="******************"
                          onChange={(e) => handleChange(e, "password")}
                          value={data.password}
                        />
                        <span
                          className="absolute inset-y-0 right-0 flex items-center pr-1 pb-3"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                              <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                              <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                              <line x1="2" x2="22" y1="2" y2="22" />
                            </svg>
                          )}
                        </span>
                      </div>
                      <p class="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700 dark:text-black"
                        for="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        htmlFor="email"
                        className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      >
                        Block ID
                      </label>
                      <input
                        type="text"
                        className={`block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow ${"w-full"}`}
                        id="email"
                        name="email-username"
                        placeholder="Enter your Block ID"
                        autoFocus
                      />
                    </div>

                    <div className="md:ml-2">
                      <label
                        htmlFor="role"
                        className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      >
                        Role
                      </label>
                      <div className="flex gap-x-3 w-fit pl-2 pr-2 bg-slate-100 rounded-md text-sm">
                        <button
                          type="button"
                          className={`rounded-md p-2 my-1 transition-all text-black" bg-indigo-500 text-white"}`}
                        >
                          Teacher
                        </button>
                        <button
                          type="button"
                          className={`rounded-md p-2 my-1 transition-all text-black "bg-indigo-500 text-white"}`}
                        >
                          Student
                        </button>
                      </div>
                    </div>
                  </div>

                  {/*  */}
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr class="mb-6 border-t" />
                  <div class="text-center">
                    <Link
                      class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      to="/forgot-pass"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="./index.html"
                    >
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
      <Footer/>
    </div>
  );
}

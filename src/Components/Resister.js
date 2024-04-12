import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";
import cutmimg from "./img/cutmimg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Dabout from "./StudentDashboard/Dabout";


function Resister( { updateUser },props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admID, setAdmID] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // State to manage whether the user is an admin or not
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  async function login(event) {
    event.preventDefault();
    try {
      if (email === "" || password === "" || (isAdmin && admID === "")) {
        toast("fill all the fields", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      

      const response = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
        admID: admID,
      });

      console.log(response.data);

      if (response.data.message === "email not match") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email does not exist",
        });
      } else if (response.data.message === "login successfully") {
        toast("login successfully");

        if (isAdmin) {
          navigate("/ahome");
        } else {
          navigate("/dabout", { state: { email } }); // Pass email as a prop
        
        }
      } else {
        toast("password incorrect", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <>
      <Navbar />
      <section
        class="bg-white min-h-screen flex box-border justify-center items-center"
        style={{ marginTop: "100px" }}
      >
        <title>{props.title} </title>
        <ToastContainer />
        <div class="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center">
          <div class="md:w-1/2 px-8">
            <h2 class="font-bold text-3xl text-[#002D74]">Login</h2>
            <p class="text-sm mt-4 text-[#002D74]">
              If you already a member, easily log in now.
            </p>
            <form action="" class="flex flex-col gap-4">
              <input
                class="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div class="relative">
                <input
                  class="p-2 rounded-xl border w-full"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span
                  className="absolute inset-y-5 text-gray-500 right-0 flex items-center pr-1 pb-3"
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
              {isAdmin && ( // Render admin ID field only if isAdmin is true
                <input
                  class="p-2 mt-1 rounded-xl border"
                  type="text"
                  name="adminID"
                  placeholder="Admin ID"
                  value={admID}
                  onChange={(e) => {
                    setAdmID(e.target.value);
                  }}
                />
              )}
              <div class="main p-2 flex border rounded-full overflow-hidden select-none">
                <div class="title py-3 my-auto px-2 bg-blue-500 text-white text-sm font-semibold">
                  IsAdmin
                </div>
                <label class="flex radio p-2 cursor-pointer">
                  <input
                    class="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                    onClick={() => setIsAdmin(true)}
                  />
                  <div class="title px-2">YES</div>
                </label>

                <label class="flex radio p-2 cursor-pointer">
                  <input
                    class="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                    onClick={() => setIsAdmin(false)}
                  />
                  <div class="title px-2">NO</div>
                </label>
              </div>
              <button
                class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
                onClick={login}
              >
                Login
              </button>
            </form>
            <div class="mt-1  items-center text-gray-100">
              <hr class="border-gray-300" />
              <p class="text-center text-sm">OR</p>
              <hr class="border-gray-300" />
            </div>
            {/*  */}
            {/*  */}
        
            <GoogleOAuthProvider clientId="705323377845-l6kep13nksqso5pk2gv8c1me00se2c3n.apps.googleusercontent.com"> {/* Wrap your component with GoogleOAuthProvider */}
              <GoogleLogin
              
                onSuccess={(credentialResponse) => {
                  const credentialResponseDecoded=jwtDecode(credentialResponse.credential);
                  navigate("/dhome", { state: { email } }); // Pass email as a prop
                  console.log(credentialResponseDecoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                
              />
            </GoogleOAuthProvider>
            
            <div class="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
              Forget password?
            </div>
            <div class="mt-4 text-sm flex justify-between items-center container-mr">
              <p class="mr-3 md:mr-0 ">If you don't have an account..</p>
              <Link
                class="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
                to="/RS"
              >
                Register
              </Link>
            </div>
          </div>
          <div class="md:block hidden w-1/2">
            <img
              class="rounded-2xl max-h-[1600px]"
              src={cutmimg}
              alt="login form image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Resister;

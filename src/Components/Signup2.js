import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { service } from "./user-service";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

function Signup2(props) {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
  });
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });
  const [isStudent, setIsStudent] = useState(false);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleChange = (event, property) => {
    setdata({ ...data, [property]: event.target.value });
  };
  const submitform = (event) => {
    event.preventDefault();
    if (
      !data.firstname ||
      !data.lastname ||
      !data.email ||
      !data.password ||
      !data.password
    ) {
      toast.error("plz fill all the field");
      event.preventDefault();
      return;
    }
    service(data)
      .then((resp) => {
        console.log(resp);

        Swal.fire(
          "Good job!",
          `${resp.firstname} Register successfully`,
          "success"
        );
        setdata({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          gender: "",
        });
      })
      .catch((error) => {
        console.log(error);
        //handel
        setError({
          errors: error,
          isError: true,
        });
      });
  };
  return (
    <>
      <title>{props.title}</title>
      <div
        className="flex justify-center items-center "
        style={{ backgroundColor: "#4DE2EF", height: "860px" }}
      >
        <Navbar />
        <div className="relative">
          <div
            className="relative flex flex-col 2xl:w-[30rem]  border-gray-400"
            style={{
              width: "600px",
              height: "auto",
              backgroundColor: "#0FA3B1",
              marginLeft: "700px",
              marginTop: "40px",
            }}
          >
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <a
                  href="#"
                  className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
                >
                  <span
                    className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100"
                    style={{ color: "#8C3608" }}
                  >
                    Signup.
                  </span>
                </a>
              </div>

              <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
                Welcome!
              </h4>
              <p className="mb-6 text-gray-500">
                Please sign-in to access your account
              </p>

              <form className="mb-4" onSubmit={submitform}>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <label
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      htmlFor="password"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="text"
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="full-name"
                      placeholder="Enter your full name"
                      onChange={(e) => handleChange(e, "firstname")}
                      value={data.firstname}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between">
                    <label
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      htmlFor="password"
                    >
                      Last Name
                    </label>
                  </div>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      type="text"
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="full-name"
                      placeholder="Enter your full name"
                      onChange={(e) => handleChange(e, "lastname")}
                      value={data.lastname}
                    />
                  </div>
                </div>

                <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      id="email"
                      name="email-username"
                      placeholder="Enter your email "
                      autoFocus
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="password"
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="flex-1">
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
                </div>
                {!isStudent && (
                  <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="flex-1 w-full">
                      <>
                        <label
                          htmlFor="email"
                          className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                        >
                          USN
                        </label>
                        <input
                          type="text"
                          className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                          name="email-username"
                          placeholder="Enter your USN"
                          autoFocus
                        />
                      </>
                    </div>
                    <div className="flex-1">
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
                          onClick={() => setIsStudent(false)}
                        >
                          Warden
                        </button>
                        <button
                          type="button"
                          className={`rounded-md p-2 my-1 transition-all text-black "bg-indigo-500 text-white"}`}
                          onClick={() => setIsStudent(true)}
                        >
                          Student
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="relative block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  name="password"
                  placeholder="············"
                  onChange={(e) => handleChange(e, "password")}
                  value={data.password}
                />

                <div className="mb-4">
                  <button
                    className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mb-4 text-center">
                Already have an account?
                <Link
                  to="/log"
                  className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                >
                  {" "}
                  Login{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup2;

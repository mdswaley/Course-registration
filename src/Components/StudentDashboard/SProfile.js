import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Swal from "sweetalert2";

const SProfile = (props) => {
  const [profileData, setProfileData] = useState(null);
  const loginUser = localStorage.getItem("loggedInUserEmail");
  useEffect(() => {
    // Fetch profile data for the logged-in user
    if (loginUser) {
      fetch(`http://localhost:8080/getEmailData/${loginUser}`)
        .then((response) => response.json())
        .then((data) => {
          setProfileData(data);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, [loginUser]);

  const handleAddCourse = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add Profile",
      html:
        '<input id="name" class="swal2-input" placeholder="Name">' +
        '<input id="email" class="swal2-input" placeholder="Email">' +
        '<input id="reg" class="swal2-input" placeholder="Registration No">' +
        '<input id="url" class="swal2-input" placeholder="Url">',
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          regNo: document.getElementById("reg").value,
          url: document.getElementById("url").value,
        };
      },
    });
    if (formValues) {
      fetch("http://localhost:8080/addProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })
        .then((response) => {
          if (response.ok) {
            // Optionally, display a success message or update UI

            console.log("Course added successfully");
            setProfileData(formValues);
          } else {
            // Handle error response from backend
            console.error("Failed to add course");
          }
        })
        .catch((error) => {
          // Handle network or other errors
          console.error("Error adding course:", error);
        });
    }
  };
  // Inside the handleEditProfile function
  const handleEditProfile = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Profile",
      html:
        `<input id="name" class="swal2-input" placeholder="Name" value="${profileData.name}">` +
        `<input id="email" class="swal2-input" placeholder="Email" value="${profileData.email}">` +
        `<input id="reg" class="swal2-input" placeholder="Registration No" value="${profileData.regNo}">` +
        `<input id="url" class="swal2-input" placeholder="Url" value="${profileData.url}">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          regNo: document.getElementById("reg").value,
          url: document.getElementById("url").value,
        };
      },
    });

    if (formValues) {
      fetch(`http://localhost:8080/profile/${profileData.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      })
        .then((response) => {
          if (response.ok) {
            // Optionally, display a success message or update UI
            console.log("Profile updated successfully");
            setProfileData(formValues); // Update profile data in state
          } else {
            // Handle error response from backend
            console.error("Failed to update profile");
          }
        })
        .catch((error) => {
          // Handle network or other errors
          console.error("Error updating profile:", error);
        });
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <title>{props.title}</title>
      <Sidebar />
      <div
        class="bg-gray-300 antialiased"
        style={{ width: "100%", height: "700px" }}
      >
        <div class="container my-40">
          <div>
            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
              <div class="flex items-center justify-end py-3 px-3">
                {/* <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/> */}
                <button
                  onClick={handleEditProfile}
                  style={{ backgroundColor: "black", marginRight: "10px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pencil"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </button>
                <button
                  onClick={handleAddCourse}
                  style={{ backgroundColor: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-smile-plus"
                  >
                    <path d="M22 11v1a10 10 0 1 1-9-10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                    <path d="M16 5h6" />
                    <path d="M19 2v6" />
                  </svg>
                </button>
              </div>

              <div class="mt-16">
                {profileData && (
                  <h1 class="font-bold text-center text-3xl text-gray-900">
                    {profileData.name}
                  </h1>
                )}
                <p class="text-center text-sm text-gray-400 font-medium">
                  Student of Cutm
                </p>
                <div>
                  {profileData && (
                    <div class="flex justify-between items-center my-5 px-6">
                      <p class="text-gray-500 font-medium text-sm text-center w-full py-3">{`Registration No: ${profileData.regNo}`}</p>
                      <p class="text-gray-500 font-medium text-sm text-center w-full py-3">{`Achievement Url: ${profileData.url}`}</p>
                      <p class="text-gray-500 font-medium text-sm text-center w-full py-3">{`Email: ${profileData.email}`}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SProfile;

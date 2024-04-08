import React from "react";
import { Link } from "react-router-dom";
// import { Home, Activity, Mail, User } from "lucide-react"; // Import icons from lucide-react

export default function Sidebar() {
  return (
    <div className="w-30 h-screen p-1 bg-white-300">
      {/* <!-- Component Start --> */}
      <div className="flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
        <Link className="flex items-center w-full px-3 mt-3" to="/">
          <svg
            className="w-2 h-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          <span className="ml-2 text-sm font-bold">Student</span>
        </Link>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/dhome"
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
                class="lucide lucide-layout-dashboard"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>

              <span className="ml-2 text-sm font-medium">Dasboard</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/dregistration"
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
                class="lucide lucide-file-stack"
              >
                <path d="M21 7h-3a2 2 0 0 1-2-2V2" />
                <path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" />
                <path d="M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" />
                <path d="M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" />
              </svg>

              <span className="ml-2 text-sm font-medium">Register</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/dsubject"
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
                class="lucide lucide-book-open-check"
              >
                <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />
                <path d="m16 12 2 2 4-4" />
                <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
              </svg>
              <span className="ml-2 text-sm font-medium">Subject's</span>
            </Link>
          </div>
          <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/dpassword"
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
                class="lucide lucide-file-lock"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <rect width="8" height="6" x="8" y="12" rx="1" />
                <path d="M10 12v-2a2 2 0 1 1 4 0v2" />
              </svg>
              <span className="ml-2 text-sm font-medium">Password</span>
            </Link>
            <Link
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/dabout"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Profile</span>
            </Link>
            <Link
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
              to="/msg"
            >
              <svg
                className="w-6 h-6 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">Messages</span>
              <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
            </Link>
          </div>
        </div>
        <Link
          className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
          to="/dlogout"
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
            class="lucide lucide-log-out"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>

          <span className="ml-2 text-sm font-medium">Logout</span>
        </Link>
      </div>
      {/* <!-- Component End  --> */}
    </div>
  );
}

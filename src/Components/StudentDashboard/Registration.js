import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { useGlobalContext } from './context';
import './Registration.css';
import Search from './Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = (props) => {
  const { isLoading, loggedInUser } = useGlobalContext();
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allCourse');
        setCourseData(response.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseData();
  }, []);

  const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
  const handleRegisterCourse = async (courseName, courseCredit) => {
    try {
      // Check if the course is already registered
      if (courses.some(course => course.courseName === courseName && course.courseCredit === courseCredit)) {
        toast.error('Course already registered');
        return;
      }
      // Create a course update object
      const courseUpdate = {
        courseName: courseName,
        courseCredit: courseCredit
      };
  
      // Send a list containing the course update object
      await axios.put(`http://localhost:8080/updateCourse/${loggedInUserEmail}`, [courseUpdate]);
      setCourses([...courses, courseUpdate]);
      toast.success('Course registered successfully');
    } catch (error) {
      console.error('Error registering course:', error);
      toast.error('Failed to register course');
    }
  };

  const [courses, setCourses] = useState([]);
  const loggedUser = localStorage.getItem('loggedInUserEmail');
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Step 1: Fetch student data based on the logged-in user's email
                const studentResponse = await axios.get(`http://localhost:8080/${loggedUser}`);
                const student = studentResponse.data;

                // Step 2: Fetch courses associated with the student ID
                const courseResponse = await axios.get(`http://localhost:8080/courses/${student.id}`);
                const courses = courseResponse.data;

                // This should return true or false based on permission check

                // Step 3: Update the state with the fetched courses
                // const permissionResponse = await axios.get(`http://localhost:8080/permissions/${loggedInUserEmail}`);
                // const hasPermission = permissionResponse.data; // Assuming response is true/false
          
                // Update state with fetched courses and permission status
                setCourses(courses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [loggedInUserEmail]);

    const handleDeleteCourse = async (id) => {
      try {
        // Send DELETE request to delete course by ID
        await axios.delete(`http://localhost:8080/deleteCourse/${id}`);
        // Update the state to remove the deleted course
        setCourses(courses.filter(course => course.id !== id));
        // Optionally, you can show a success message here
        toast.success('Delete course of Id : ',id);
      } catch (error) {
        console.error('Error deleting course:', error);
        // Optionally, you can show an error message here
      }
    };
  

  
  
  

  return (
    <div style={{ display: 'flex' }}>
      <title>{props.title}</title>
      <Sidebar />
  
      <div style={{ fontSize: '20px' }}>
    <h3 className='text-center py-2'>Different course's are there</h3>
    <div style={{display:"flex"}}>
        <div style={{ display: 'flex', flexWrap: 'wrap',width:"850px"}}>

          {isLoading ? (
            <h1>Loading....</h1>
          ) : (
            courseData.map(course => (
              <div key={course.id} style={{ border: '1px solid black', padding: '10px', margin: '10px', minWidth: '400px' }}>
                <h3>Course ID: {course.id}</h3>
                <p>Name: {course.courseName}</p>
                <p>Credit: {course.courseCredit}</p>
                <p>Assign Teacher: {course.assignTeacher}</p>
                <button type="button" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 my-2 border-b-4 border-blue-700 hover:border-blue-500 rounded"  onClick={() => handleRegisterCourse(course.courseName, course.courseCredit)}>
                  Register
                </button>
              </div>
            ))
          )}
        </div>
        {/*  */}
        <div class="relative overflow-x-auto" style={{marginTop:"50px",marginLeft:"30px"}}>
    <h1 style={{paddingBottom:"20px"}}>Registered Courses</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-4">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {/* <th scope="col" class="px-6 py-3">
                    ID
                </th> */}
                <th scope="col" class="px-6 py-3">
                    Course Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Course Credit
                </th>
                <th scope="col" class="px-6 py-3">
                    Remove
                </th>
            
            </tr>
        </thead>
        <tbody>
        {isLoading ? (
  <tr className="text-black">
      <td>Loading....</td>
      <td>Loading....</td>
  </tr>
) : (
  courses !== null && courses.map(course => (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-black" key={course.id}>
    {/* <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
        {course.id}
    </th> */}
    <td class="px-6 py-4 text-black" >
        {course.courseName}
    </td>
    
    <td class="px-6 py-4 text-black" >
        {course.courseCredit}
    </td>
    <td class="px-6 py-4 text-black" >
      <button onClick={()=>handleDeleteCourse(course.id)}>delete</button>
    </td>
</tr>
      
  ))
  
)}
            
            
        </tbody>
    </table>
</div>
      {/*  */}
        </div>
        <ToastContainer />
      </div>
        
    </div>
  );
};

export default Registration;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import { useGlobalContext } from './context';

export default function SelectedCourses(props) {
    const [courses, setCourses] = useState([]);
    const { isLoading } = useGlobalContext();
    const loginUser = localStorage.getItem("loggedInUserEmail");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Step 1: Fetch student data based on the logged-in user's email
                const studentResponse = await axios.get(`http://localhost:8080/${loginUser}`);
                const student = studentResponse.data;

                // Step 2: Fetch courses associated with the student ID
                const courseResponse = await axios.get(`http://localhost:8080/courses/${student.id}`);
                const courses = courseResponse.data;

                // Step 3: Update the state with the fetched courses
                setCourses(courses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [loginUser]);

    return (
        <div style={{ display: "flex" }}>
    <title>{props.title}</title>
    <Sidebar />
    
    

<div class="relative overflow-x-auto" style={{marginTop:"100px",marginLeft:"200px"}}>
    <h1>Registered Courses</h1>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Course Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Course Credit
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
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={course.id}>
    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
        {course.courseName}
    </th>
    <td class="px-6 py-4 text-black" >
        {course.courseCredit}
    </td>
    
</tr>
      
  ))
  
)}
            
            
        </tbody>
    </table>
</div>

</div>

        
    );
}

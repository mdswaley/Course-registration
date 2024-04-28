import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function CourseUpdate(props) {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define a function to fetch course data
    const fetchCourseData = async () => {
      try {
        // Make a GET request to your backend API endpoint
        const response = await axios.get('http://localhost:8080/allCourse');
        // Set the fetched course data to the state
        setCourseData(response.data);
        setTimeout(() => setLoading(false), 2000);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    // Call the fetchCourseData function when the component mounts
    fetchCourseData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const handleAddCourse = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Add Course',
      html:
        '<input id="courseName" class="swal2-input" placeholder="Course Name">' +
        '<input id="courseCredit" class="swal2-input" placeholder="Course Credit">' +
        '<input id="assignTeacher" class="swal2-input" placeholder="Assign Teacher">',
      focusConfirm: false,
      preConfirm: () => {
        return {
          courseName: document.getElementById('courseName').value,
          courseCredit: document.getElementById('courseCredit').value,
          assignTeacher: document.getElementById('assignTeacher').value
        };
      }
    });

    if (formValues) {
      // Send POST request to add course
      try {
        await axios.post('http://localhost:8080/addCourse', formValues);
        // Fetch updated course data
        const response = await axios.get('http://localhost:8080/allCourse');
        setCourseData(response.data);
        Swal.fire('Success', 'Course added successfully', 'success');
      } catch (error) {
        console.error('Error adding course:', error);
        Swal.fire('Error', 'Failed to add course', 'error');
      }
    }
  };

  const handleUpdateCourse = async (courseId) => {
    const courseToUpdate = courseData.find(course => course.id === courseId);

    const { value: updatedValues } = await Swal.fire({
      title: 'Update Course',
      html:
        `<input id="updatedCourseName" class="swal2-input" value="${courseToUpdate.courseName}" placeholder="Course Name">` +
        `<input id="updatedCourseCredit" class="swal2-input" value="${courseToUpdate.courseCredit}" placeholder="Course Credit">` +
        `<input id="updatedAssignTeacher" class="swal2-input" value="${courseToUpdate.assignTeacher}" placeholder="Assign Teacher">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          courseName: document.getElementById('updatedCourseName').value,
          courseCredit: document.getElementById('updatedCourseCredit').value,
          assignTeacher: document.getElementById('updatedAssignTeacher').value
        };
      }
    });

    if (updatedValues) {
      try {
        // Send PUT request to update course
        await axios.put(`http://localhost:8080/courses/${courseId}`, updatedValues);
        // Fetch updated course data
        const response = await axios.get('http://localhost:8080/allCourse');
        setCourseData(response.data);
        Swal.fire('Success', 'Course updated successfully', 'success');
      } catch (error) {
        console.error('Error updating course:', error);
        Swal.fire('Error', 'Failed to update course', 'error');
      }
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      // Send DELETE request to delete course
      await axios.delete(`http://localhost:8080/deleteCourse/${courseId}`);
      // Fetch updated course data
      const response = await axios.get('http://localhost:8080/allCourse');
      setCourseData(response.data);
      Swal.fire('Success', 'Course deleted successfully', 'success');
    } catch (error) {
      console.error('Error deleting course:', error);
      Swal.fire('Error', 'Failed to delete course', 'error');
    }
  };


  if (loading) {
    // Show loader using SweetAlert for 2 seconds
    setTimeout(() => {
      Swal.close(); // Close the loader after 2 seconds
    }, 2000);

    Swal.fire({
      title: 'Loading...',
      html: '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>',
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false
    });
  }

  return (
    <div style={{ display: "flex"}}>
      <title>{props.title}</title>
      <Dashboard />
    
      <div style={{width:"1300px"}}>
      
        <h1 align="center" style={{ color: 'green',paddingTop:"20px" }}>Course Data</h1>
        <button type="button" className="btn btn-success" onClick={handleAddCourse}>
          Add Course
        </button>
        <div style={{ display: 'flex', flexWrap: 'wrap',paddingTop:"30px" }}>
          {/* Map over the courseData array and render each course as a box */}
          {courseData.map(course => (
            <div key={course.id} style={{ border: '1px solid black', padding: '10px', margin: '10px', minWidth: '200px' }}>
              <h3>Course ID: {course.id}</h3>
              <p>Name: {course.courseName}</p>
              <p>Credit: {course.courseCredit}</p>
              <p>Assign Teacher: {course.assignTeacher}</p>
              <button type="button" className="btn btn-info m-1" onClick={() => handleUpdateCourse(course.id)}>
                Update
              </button>
              <button type="button" className="btn btn-danger m-2" onClick={()=>handleDeleteCourse(course.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        
      
      </div>
    </div>
  );
}

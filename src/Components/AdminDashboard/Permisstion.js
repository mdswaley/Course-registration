import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import Student from "./Student";

export default function Permission(props) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getAllData"); // Replace with your API endpoint
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  const handleStudentSelect = (studentId) => {
    const isSelected = selectedStudents.includes(studentId);
    setSelectedStudents(
      isSelected
        ? selectedStudents.filter((id) => id !== studentId)
        : [...selectedStudents, studentId]
    );
  };

  const registerCourses = async () => {
    if (selectedStudents.length === 0) {
      alert('Please select students to register courses');
      return;
    }
  
    const selectedEmails = students.filter(student => selectedStudents.includes(student.id)).map(student => student.email); // Extract emails
  
    try {
      const response = await axios.post('http://localhost:8080/permissions', selectedEmails);
      console.log('Courses registered successfully:', response.data);
      // Handle successful registration (optional)
    } catch (error) {
      console.error('Error registering courses:', error);
      // Handle registration error (optional)
    }
  };

  

  return (
    <div style={{ display: "flex" }}>
      <title>{props.title}</title>
      <Dashboard />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          border="1"
          className="table table-hover"
          style={{ fontWeight: "600" }}
        >
          <thead>
            <tr style={{ color: "black" }}>
              <th>id</th>
              {/* <th>Name</th> */}
              <th>Email</th>
              <th>Permission</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} style={{ border: "2px solid black" }}>
                <td>{student.id}</td>
                {/* <td>
                  {student.firstname} {student.lastname}
                </td> */}
                <td>{student.email}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => handleStudentSelect(student.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    <button onClick={() => registerCourses()}>Register Courses</button>
    </div>
  );
}

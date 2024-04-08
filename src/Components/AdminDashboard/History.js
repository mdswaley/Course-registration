// History.js
import React from 'react';

export default function History({ lastDeleted }) {
  return (
    <div>
      <h2>Deleted Student History</h2>
      <ul>
        {lastDeleted && lastDeleted.map((student, index) => (
          <li key={index}>
            <strong>ID:</strong> {student.id}, <strong>Name:</strong> {student.firstname} {student.lastname}
          </li>
        ))}
        {!lastDeleted && <li>No students deleted yet.</li>}
      </ul>
    </div>
  );
}

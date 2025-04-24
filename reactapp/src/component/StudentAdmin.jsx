import React, { useState } from "react";
import styles from './StudentAdmin.module.css';

function StudentAdmin() {
  const [studentData, setStudentData] = useState([]);

  async function showData(e) {
    e.preventDefault();
    const sid = e.target.sid.value;

    if (sid == "*") {
      // const response = await fetch("http://localhost:3008/admin/show");
      const response = await fetch("https://studentappcseb-m2xs.onrender.com/admin/show");
      const res = await response.json();
      console.log(res.msg);
      setStudentData(res.msg);
    } else {
      const response = await fetch(
      //  ` http://localhost:3008/admin/showByEmailid/${sid}`
        `https://studentappcseb-m2xs.onrender.com/admin/showByEmailid/${sid}`,
      );
      const res = await response.json();
      console.log(res.msg);
      setStudentData(Array.isArray(res.msg) ? res.msg : [res.msg]);
    }
  }

  async function deleteStudent(email) {
    console.log(email);
    
    const response = await fetch(
      // `http://localhost:3008/admin/deleteByEmailid/${email}`,
      `https://studentappcseb-m2xs.onrender.com/admin/deleteByEmailid/${email}`,
      { method: "DELETE" }
    );
    const res = await response.json();
    alert(res.msg); 
    
  }

  function updateStudent(email) {
    alert(email);
  }

  return (
    <div>
      <div className={styles.studentAdminHeader}>
        Student Admin
      </div>
      <form onSubmit={showData}>
        <div>
          <input type="text" name="sid" placeholder="Enter Student ID" />
        </div>
        <div className={styles.studentAdminFormInput}>
          <button>Search</button>
        </div>
      </form>
      <div>
        {studentData && studentData.length > 0 ? (
          <table className={styles.studentAdminTable}>
            <thead>
              <tr>
                <th className={styles.studentAdminTable}>Name</th>
                <th className={styles.studentAdminTable}>Email</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student, index) => (
                <tr key={index}>
                  <td className={styles.studentAdminTable}>{student.name}</td>
                  <td className={styles.studentAdminTable}>{student.email}</td>
                  <td className={styles.studentAdminTable}>
                    <button onClick={() => deleteStudent(student.email)}>
                      Delete
                    </button>
                  </td>
                  <td className={styles.studentAdminTable}>
                    <button onClick={() => updateStudent(student.email)}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>No Student Available</h2>
        )}
      </div>
    </div>
  );
}

export default StudentAdmin;

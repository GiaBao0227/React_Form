import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const StudentPage = () => {
  const [editingStudent, setEditingStudent] = useState(null);

  return (
    <div>
      <StudentForm editingStudent={editingStudent} setEditingStudent={setEditingStudent} />
      <StudentList setEditingStudent={setEditingStudent} />
    </div>
  );
};

export default StudentPage;

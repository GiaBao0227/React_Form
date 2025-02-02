import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import StudentForm from "../components/StudentForm";  // Cập nhật đúng đường dẫn
import StudentList from "../components/StudentList";  // Cập nhật đúng đường dẫn

export default function HomeTemplate() {
  const [editingStudent, setEditingStudent] = useState(null);

  return (
    <div>
      <StudentForm editingStudent={editingStudent} setEditingStudent={setEditingStudent} />
      <StudentList setEditingStudent={setEditingStudent} />
      <Outlet />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudent, editStudent } from "./slice";

const StudentForm = ({ editingStudent, setEditingStudent }) => {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (editingStudent) setStudent(editingStudent);
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      dispatch(editStudent(student));
      setEditingStudent(null);
    } else {
      dispatch(addStudent({ ...student, id: Date.now().toString() }));
    }
    setStudent({ id: "", name: "", phone: "", email: "" });
  };

  return (
    <div className="container mx-auto text-center">
      <h2 className="font-bold">Thêm Sinh Viên</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Họ và Tên"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Số Điện Thoại"
          value={student.phone}
          onChange={(e) => setStudent({ ...student, phone: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={student.email}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
          required
        />
        <button
        type="submit"
        className={`focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
          ${editingStudent 
            ? "bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600" 
            : "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          }`}
      >
        {editingStudent ? "Cập nhật" : "Thêm Sinh Viên"}
      </button>
      
      </form>
    </div>
  );
};

export default StudentForm;

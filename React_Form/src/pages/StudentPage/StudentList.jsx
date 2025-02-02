import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "./slice";

const StudentList = ({ setEditingStudent }) => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto place-items-center min-h-screen">
      <h2 className="font-bold">Danh Sách Sinh Viên</h2>
      <table className="student-table border-collapse border border-gray-300 w-[1300px] text-center">
        <thead>
          <tr className="grid grid-cols-6 gap-x-8 bg-gray-200 text-center p-3 font-bold">
            <th>#</th>
            <th>Mã Sinh Viên</th>
            <th>Họ và Tên</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody className="px-6 py-2 ">
          {students.map((student, index) => (
            <tr
              key={student.id}
              className="grid grid-cols-6 gap-x-8 border-b px-6 py-2"
            >
              <td>{index + 1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td className="whitespace-nowrap">{student.email}</td>
              <td className="action-buttons flex gap-3 justify-center">
                <button
                  className="edit focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => setEditingStudent(student)}
                >
                   Sửa
                </button>
                <button
                  className="delete focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  onClick={() => dispatch(deleteStudent(student.id))}
                >
                   Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

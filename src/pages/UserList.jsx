
// employwise/src/pages/UserList.jsx
import React, { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(page).then((res) => setUsers(res.data.data));
  }, [page]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(user.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary me-2" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default UserList;

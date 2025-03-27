
// employwise/src/pages/EditUser.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById, updateUser } from "../services/api";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserById(id)
      .then((res) => {
        setUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch user details");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      alert("User updated successfully!");
      navigate("/users");
    } catch (error) {
      alert("Failed to update user");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-5">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First Name:</label>
          <input type="text" className="form-control" name="first_name" value={user.first_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Last Name:</label>
          <input type="text" className="form-control" name="last_name" value={user.last_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Save Changes</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/users")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;

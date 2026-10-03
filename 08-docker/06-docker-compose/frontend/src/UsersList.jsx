import { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "http://backend:3000/api/v1/auth/users",
        );
        setUsers(res.data.users);
      } catch (error) {
        console.error(error);
        alert("Failed to fetch users!");
      }
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>All Users</h2>
      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.createdAt).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;

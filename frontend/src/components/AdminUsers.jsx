import React, { useState, useEffect } from "react";
import "./Admin.css";

function AdminUsers() {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ email: "", password: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAdmin, setEditAdmin] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((response) => response.json())
      .then((data) => setAdmins(data))
      .catch((error) => {
        console.error("Error fetching admins:", error);
        alert("Failed to fetch admins. Please try again later.");
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      fetch(`http://localhost:5000/admin/${id}`, { method: "DELETE" })
        .then(() => setAdmins(admins.filter((admin) => admin.id !== id)))
        .catch((error) => {
          console.error("Error deleting admin:", error);
          alert("Failed to delete admin. Please try again later.");
        });
    }
  };

  const handleAddAdmin = () => {
    const { email, password } = newAdmin;

    if (email && password) {
      fetch("http://localhost:5000/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((addedAdmin) => {
          setAdmins([...admins, addedAdmin]);
          setNewAdmin({ email: "", password: "" });
          setIsModalOpen(false);
          alert("Admin successfully added!");
        })
        .catch((error) => {
          console.error("Error adding admin:", error);
          alert("Failed to add admin. Please try again later.");
        });
    } else {
      alert("Please fill out required fields (email and password).");
    }
  };

  const handleEditAdmin = () => {
    const { email, password } = editAdmin;

    if (email && password.trim()) {
      // Ensuring password is not only spaces
      const updatedAdmin = {
        ...editAdmin,
        password: editAdmin.password, // API already handles hashing
      };

      fetch(`http://localhost:5000/admin/${editAdmin.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedAdmin),
      })
        .then((response) => response.json())
        .then((updatedAdmin) => {
          setAdmins(
            admins.map((admin) =>
              admin.id === updatedAdmin.id ? updatedAdmin : admin
            )
          );
          setEditAdmin(null);
          setIsModalOpen(false);
          alert("Admin successfully edited!");
        })
        .catch((error) => {
          console.error("Error updating admin:", error);
          alert("Failed to update admin. Please try again later.");
        });
    } else {
      alert("Email and password cannot be empty or just spaces.");
    }
  };

  // const handleEditAdmin = () => {
  //   const { email, password } = editAdmin;

  //   if (email && password) {
  //     const updatedAdmin = {
  //       ...editAdmin,
  //       password: editAdmin.password, // API already handles hashing
  //     };

  //     fetch(`http://localhost:5000/admin/${editAdmin.id}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(updatedAdmin),
  //     })
  //       .then((response) => response.json())
  //       .then((updatedAdmin) => {
  //         setAdmins(
  //           admins.map((admin) =>
  //             admin.id === updatedAdmin.id ? updatedAdmin : admin
  //           )
  //         );
  //         setEditAdmin(null);
  //         setIsModalOpen(false);
  //         alert("Admin successfully edited!");
  //       })
  //       .catch((error) => {
  //         console.error("Error updating admin:", error);
  //         alert("Failed to update admin. Please try again later.");
  //       });
  //   } else {
  //     alert("Email and password cannot be empty.");
  //   }
  // };

  const openEditModal = (admin) => {
    setEditAdmin(admin);
    setIsModalOpen(true);

    setTimeout(() => {
      const editForm = document.getElementById("form-bg");
      if (editForm) {
        editForm.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditAdmin(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editAdmin) {
      setEditAdmin({ ...editAdmin, [name]: value });
    } else {
      setNewAdmin({ ...newAdmin, [name]: value });
    }
  };

  return (
    <div className="content">
      <h1>Admins</h1>
      <button
        className="btn btn-primary"
        style={{
          marginBottom: "10px",
          backgroundColor: "rgb(248, 116, 31)",
          border: "none",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        Add Admin
      </button>

      {isModalOpen && (
        <div
          id="form-bg"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <h2>{editAdmin ? "Edit Admin" : "Add Admin"}</h2>
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-2"
              name="email"
              value={editAdmin ? editAdmin.email : newAdmin.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-2"
              name="password"
              value={editAdmin ? editAdmin.password : newAdmin.password}
              onChange={handleChange}
              required
            />
            <div className="form-buttons">
              {editAdmin ? (
                <>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    style={{ backgroundColor: "green", border: "none" }}
                    onClick={handleEditAdmin}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    style={{ backgroundColor: "gray", border: "none" }}
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm me-2"
                    style={{ backgroundColor: "green", border: "none" }}
                    onClick={handleAddAdmin}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    style={{ backgroundColor: "gray", border: "none" }}
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.email}</td>
              <td>{admin.password}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => openEditModal(admin)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(admin.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;

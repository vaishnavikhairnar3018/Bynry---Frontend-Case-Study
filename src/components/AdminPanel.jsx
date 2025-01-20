import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { ref, push, set, onValue, remove, update } from "firebase/database";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    name: "",
    post: "",
    img: "",
    location: "",
    longDescription: "",
  });
  const [editProfileId, setEditProfileId] = useState(null);

  // Fetch profiles from Firebase Realtime Database
  useEffect(() => {
    const profileRef = ref(db, "profiles");
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      const profilesArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setProfiles(profilesArray);
    });
  }, []);

  // Add a new profile to the database
  const handleAddProfile = () => {
    const profileRef = ref(db, "profiles");
    const newProfileRef = push(profileRef);
    set(newProfileRef, newProfile);
    setNewProfile({
      name: "",
      post: "",
      img: "",
      location: "",
      longDescription: "",
    });
  };

  // Delete a profile from the database
  const handleDeleteProfile = (id) => {
    const profileRef = ref(db, `profiles/${id}`);
    remove(profileRef);
  };

  // Update an existing profile in the database
  const handleUpdateProfile = () => {
    const profileRef = ref(db, `profiles/${editProfileId}`);
    update(profileRef, newProfile);
    setEditProfileId(null);
    setNewProfile({
      name: "",
      post: "",
      img: "",
      location: "",
      longDescription: "",
    });
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  return (
    <div className="admin-panel min-h-screen bg-gray-100 p-6 mt-20" >
      <h1 className="text-4xl font-extrabold text-center mb-8 text-[#3F72AF]">
      Admin Control Panel
      </h1>

      {/* Form Section */}
      <div className="form bg-white p-8 rounded shadow mb-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          {editProfileId ? "Edit Profile" : "Add New Profile"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="post"
            value={newProfile.post}
            onChange={handleChange}
            placeholder="Post"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="img"
            value={newProfile.img}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="location"
            value={newProfile.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <textarea
          name="longDescription"
          value={newProfile.longDescription}
          onChange={handleChange}
          placeholder="Long Description"
          className="w-full p-3 border rounded mt-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button
          onClick={editProfileId ? handleUpdateProfile : handleAddProfile}
          className="mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-800 transition duration-300"
        >
          {editProfileId ? "Update Profile" : "Add Profile"}
        </button>
      </div>

      {/* Profile List Section */}
      <div className="profile-list max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Profile List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="profile-card bg-white p-6 rounded shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={profile.img}
                alt={profile.name}
                className="h-24 w-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">
                {profile.name}
              </h3>
              <p className="text-center text-gray-600 mb-2">{profile.post}</p>
              <p className="text-center text-gray-500 mb-2">{profile.location}</p>
              <p className="text-gray-500 mb-4">{profile.longDescription}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setNewProfile(profile);
                    setEditProfileId(profile.id);
                  }}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProfile(profile.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

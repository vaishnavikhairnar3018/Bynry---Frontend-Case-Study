import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../src/lists/list.json";
import Map from "./Map"; // Import Map

function Profiles() {
  const [showMap, setShowMap] = useState(false); // Modal state
  const [currentProfile, setCurrentProfile] = useState(null); // Store profile info for the map
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleLocation = (profile) => {
    setCurrentProfile(profile); // Set the current profile for the modal
    setShowMap(true); // Open the modal
  };

  return (
    <div className="p-8 max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h2 className="text-3xl font-bold text-center text-[#3F72AF] mb-8">
        Explore Our Talented Developers and Their Amazing Work
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {data.map((Profile) => (
          <div
            key={Profile.id}
            className="profile-card py-8 px-8 max-w-full mx-auto bg-white rounded-xl shadow-lg space-y-4 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              className="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
              src={Profile.img}
              alt={`${Profile.name}'s Profile`}
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  {Profile.name}
                </p>
                <p className="text-slate-500 font-medium">{Profile.post}</p>
                <p className="text-slate-600 text-sm">
                  {Profile.shortDiscription}
                </p>
              </div>
              <div className="flex justify-center sm:justify-start space-x-4">
                <button
                  onClick={() => handleDetails(Profile.id)}
                  className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                >
                  Details
                </button>
                <button
                  onClick={() => handleLocation(Profile)}
                  className="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  View Location
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render Map if showMap is true */}
      {showMap && (
        <Map
          profile={currentProfile} // Pass the selected profile to the modal
          onClose={() => setShowMap(false)} // Close the modal
        />
      )}
    </div>
  );
}

export default Profiles;

import React from "react";
import { useParams, useLocation } from "react-router-dom";
import data from "../../src/lists/list.json";

function ProfileDetails() {
  const { id } = useParams();
  const location = useLocation(); // This is used to get any passed state (though we won't need it here)
  
  // Find the profile data from the list
  const profile = data.find((profile) => profile.id === parseInt(id));

  if (!profile) {
    return <p>Profile not found</p>;
  }

  // Destructure the location from the profile object
  const { latitude, longitude } = profile.location || {}; 

  if (!latitude || !longitude) {
    return <p>Location not found</p>;
  }

  console.log("Profile Data:", profile); // Debugging - Ensure correct profile data
  console.log("Location Data:", { latitude, longitude }); // Debugging - Ensure correct location data

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="p-8 max-w-screen-lg mx-auto mt-28">
        <h2 className="text-3xl font-bold text-center text-[#3F72AF] mb-8">
          {profile.name}'s Profile
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
          <img
            className="block mx-auto h-24 w-24 rounded-full"
            src={profile.img}
            alt={`${profile.name}'s Profile`}
          />
          <p className="text-lg font-semibold text-black">{profile.post}</p>
          <p className="text-slate-600">{profile.longDiscription}</p>

          {/* Map Section */}
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
              className="w-full h-full"
              title={`${profile.name}'s Location`}
              loading="lazy"
            ></iframe>
          </div>

          <button
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;


import React from "react";

function Map({ profile, onClose }) {
  const { latitude, longitude } = profile.location; // Get latitude and longitude
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-[#3F72AF]">
          {profile?.name}'s Location
        </h2>
        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <iframe
            src={`https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
            className="w-full h-full rounded"
            title={`${profile.name}'s Location`}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;

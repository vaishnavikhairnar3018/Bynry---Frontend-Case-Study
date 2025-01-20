# GeoDevProfiles

GeoDevProfiles is a web application that allows you to manage geospatial developer profiles through an admin panel. The application is built with React, Firebase, and integrates various features like adding, editing, and deleting profiles. Additionally, it has a map feature for displaying the locations of profiles.

---

## Project Overview

GeoDevProfiles is designed to manage developer profiles globally. It allows admins to add, update, or delete developer profiles, and view a list of all profiles with details like name, post, location, and description. A map feature displays the location of each developer. The app is built using React for the front-end and Firebase for real-time data storage.

---

## Features

- **Add New Profiles**: Admins can add new profiles with details like name, post, image, location, and description.
- **Edit Profiles**: Admins can update existing profiles with new information.
- **Delete Profiles**: Admins can delete profiles they no longer want in the database.
- **Responsive Design**: The application is fully responsive and works across different screen sizes.
- **Real-Time Data**: Profile data is stored in Firebase Realtime Database, and changes are reflected instantly.
- **Map Feature**: Each profile has an associated location, and the map displays these locations using a modal when an admin clicks on "View Location."

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Firebase Realtime Database
- **Map Integration**: Google Maps
- **Other Libraries**: React Router, Firebase SDK

---

## Setup & Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/GeoDevProfiles.git
    ```

2. **Navigate to the project folder**:

    ```bash
    cd GeoDevProfiles
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Set up Firebase**:
    - Create a Firebase project.
    - Obtain your Firebase configuration and add it to the `firebaseConfig.js` file.

5. **Run the app**:

    ```bash
    npm start
    ```

---

## Usage

- **Admin Login**: The admin panel can be accessed directly (this can be expanded to include login functionality in the future).
- **Add New Profile**: Use the form to enter profile details and click the "Add Profile" button.
- **Edit Profile**: Click the "Edit" button on a profile card to modify the profile details.
- **Delete Profile**: Click the "Delete" button on a profile card to remove it from the database.
- **View Location on Map**: Click the "View Location" button on a profile card to see the profile's location on the map. The map will open in a modal showing the exact location.

---

## Screenshots

### 1. **Home Page**
![Admin Panel Home](./images/home.jpg)

### 2. **Profiles**
![Add/Edit Profile Form](./images/add-edit-profile.png)

### 3. **Admin Panel**
![Profile List](./images/profile-list.png)

### 4. **Profile**
![Map View](./images/profile-location-map.png)

### 5. **Location**
![Map View](./images/profile-location-map.png)

---

## Contributing

Feel free to fork the repository and submit pull requests. If you find any issues or have suggestions for improvements, open an issue in the GitHub repository.

---

## License

This project is licensed under the MIT License.

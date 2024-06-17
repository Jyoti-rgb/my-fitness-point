import React, { useState } from 'react';

const GymMemberProfile = ({ setIsLoggedIn }) => {
    // State to manage user profile details
    const [userProfile, setUserProfile] = useState({
        name: 'John Doe',
        age: 30,
        gender: 'Male',
        membershipType: 'Premium',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: '123 Gym Street, City, Country',
        membershipStartDate: 'January 1, 2023', // Placeholder for dynamic data
        membershipExpiryDate: 'December 31, 2023', // Placeholder for dynamic data
    });

    // State for profile image
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');


    // Function to handle logout
    const handleLogout = () => {
        setIsLoggedIn(false); // Set isLoggedIn to false on logout
        // You can optionally clear any user session data or perform other cleanup here
    };

    // Inline CSS styles
    const containerStyle = {
        minHeight: '89vh',
        overflow: 'hidden', // Prevents vertical scrollbar
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        padding: '20px',
    };

    const profileContainerStyle = {
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto', // Enables scrolling within the profile container if needed
        maxHeight: 'calc(100vh - 40px)', // Adjust height to fit within viewport, considering padding
    };

    const formGroupStyle = {
        marginBottom: '15px',
    };

    const buttonStyle = {
        marginTop: '15px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    // Function to handle form submission (in case of profile update)
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        alert('Profile updated!'); // Placeholder function for updating profile information
        // Implement actual update logic if needed
    };

    // Function to handle image file selection
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setProfileImage(selectedFile);
            const imageUrl = URL.createObjectURL(selectedFile);
            setImagePreview(imageUrl);
        }
    };

        // Function to remove profile image
        const handleRemoveImage = () => {
            setProfileImage(null);
            setImagePreview('');
        };


    return (
        <div style={containerStyle}>
            <div className="container" style={profileContainerStyle}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Gym Member Profile</h2>
                <div style={{ textAlign: 'right' }}>
                    <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h4>Personal Information</h4>
                        <form onSubmit={handleUpdateProfile}>
                            <div style={formGroupStyle}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={userProfile.name}
                                    onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    value={userProfile.age}
                                    onChange={(e) => setUserProfile({ ...userProfile, age: parseInt(e.target.value) })}
                                    required
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label htmlFor="gender">Gender</label>
                                <select
                                    className="form-select"
                                    id="gender"
                                    value={userProfile.gender}
                                    onChange={(e) => setUserProfile({ ...userProfile, gender: e.target.value })}
                                    required
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div style={formGroupStyle}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={userProfile.email}
                                    onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    value={userProfile.phone}
                                    onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label htmlFor="address">Address</label>
                                <textarea
                                    className="form-control"
                                    id="address"
                                    rows="3"
                                    value={userProfile.address}
                                    onChange={(e) => setUserProfile({ ...userProfile, address: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={buttonStyle}>Update Profile</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h4>Gym Membership Details</h4>
                        <div style={formGroupStyle}>
                            <label htmlFor="membershipType">Membership Type</label>
                            <input
                                type="text"
                                className="form-control"
                                id="membershipType"
                                value={userProfile.membershipType}
                                readOnly
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label htmlFor="membershipStartDate">Membership Start Date</label>
                            <input
                                type="text"
                                className="form-control"
                                id="membershipStartDate"
                                value={userProfile.membershipStartDate}
                                readOnly
                            />
                        </div>
                        <div style={formGroupStyle}>
                            <label htmlFor="membershipExpiryDate">Membership Expiry Date</label>
                            <input
                                type="text"
                                className="form-control"
                                id="membershipExpiryDate"
                                value={userProfile.membershipExpiryDate}
                                readOnly
                            />
                        </div>
                       {/* Profile Image Upload */}
                       <div style={formGroupStyle}>
                                <label htmlFor="profileImage">Profile Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="profileImage"
                                    onChange={handleImageChange}
                                />
                                {imagePreview && (
                                    <div>
                                        <img src={imagePreview} alt="Profile Preview" style={{ marginTop: '10px', maxWidth: '100px' }} />
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger"
                                            style={{ marginLeft: '10px' }}
                                            onClick={handleRemoveImage}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                )}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GymMemberProfile;

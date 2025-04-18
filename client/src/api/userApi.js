// src/api/userApi.js

const API_BASE_URL = "http://your-api-url.com/api/users"; // Replace with your actual API URL

// Fetch all users
export const fetchUsers = async () => {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        return data; // Return the user data
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Add a new user
export const addUser = async (user) => {
    try {
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Failed to add user");
        }
        const newUser = await response.json();
        return newUser; // Return the newly created user
    } catch (error) {
        console.error("Error adding user:", error);
        throw error; // Rethrow the error for handling in the component
    }
};

// Remove a user by ID
export const removeUser = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${userId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to remove user");
        }
        return { message: "User removed successfully" }; // Return a success message
    } catch (error) {
        console.error("Error removing user:", error);
        throw error; // Rethrow the error for handling in the component
    }
};

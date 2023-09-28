import React, { createContext, useState } from 'react';

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
    // State to store the list of users
    const [users, setUsers] = useState([]);

    // Function to add a user
    const addUser = (user) => { 
        setUsers([...users, user]);
    };

    // Function to get all users
    const getUsers = () => { 
        return users;
    };

    // Function to update a user by ID
    const updateUser = (updatedUser) => { 

        // Create a copy of the users array with the updated user
        const updatedUsers = users.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
        );

        setUsers(updatedUsers);
    };

    // Function to delete a user by ID
    const deleteUser = (id) => { 
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };

    return (
        <CrudContext.Provider value={{ addUser, getUsers, updateUser, deleteUser }}> 
            {children}
        </CrudContext.Provider>
    );
};

export { CrudContext, CrudProvider };

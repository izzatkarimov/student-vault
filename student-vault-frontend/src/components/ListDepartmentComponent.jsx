import React, { useEffect, useState } from 'react';
import { deleteDepartment, getAllDepartments } from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {
    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();

    // Function to fetch and update departments
    const listOfDepartments = () => {
        getAllDepartments()
            .then((response) => {
                console.log('Fetched departments:', response.data);
                setDepartments(response.data);
            })
            .catch((error) => {
                console.error('Error fetching departments:', error);
            });
    };

    // Fetch departments on component load
    useEffect(() => {
        listOfDepartments();
    }, []);

    // Navigate to update department page
    const updateDepartment = (id) => {
        navigator(`/edit-department/${id}`);
    };

    // Remove a department
    const removeDepartment = (id) => {
        deleteDepartment(id)
            .then(() => {
                console.log('Department deleted successfully');
                listOfDepartments(); // Refresh the list
            })
            .catch((error) => {
                console.error('Error deleting department:', error);
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">Departments</h2>
            <Link to="/add-department" className="btn btn-primary mb-2">
                Add Department
            </Link>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td>
                                <button
                                    onClick={() => updateDepartment(department.id)}
                                    className="btn btn-info"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => removeDepartment(department.id)}
                                    className="btn btn-danger"
                                    style={{ marginLeft: '10px' }}
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
};

export default ListDepartmentComponent;

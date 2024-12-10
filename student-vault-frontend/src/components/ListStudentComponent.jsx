import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { deleteStudent } from '../services/StudentService'
import { useNavigate } from 'react-router-dom'

const ListStudentComponent = () => {
    
    const [students, setStudents] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
        getAllStudents();
    }, []);

    const getAllStudents = () => {
        axios.get('http://localhost:8080/api/students')
            .then((response) => {
                console.log('Fetched students:', response.data);
                setStudents(response.data);
            })
            .catch((error) => {
                console.error('Error fetching students:', error);
            })
    }

    function addNewStudent(){
        navigator('/add-student')
    }

    function updateStudent(id) {
        navigator(`/edit-student/${id}`)
    }

    function removeStudent(id){
        console.log(id);

        deleteStudent(id).then((response) =>{
            getAllStudents();
        }).catch(error => {
            console.error(error);
        })
    }



  return (
    <div className='container'>

        <h2 className='text-center'>Students</h2>
        <button className='btn btn-primary mb-2' onClick={addNewStudent}>Add Student</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => 
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateStudent(student.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeStudent(student.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListStudentComponent
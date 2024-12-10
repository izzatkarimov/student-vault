package com.izzatkarimov.student_vault.service;

import com.izzatkarimov.student_vault.dto.StudentDto;

import java.util.List;

public interface StudentService {

    // Create Student Service
    StudentDto createStudent(StudentDto studentDto);

    // Get Student Service
    StudentDto getStudentById(Long studentId);

    // Get All Students Service
    List<StudentDto> getAllStudents();

    // Update Student Service
    StudentDto updateStudent(Long studentId, StudentDto studentDto);

    // Delete Student
    void deleteStudent(Long studentId);

}

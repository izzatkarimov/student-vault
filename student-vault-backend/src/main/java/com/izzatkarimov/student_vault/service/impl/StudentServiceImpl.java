package com.izzatkarimov.student_vault.service.impl;

import com.izzatkarimov.student_vault.domain.Department;
import com.izzatkarimov.student_vault.domain.Student;
import com.izzatkarimov.student_vault.dto.StudentDto;
import com.izzatkarimov.student_vault.exception.ResourceNotFoundException;
import com.izzatkarimov.student_vault.mapper.StudentMapper;
import com.izzatkarimov.student_vault.repository.DepartmentRepository;
import com.izzatkarimov.student_vault.repository.StudentRepository;
import com.izzatkarimov.student_vault.service.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    private DepartmentRepository departmentRepository;

    // Create Student Service Implementation
    @Override
    public StudentDto createStudent(StudentDto studentDto) {

        Student student = StudentMapper.mapToStudent(studentDto);
        Department department = departmentRepository.findById(studentDto.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Department with id " + studentDto.getDepartmentId() + " not found"));
        student.setDepartment(department);
        Student savedStudent = studentRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);

    }

    // Get Student Service Implementation
    @Override
    public StudentDto getStudentById(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id " + studentId + " does not exist"));
        return StudentMapper.mapToStudentDto(student);
    }

    // Get All Students Service Implementation
    @Override
    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return students.stream().map((student) -> StudentMapper.mapToStudentDto(student))
                .collect(Collectors.toList());
    }

    // Update Student Service Implementation
    @Override
    public StudentDto updateStudent(Long studentId, StudentDto updatedStudent) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id " + studentId + " does not exist"));

        student.setFirstName(updatedStudent.getFirstName());
        student.setLastName(updatedStudent.getLastName());
        student.setEmail(updatedStudent.getEmail());

        Department department = departmentRepository.findById(updatedStudent.getDepartmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Department with id " + updatedStudent.getDepartmentId() + " not found"));
        student.setDepartment(department);

        Student updatedStudentObj = studentRepository.save(student);

        return StudentMapper.mapToStudentDto(updatedStudentObj);

    }

    // Delete Student Service Implementation
    @Override
    public void deleteStudent(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student with id " + studentId + " does not exist"));

        studentRepository.delete(student);
    }

}

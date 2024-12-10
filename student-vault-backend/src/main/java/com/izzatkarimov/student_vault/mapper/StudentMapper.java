package com.izzatkarimov.student_vault.mapper;

import com.izzatkarimov.student_vault.domain.Student;
import com.izzatkarimov.student_vault.dto.StudentDto;

public class StudentMapper {

    public static StudentDto mapToStudentDto(Student student) {
        Long departmentId = (student.getDepartment() != null) ? student.getDepartment().getId() : null;
        return new StudentDto(
                student.getId(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                departmentId
        );
    }

    public static Student mapToStudent(StudentDto studentDto) {
        Student student = new Student();
        student.setId(studentDto.getId());
        student.setFirstName(studentDto.getFirstName());
        student.setLastName(studentDto.getLastName());
        student.setEmail(studentDto.getEmail());
        return student;
    }
}

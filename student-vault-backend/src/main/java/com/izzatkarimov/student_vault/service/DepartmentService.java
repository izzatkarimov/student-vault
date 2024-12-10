package com.izzatkarimov.student_vault.service;

import com.izzatkarimov.student_vault.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {

    // Create Department Service
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    // Get Department Service
    DepartmentDto getDepartmentById(Long departmentId);

    // Get All Departments Service
    List<DepartmentDto> getAllDepartments();

    // Update Department Service
    DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment);

    // Delete Department Service
    void deleteDepartment(Long departmentId);

}

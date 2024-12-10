package com.izzatkarimov.student_vault.mapper;

import com.izzatkarimov.student_vault.domain.Department;
import com.izzatkarimov.student_vault.dto.DepartmentDto;

public class DepartmentMapper {

    // JPA Entity to Department DTO
    public static DepartmentDto mapToDepartmentDto(Department department) {
        return new DepartmentDto(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    // Department DTO to Department JPA Entity
    public static Department mapToDepartment(DepartmentDto departmentDto) {
        return new Department(
                departmentDto.getId(),
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
        );
    }

}

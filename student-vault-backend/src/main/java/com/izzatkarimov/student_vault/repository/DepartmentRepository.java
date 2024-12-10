package com.izzatkarimov.student_vault.repository;

import com.izzatkarimov.student_vault.domain.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}

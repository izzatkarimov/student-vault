package com.izzatkarimov.student_vault.repository;

import com.izzatkarimov.student_vault.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}

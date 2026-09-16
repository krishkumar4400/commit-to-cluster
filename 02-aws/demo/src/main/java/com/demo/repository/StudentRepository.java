package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Student extends JpaRepository<com.demo.Student, Long> {
}

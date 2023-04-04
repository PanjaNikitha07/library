package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Issues;

public interface IssuesRepository extends JpaRepository<Issues, Integer>{

}

package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Members;

public interface MemberRepository  extends JpaRepository<Members, Integer>{

}

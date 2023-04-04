package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

	

	Book findBookByAccessNumber(Long accessNumber);

	

	Book findBookByTitle(String title);
//
//
//
	Book findBookByAuthor(String author);
//
//
//
	Book findBookBySubject(String subject);



	Book findBookByKeyword(String keyword);



	List<Book> findBookByCategory(String category);
	
	@Query(value="select category from books",nativeQuery=true)
	List<String> findallCategories(String category);

	Book findBookById(Long id);



	







}

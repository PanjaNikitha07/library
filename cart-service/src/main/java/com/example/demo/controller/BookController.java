package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import com.example.demo.service.BookService;


@RestController
@CrossOrigin("*")
@RequestMapping("/bookservice")
public class BookController {
	
	
	@Autowired
	public BookService bookService;
	@Autowired
	public BookRepository bookRepository;
    
	
	@PostMapping("/books")
	Book newBook(@RequestBody Book newBook) {
		return bookService.save(newBook);
	}
	
	
	@GetMapping("/getbooks")
	List<Book> getAllBooks(){
		return bookService.findAll();
	
	}

}

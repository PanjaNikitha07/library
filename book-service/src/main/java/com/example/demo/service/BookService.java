package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;

@Service
public class BookService {
	@Autowired
	public BookRepository bookRepository;

	public List<Book> findAll() {
		// TODO Auto-generated method stub
		return bookRepository.findAll();
		
	}

	public Book save(Book newBook) {
		// TODO Auto-generated method stub
		return bookRepository.save(newBook);
	}

	public Book findBookByAccessNumber(Long accessNumber) {
		
		return bookRepository.findBookByAccessNumber(accessNumber);
	}

	public Book findBookByTitle(String title) {
		
		return bookRepository.findBookByTitle(title);
	}
//
	public Book findBookByAuthor(String author) {
		
		return bookRepository.findBookByAuthor(author);
	}

	public Book findBookBySubject(String subject) {
		
		return bookRepository.findBookBySubject(subject);
	}

	public Book findBookByKeyword(String keyword) {
		
		return bookRepository.findBookByKeyword(keyword);
	}

	public List<Book> findBookByCategory(String category) {
		return bookRepository.findBookByCategory(category);
	}
	public List<String> findallCategories(String category) {
		return bookRepository.findallCategories(category);
	}

	public Book findBookById(Long id) {
		return bookRepository.findBookById(id);
		
	}

	public boolean existById(long id) {
		return bookRepository.existsById(id);
	}

	public void deleteById(long id) {
		bookRepository.deleteById(id);
		
	}




	
	
	
	
	

}

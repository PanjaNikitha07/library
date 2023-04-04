package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	@GetMapping("/getBookById/{id}")
	Book getbookById(@PathVariable Long id) {
		 return bookService.findBookById(id);
	}
	
//	
	@GetMapping("/getBookByAccessNumber/{accessNumber}")
	Book getbookByAccessNumber(@PathVariable Long accessNumber) {
		return bookService.findBookByAccessNumber(accessNumber);
			
	}
	@GetMapping("/getBookByCategory/{category}")
	List<Book> getbookByCategory(@PathVariable String category) {
		return bookService.findBookByCategory(category);
			
	}
	@GetMapping("/getallCategories")
	List<String> findallCategories(String category) {
		return bookService.findallCategories(category);
			
	}
	
	
//	
	@GetMapping("/getBooksByTitle/{title}")
	Book getBookByTitle(@PathVariable String title) {
		return bookService.findBookByTitle(title);
	}
	
	@GetMapping("/getBookByAuthor/{author}")
	Book getBookByAuthor(@PathVariable String author) {
		return bookService.findBookByAuthor(author);
	}
	@GetMapping("/getBookBySubject/{subject}")
	Book getBookBySubject(@PathVariable String subject) {
		return bookService.findBookBySubject(subject);
	}
	@GetMapping("/getBookByKeyword/{keyword}")
	Book getBookByKeyword(@PathVariable String keyword) {
		return bookService.findBookByKeyword(keyword);
	}
	
	@RequestMapping(value={"/deleteBookById/{id}"}, method = { RequestMethod.DELETE })
	String deleteBook(@PathVariable Long id) {
		if(!bookRepository.existsById(id)) {
			return "user not found";
			
		}
		bookRepository.deleteById(id);
		return "User with id "+id+" has been deleted successfully";
	}
	
	
	
	@CrossOrigin("*")
	@RequestMapping(value={"/deleteBookByIds/{ids}"}, method = { RequestMethod.DELETE })
	public ResponseEntity<String> deleteBooks(@PathVariable List<String> ids) {
		ids.forEach(d->{
			if(bookService.existById(Long.parseLong(d))) {
				bookService.deleteById(Long.parseLong(d));
			}});
		
		return ResponseEntity.ok().body("Books has been removed");
	}
}
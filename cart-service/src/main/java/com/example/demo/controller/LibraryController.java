//package com.example.demo.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//
//import jakarta.ws.rs.BadRequestException;
//
//public class LibraryController {
//	@Autowired
//	public LibraryService libraryservice;
//	
//	public LibraryController(LibraryService) {
//		super();
//		this.libraryservice = libraryservice;
//		
//	}
//	@GetMapping()
//	public List<Issue> getallIssues(){
//		return libraryservice.getallIssues();
//		
//	}
//	
//	@PostMapping("/books/issue")
//	public Issue issueBook(@RequestBody Issue issue) throws BadRequestException{
//		Issue issue1 = libraryservice.issueBook(issue.getBookis(),issue.getMemberusername());
//		return issue1;
//	}
//
//	
//	@PostMapping("/books/return")
//	public Issue returnBook(@RequestBody Issue issue) throws BadRequestException{
//		Issue issue2 = libraryservice.returnBook(issue.getBookid(),issue.getMemberusername());
//		return issue2;
//	}
//	
//	@PostMapping("/books/renewal")
//	public Issue renewalBook(@RequestBody Issue issue) throws BadRequestException{
//		Issue issue3 = libraryservice.renewalBook(issue.getBookid(),issue.getMemberusername());
//		return issue3;
//	}
//	
//	@GetMapping("/getcart/{memberid}/{status}")
//	public List<Cart> getcart(@PathVariable String status ){
//		List<Cart> cart = libraryservice.getCart(memberusername,status);
//		return cart;
//	}
//	
//	@GetMapping("/memberusername/{memberusername}")
//	public List<Cart> getmembercart(@PathVariable String memberusername){
//		return libraryservice.getusercart(memberusername);
//	}
//}

package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Issues;
import com.example.demo.repository.IssuesRepository;

@RestController
@CrossOrigin("*")
public class IssueController {
	
	@Autowired
	private IssuesRepository issuesRepository;

	@GetMapping("/getIssues")
	List<Issues> getIssuesRequest(){
		return issuesRepository.findAll();
	}
	
	@PostMapping("/addIssueRequest")
	Issues newIssuesRequest(@RequestBody Issues newIssuesRequest) {
		return issuesRepository.save(newIssuesRequest);
	}
	@RequestMapping(value={"/deleteIssue/{cartId}"}, method = { RequestMethod.DELETE })
	String deleteIssue(@PathVariable Integer cartId) {
		if(!issuesRepository.existsById(cartId)) {
			return "user not found";
			
		}
		issuesRepository.deleteById(cartId);
		return "User with id "+cartId+" has been deleted successfully";
	}
	}

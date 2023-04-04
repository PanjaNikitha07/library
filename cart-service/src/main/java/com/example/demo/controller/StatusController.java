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
import com.example.demo.model.Status;
import com.example.demo.repository.StatusRepository;
@RestController
@CrossOrigin("*")
public class StatusController {
	
	@Autowired
	private StatusRepository statusRepository;
	
	@GetMapping("/getStatus")
	List<Status> getStatus(){
		return statusRepository.findAll();
	}
	@PostMapping("/postStatus")
	Status postStatus(@RequestBody Status postStatus) {
		return statusRepository.save(postStatus);
	}
	
	@RequestMapping(value={"/returnBook/{cartId}"}, method = { RequestMethod.DELETE })
	String returnBook(@PathVariable Integer cartId) {
		if(!statusRepository.existsById(cartId)) {
			return "user not found";
			
		}
		statusRepository.deleteById(cartId);
		return "User with id "+cartId+" has been deleted successfully";
	}
}

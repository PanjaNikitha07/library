package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/userservice")

@RequiredArgsConstructor
public class DemoController {
	@Autowired
	private UserRepository userRepository;
	@GetMapping
	public ResponseEntity<String> sayHello(){
		return ResponseEntity.ok("Hello fron the secured endpoint");
	}
	@CrossOrigin("*")
	@GetMapping("/getUsers")
	
	List<User> getAllUsers(){
		return userRepository.findAll();
	
	}
	@CrossOrigin("*")
	@DeleteMapping("/deleteUser/{id}")
	String deleteUser(@PathVariable Integer id) {
		if(!userRepository.existsById(id)) {
//			throw new UserNotFoundException(id);
	     return "user not found";
		}
		userRepository.deleteById(id);
		return "User with id "+id+" has been deleted successfully";
	}
	

}

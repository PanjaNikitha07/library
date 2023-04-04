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

import com.example.demo.model.Members;
import com.example.demo.repository.MemberRepository;
import com.example.demo.service.MemberService;

import lombok.RequiredArgsConstructor;



@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
public class MemberController {
	@Autowired
	private MemberService memberService;
	@Autowired
	private MemberRepository memberRepository;
	
  @PostMapping("/AddMember")
  Members newMember(@RequestBody Members newMember) {
		return memberService.save(newMember);
	}
  
  @GetMapping("/members")
  List<Members> getAllMembers(){
	  return memberService.findAll();
  }
  @RequestMapping(value={"/members/{id}"}, method = { RequestMethod.DELETE })
	String deleteMember(@PathVariable Integer id) {
		if(!memberRepository.existsById(id)) {
			return "user not found";
			
		}
		memberRepository.deleteById(id);
		return "User with id "+id+" has been deleted successfully";
	}
}

package com.infy.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infy.model.Login;
import com.infy.service.ProjectService;

@RestController
@RequestMapping(value = "/toDoList")
public class Api {
	
	@Autowired
	private ProjectService projectService;
	
	@PostMapping(value = "/login")
	public ResponseEntity<String> validUser(@RequestBody Login login) throws Exception{
		String s = projectService.validUser(login);
		ResponseEntity<String> response = new ResponseEntity<String>(s,HttpStatus.CREATED);
		return response;
	}
}
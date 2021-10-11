package com.infy.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.infy.model.Login;
import com.infy.model.ToDo;
import com.infy.service.ProjectService;

@CrossOrigin
@RestController
@RequestMapping(value = "/toDoList")
public class Api {
	
	@Autowired
	private ProjectService projectService;
	
	@Autowired
	private Environment environment;
	
	@PostMapping(value = "/login")
	public ResponseEntity<String> validUser(@RequestBody Login login) throws Exception{
		try {
			String s = projectService.validUser(login);
			ResponseEntity<String> response = new ResponseEntity<String>(s,HttpStatus.CREATED);
			return response;
		}catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}
	
	@PostMapping(value = "/newToDo/{currentUserName}")
	public ResponseEntity<String> newToDo(@RequestBody ToDo todo, @PathVariable String currentUserName) throws Exception{
		try {
			String s = projectService.newToDo(todo, currentUserName);
			ResponseEntity<String> response = new ResponseEntity<String>(s,HttpStatus.CREATED);
			return response;
		}catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}
	
	@GetMapping(value = "/myTodos/{currentUserName}")
	public ResponseEntity<List<String>> myTodos(@PathVariable String currentUserName) throws Exception{
		try {
			System.out.println("Hello");
			List<String> s = projectService.myTodos(currentUserName);
			ResponseEntity<List<String>> response = new ResponseEntity<List<String>>(s,HttpStatus.CREATED);
			return response;
		}catch(Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, environment.getProperty(e.getMessage()));
		}
	}
}

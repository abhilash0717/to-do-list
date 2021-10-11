package com.infy.service;

import java.util.List;

import com.infy.model.Login;
import com.infy.model.ToDo;

public interface ProjectService {

	String validUser(Login login) throws Exception;

	String newToDo(ToDo todo, String currentUserName) throws Exception;

	List<String> myTodos(String currentUserName) throws Exception;
	
}

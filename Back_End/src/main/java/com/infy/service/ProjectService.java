package com.infy.service;

import com.infy.model.Login;
import com.infy.model.ToDo;

public interface ProjectService {

	String validUser(Login login) throws Exception;

	String newToDo(ToDo todo) throws Exception;
	
}

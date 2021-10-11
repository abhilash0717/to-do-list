package com.infy.dao;

import java.util.List;

import com.infy.model.Login;
import com.infy.model.ToDo;

public interface Dao {

	String validUser(Login login) throws Exception;

	String newToDo(ToDo todo, String currentUserName) throws Exception;

	List<String> myTodos(String currentUserName) throws Exception;

}

package com.infy.dao;

import com.infy.model.Login;
import com.infy.model.ToDo;

public interface Dao {

	String validUser(Login login) throws Exception;

	String newToDo(ToDo todo) throws Exception;

}

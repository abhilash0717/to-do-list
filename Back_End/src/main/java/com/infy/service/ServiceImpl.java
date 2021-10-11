package com.infy.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dao.Dao;
import com.infy.model.Login;
import com.infy.model.ToDo;

@Service
@Transactional
public class ServiceImpl implements ProjectService {
	
	@Autowired
	private Dao dao;
	
	@Override
	public String validUser(Login login) throws Exception {
		// TODO Auto-generated method stub
		return dao.validUser(login);
	}

	@Override
	public String newToDo(ToDo todo, String currentUserName) throws Exception {
		// TODO Auto-generated method stub
		return dao.newToDo(todo, currentUserName);
	}

	@Override
	public List<String> myTodos(String currentUserName) throws Exception {
		// TODO Auto-generated method stub
		return dao.myTodos(currentUserName);
	}


}

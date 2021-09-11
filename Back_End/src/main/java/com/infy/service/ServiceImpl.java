package com.infy.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dao.Dao;
import com.infy.model.Login;

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


}

package com.infy.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.infy.entity.LoginEntity;
import com.infy.model.Login;

@Repository
public class DaoImpl implements Dao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public String validUser(Login login) {
		String s = "select l.name from LoginEntity l where l.name =: name";
		Query query = entityManager.createQuery(s);
		query.setParameter("name", login.getName());
		List<LoginEntity> results = query.getResultList();
		LoginEntity LE = results.get(0);
		
		if(LE != null) {
			System.out.println("user is valid");
			return LE.getName();
		}
		
		System.out.println("User is not valid");
		return null;
	}
}

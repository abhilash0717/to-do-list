package com.infy.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.infy.entity.LoginEntity;
import com.infy.entity.ToDoEntity;
import com.infy.model.Login;
import com.infy.model.ToDo;

@Repository
public class DaoImpl implements Dao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public String validUser(Login login) throws Exception {
		String s = "select l.name from LoginEntity l where l.name =: name";
		String str = "select l.password from LoginEntity l where l.password =: password";
		Query query = entityManager.createQuery(s);
		query.setParameter("name", login.getName());
		List<String> results = query.getResultList();
		
		Query q1 = entityManager.createQuery(str);
		q1.setParameter("password", login.getPassword());
		List<String> resultpassword = q1.getResultList();
		
		if(results.size() > 0 && resultpassword.size() > 0) {
			String n = results.get(0);	
			String p = resultpassword.get(0);
			if(n.equals(login.getName()) && p.equals(login.getPassword())) {
				System.out.println("user is valid");
				return n;
			
		}else {
			System.out.println("User is not valid");
			throw new Exception("User.INVALID");
			}
		}
		throw new Exception("User.INVALID");
	}

	@Override
	public String newToDo(ToDo todo, String currentUserName) throws Exception {
		ToDoEntity TE = new ToDoEntity();
		TE.setMessage(todo.getMessage());
		TE.setUsername(currentUserName);
		TE.setCompleted("No");
		entityManager.persist(TE);
		return "To-Do added successfully";
	}

	@Override
	public List<String> myTodos(String currentUserName) throws Exception {
		String s = "select t.message from ToDoEntity t where t.username =: username and t.completed =: status";
		Query q = entityManager.createQuery(s);
		q.setParameter("username", currentUserName);
		q.setParameter("status", "No");
		List<String> list = q.getResultList();
		
		if(list.size() > 0) {
			return list;
		}
		return null;
	}
}

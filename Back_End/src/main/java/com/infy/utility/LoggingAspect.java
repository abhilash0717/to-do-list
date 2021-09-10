package com.infy.utility;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {
	private Log logger=LogFactory.getLog("com.infy");

	@AfterThrowing(pointcut = "execution(* com.infy.service.*Impl.*(..))", throwing = "exception")
	public void logServiceException(Exception exception) throws Exception {
		logger.error(exception.getMessage(), exception);
	}

	@AfterThrowing(pointcut = "execution(* com.infy.dao.*Impl.*(..))", throwing = "exception")
	public void logDaoException(Exception exception)
			throws Exception {
		
		logger.error(exception.getMessage(), exception);
	}


}

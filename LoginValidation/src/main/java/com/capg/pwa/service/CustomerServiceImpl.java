package com.capg.pwa.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.capg.pwa.dao.Customer1Dao;
import com.capg.pwa.entity.WalletAccount;
import com.capg.pwa.entity.WalletUser;
import com.capg.pwa.exceptions.IdNotFoundException;


@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	Customer1Dao cus1Dao;

	@Override
	public WalletUser validateUser(Integer cusId, String cusPassword) {
		// TODO Auto-generated method stub
		return cus1Dao.LoginDetails(cusId, cusPassword);
		
	

	}

}
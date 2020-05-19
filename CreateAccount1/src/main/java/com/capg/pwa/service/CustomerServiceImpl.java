package com.capg.pwa.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.pwa.dao.CustomerDao;
import com.capg.pwa.entity.WalletAccount;
import com.capg.pwa.entity.WalletUser;



@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerDao cusDao;

	@Override
	public WalletAccount createAccount(WalletAccount acc) {
		// TODO Auto-generated method stub
		return cusDao.save(acc);
	}



}
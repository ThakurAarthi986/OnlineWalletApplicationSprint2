package com.capg.pwa.service;

import com.capg.pwa.entity.WalletAccount;

public interface CustomerService {

	Double addAmount(Integer cusId, Double balance);

	void updateData(Integer cusId);
	



}

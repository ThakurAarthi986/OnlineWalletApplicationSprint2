package com.capg.pwa.service;

import com.capg.pwa.entity.WalletAccount;
import com.capg.pwa.entity.WalletUser;

public interface CustomerService {

	WalletUser validateUser(Integer cusId, String cusPassword);
	



}

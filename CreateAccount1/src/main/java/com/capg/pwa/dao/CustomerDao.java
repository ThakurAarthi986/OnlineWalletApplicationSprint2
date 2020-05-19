package com.capg.pwa.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capg.pwa.entity.WalletAccount;
import com.capg.pwa.entity.WalletUser;


 
@Repository
public interface CustomerDao  extends JpaRepository<WalletAccount, Integer> {
	

	}


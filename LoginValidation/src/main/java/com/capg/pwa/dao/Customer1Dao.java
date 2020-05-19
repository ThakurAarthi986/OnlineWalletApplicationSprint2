package com.capg.pwa.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.capg.pwa.entity.WalletUser;

 
@Repository
public interface Customer1Dao  extends JpaRepository<WalletUser, Integer> {
	
	
	@Query("select d from WalletUser d  where user_Id =?1 and password=?2")
	WalletUser LoginDetails(Integer cusId, String cusPassword);
	}
package com.capg.pwa.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.capg.pwa.entity.WalletAccount;

 
@Repository
public interface Customer1Dao  extends JpaRepository<WalletAccount, Integer> {
	
	@Query("select e.account_Balance from WalletAccount e where e.WalletUser.user_Id=?1")
	Double getAmount(@Param("C")Integer cusId1);
	
	@Modifying
	@Transactional
	@Query("UPDATE WalletAccount w SET w.account_Balance = ?2 where w.WalletUser.user_Id=?1")
	Integer  updateAmount(@Param("C") Integer cusId, @Param("C") Double c);

	@Modifying
	@Transactional
	@Query("update WalletAccount e set e.status=?1 where e.WalletUser.user_Id=?2")
	void updateData(@Param("C") String s, @Param("C") Integer cusId);                           //to insert data in database

	
	
	
	/*@Modifying
	@Query("update WalletAccount w set w.account_Balance = :balance where w.user_Id=:userid ")
	Double  updateAmount(@Param("userid") Integer cusId, @Param("balance") Double c);
	*/
	/*@Repository
	public interface CompanyRepository extends JpaRepository<Company, Integer> {
	    @Modifying
	    @Query("UPDATE Company c SET c.address = :address WHERE c.id = :companyId")
	    int updateAddress(@Param("companyId") int companyId, @Param("address") String address);
	}*/
	

	}


package com.capg.pwa.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.pwa.entity.WalletAccount;
import com.capg.pwa.entity.WalletUser;
import com.capg.pwa.service.CustomerService;


@RestController
@RequestMapping("/Wallet")
@CrossOrigin(origins="http://localhost:4200")
public class EmpRestController {

@Autowired
CustomerService cusService;
@PostMapping("/createAccount")
public WalletAccount CreateAccount(@RequestBody WalletAccount acc) {
	acc.setAccount_Balance(0.0);
	acc.setStatus("NO BALANCE");	
	
	System.out.println(acc);
	//acc.setStatus(EnumClass.NOBALANCE);  
	WalletAccount  c=cusService.createAccount(acc);
     System.out.println(c.getAccount_Id());
     //c.getAccount_Balance();
     //c.setAccount_Balance(0.0);
   // c.setStatus(EnumClass.NOBALANCE);                                         //to enter data in database
    
     System.out.println("Customer Account Created Successfully");
	return c;
	}
}
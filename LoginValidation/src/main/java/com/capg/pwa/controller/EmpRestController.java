package com.capg.pwa.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.pwa.entity.WalletUser;
import com.capg.pwa.exceptions.IdNotFoundException;
import com.capg.pwa.service.CustomerService;



@RestController
@RequestMapping("/Wallet")
@CrossOrigin("http://localhost:4200")
public class EmpRestController {

@Autowired
CustomerService cusService;

/*@GetMapping("/validateUser/{cusId}/{cusPassword}")
public Integer validateUser(@PathVariable Integer cusId, @PathVariable String cusPassword) {
	
	return cusService.validateUser(cusId, cusPassword);	
	

	 
}
}*/

@GetMapping("/validateUser/{cusId}/{cusPassword}")
public ResponseEntity<WalletUser> validateUser(@PathVariable Integer cusId, @PathVariable String cusPassword) throws IdNotFoundException {
	
	WalletUser b=cusService.validateUser(cusId, cusPassword);	
if(b==null)
	 throw new IdNotFoundException("Please Enter Valid Login Detailsh UserId/n if you don't have an account please register below");
else
 {
 ResponseEntity<WalletUser> responseEntity = new ResponseEntity<WalletUser>(b, HttpStatus.OK); 
 return	  responseEntity;
 }
 }
//return b;

@ExceptionHandler(IdNotFoundException.class)
public ResponseEntity<String>IdNotFoundException(IdNotFoundException e){
return new ResponseEntity<>(e.getMessage(), HttpStatus.OK);

}
}

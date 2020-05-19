package com.capg.pwa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient
@EnableSwagger2
public class LoginValidationApplication {

	public static void main(String[] args) {
		SpringApplication.run(LoginValidationApplication.class, args);
	}

}

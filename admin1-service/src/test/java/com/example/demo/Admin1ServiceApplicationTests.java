package com.example.demo;

import static io.restassured.RestAssured.given;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.controller.AuthenticationRequest;

import io.restassured.http.ContentType;

@SpringBootTest
class Admin1ServiceApplicationTests {

	@Test
	@Order(1)
    void LoginTest() {
        AuthenticationRequest authCheck = new AuthenticationRequest();
        authCheck.setEmail("admindemo@gmail.com");
        authCheck.setPassword("1234");
        
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .body(authCheck)
        .when()
        .post("http://localhost:9002/adminservice/api/v1/auth/authenticate")
        .then()
        .assertThat().statusCode(200);
    }
}

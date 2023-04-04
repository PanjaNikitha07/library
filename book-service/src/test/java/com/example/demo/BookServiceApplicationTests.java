package com.example.demo;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.Book;
import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;

@SpringBootTest
class BookServiceApplicationTests {

	@Test
	@Order(1)
    void getAllBooks() {
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .when()
        .get("http://localhost:8097/bookservice/getbooks")
        .then()
        .assertThat().statusCode(200);
    }
    
    @Test
    @Order(2)
    void getBookById() {
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .when()
        .get("http://localhost:8097/bookservice/getBookById/58")
        .then()
        .assertThat().statusCode(200);
    }
    
    @Test
    @Order(3)
    void getBookByAccessNumber() {
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .when()
        .get("http://localhost:8097/bookservice/getBookByAccessNumber/1006")
        .then()
        .assertThat().statusCode(200);
    }
    
    @Test
    @Order(4)
    void getBookByAuthor() {
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .when()
        .get("http://localhost:8097/bookservice/getBookByAuthor/Robin Hobb")
        .then()
        .assertThat().statusCode(200);
    }
    
    @Test
    @Order(5)
    void getBookByCategory() {
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .when()
        .get("http://localhost:8097/bookservice/getBookByCategory/Action")
        .then()
        .assertThat().statusCode(200);
    }
    @Test
    @Order(6)
    void getBookByKeyword() {
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .when()
        .get("http://localhost:8097/bookservice/getBookByKeyword/bl")
        .then()
        .assertThat().statusCode(200);
    }
    @Test
    @Order(7)
    void getBookByTitle() {
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .when()
        .get("http://localhost:8097/bookservice/getBooksByTitle/Black Flag")
        .then()
        .assertThat().statusCode(200);
    }
    @Test
    @Order(8)
    void newBook() {
        Book t=new Book();
        t.setId(61L);
        t.setAccessNumber(1234L);
        t.setTitle("eunice");
        t.setAuthor("eunice");
        t.setSubject("jhg");
        t.setCategory("Action");
        t.setKeyword("ghr");
        
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .body(t)
        .when()
        .post("http://localhost:8097/bookservice/books")
        .then()
        .assertThat().statusCode(200);
    }
    
    @Test
    @Order(9)
    void deleteBookById() {
        given().header("Content_Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON)
        .when()
        .delete("http://localhost:8097/bookservice/deleteBookById/54")
        .then()
        .assertThat().statusCode(200);
    }

}

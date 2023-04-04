package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="status")

public class Status {
	@Id
	@GeneratedValue
	private int cartId;
//	private int userId;
	private String userEmail;
	private int bookId;
	private String bookTitle;
	private String date;
	private String Status;
	
	

}

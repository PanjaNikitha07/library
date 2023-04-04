//package com.example.demo.repository;
//
//
//import java.util.List;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//public interface LibraryRepository extends JpaRepository<Cart, Long>{
//    @Query(value="select cartid from cart where bookid=? and memberusername=?",nativeQuery=true)
//    public long findBybookIdMemberId(long bookid,String memberusername);
//    
//    @Query(value="select * from cart where bookid=? and memberusername=? and status='Issued",nativeQuery=true)
//    public Cart getBybookIdMemberId(long bookid,String memberusername,String memberusername);
//    
//    @Query(value="select * from cart where memberusername=? and status=?",nativeQuery=true)
//    public List<Cart>getissuedbooksbyMemberId(String memberusername,String status);
//    
//    @Query(value="select * from cart where bookid=?",nativeQuery=true)
//    public List<Cart>memberid(long bookid);
//    
//    @Query(value="select * from cart where memberusername=? ",nativeQuery=true)
//    public List<Cart>getbooksbyMember(String memberusername);
//}
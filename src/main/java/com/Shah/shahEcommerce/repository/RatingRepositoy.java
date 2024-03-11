package com.Shah.shahEcommerce.repository;

import com.Shah.shahEcommerce.modal.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RatingRepositoy extends JpaRepository<Rating,Long> {

//    @Query("Select r From Rating r Where r.productId=:productId")
//    public List<Rating> getAllProductsRating(@Param("productId") Long productId);

//    @Query("SELECT r FROM Rating r WHERE r.productId = :productId")
//    List<Rating> getAllProductsRating(@Param("productId") Long productId);

    @Query("SELECT r FROM Rating r WHERE r.product.id = :productId")
    List<Rating> getAllProductsRating(@Param("productId") Long productId);



}

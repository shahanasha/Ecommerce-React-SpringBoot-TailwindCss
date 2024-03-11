package com.Shah.shahEcommerce.repository;

import com.Shah.shahEcommerce.modal.Cart;
import com.Shah.shahEcommerce.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartRepository extends JpaRepository<Cart , Long> {

//    @Query("Select c From Cart c Where c.user.id=:userId")
//    public Cart findByUserId(@Param("userId") Long userId);

    @Query("SELECT c FROM Cart c WHERE c.user.id = :userId")
    public Cart findByUserId(@Param("userId") Long userId);

}

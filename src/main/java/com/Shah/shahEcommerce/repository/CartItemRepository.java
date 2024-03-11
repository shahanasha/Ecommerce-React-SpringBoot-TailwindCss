package com.Shah.shahEcommerce.repository;

import com.Shah.shahEcommerce.modal.Cart;
import com.Shah.shahEcommerce.modal.CartItem;
import com.Shah.shahEcommerce.modal.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CartItemRepository extends JpaRepository<CartItem,Long> {

//    @Query("Select ci From CartItem ci Where ci.cart=:cart And ci.product=:product And ci.size=:size ci.userId=:userId")
//    public CartItem isCartItemExists(@Param("cart")Cart cart, @Param("product")Product product,
//                                     @Param("size") String size,@Param("userId") Long userId);

    @Query("SELECT ci FROM CartItem ci WHERE ci.cart = :cart AND ci.product = :product AND ci.size = :size AND ci.userId = :userId")
    public CartItem isCartItemExists(@Param("cart") Cart cart, @Param("product") Product product,
                                     @Param("size") String size, @Param("userId") Long userId);



}

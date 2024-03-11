package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.exception.CartItemException;
import com.Shah.shahEcommerce.exception.UserException;
import com.Shah.shahEcommerce.modal.Cart;
import com.Shah.shahEcommerce.modal.CartItem;
import com.Shah.shahEcommerce.modal.Product;

public interface CartItemService {

    CartItem createCartItem(CartItem cartItem);

    CartItem updateCartItem(Long userId,Long id,CartItem cartItem) throws CartItemException, UserException;

    CartItem isCartItemExists(Cart cart, Product product,String size,Long userId);

    void removeCartItem(Long userId,Long cartItemId)throws CartItemException,UserException;

    CartItem findCartItemById(Long cartItemId)throws CartItemException;

}

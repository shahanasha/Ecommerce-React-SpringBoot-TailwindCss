package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.request.AddItemRequest;
import com.Shah.shahEcommerce.exception.ProductException;
import com.Shah.shahEcommerce.modal.Cart;
import com.Shah.shahEcommerce.modal.User;

public interface CartService {

    Cart createCart(User user);
    String addCartItem(Long userId, AddItemRequest req)throws ProductException;
    Cart findUserCart(Long userId);

}

package com.Shah.shahEcommerce.controller;

import com.Shah.shahEcommerce.exception.ProductException;
import com.Shah.shahEcommerce.exception.UserException;
import com.Shah.shahEcommerce.modal.Cart;
import com.Shah.shahEcommerce.modal.User;
import com.Shah.shahEcommerce.request.AddItemRequest;
import com.Shah.shahEcommerce.response.ApiResponse;
import com.Shah.shahEcommerce.service.CartService;
import com.Shah.shahEcommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization")String jwt) throws UserException{

        User user=userService.findUserProfileByJwt(jwt);
        Cart cart=cartService.findUserCart(user.getId());

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,
                                                     @RequestHeader("Authorization") String jwt) throws UserException, ProductException{
        User user=userService.findUserProfileByJwt(jwt);

        cartService.addCartItem(user.getId(),req);

        ApiResponse res=new ApiResponse();
        res.setMessage("item added to cart");
        res.setStatus(true);
        return  new ResponseEntity<>(res,HttpStatus.OK);
    }

}

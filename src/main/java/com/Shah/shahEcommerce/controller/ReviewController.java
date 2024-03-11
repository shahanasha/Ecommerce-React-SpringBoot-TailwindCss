package com.Shah.shahEcommerce.controller;

import com.Shah.shahEcommerce.exception.ProductException;
import com.Shah.shahEcommerce.exception.UserException;
import com.Shah.shahEcommerce.modal.Review;
import com.Shah.shahEcommerce.modal.User;
import com.Shah.shahEcommerce.request.ReviewRequest;
import com.Shah.shahEcommerce.service.ReviewService;
import com.Shah.shahEcommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Review> createReview(@RequestBody ReviewRequest req,
                                               @RequestHeader("Authorization")String jwt)throws UserException, ProductException{

        User user=userService.findUserProfileByJwt(jwt);
        Review review=reviewService.createReview(req,user);

        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getProductReview(@PathVariable Long productId)throws UserException,ProductException{

        List<Review> reviews=reviewService.getAllReview(productId);
        return new ResponseEntity<>(reviews,HttpStatus.CREATED);
    }
}

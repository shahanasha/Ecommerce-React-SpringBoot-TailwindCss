package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.exception.ProductException;
import com.Shah.shahEcommerce.modal.Rating;
import com.Shah.shahEcommerce.modal.User;
import com.Shah.shahEcommerce.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.util.List;

public interface RatingService {

    Rating createRating(RatingRequest req, User user) throws ProductException;
    List<Rating> getProductsRating(Long productId);
}

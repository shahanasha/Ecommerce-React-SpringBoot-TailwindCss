package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.exception.ProductException;
import com.Shah.shahEcommerce.modal.Product;
import com.Shah.shahEcommerce.modal.Rating;
import com.Shah.shahEcommerce.modal.User;
import com.Shah.shahEcommerce.repository.RatingRepositoy;
import com.Shah.shahEcommerce.request.RatingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RatingServiceImpl implements RatingService{

    @Autowired
    private RatingRepositoy ratingRepositoy;
    @Autowired
    private ProductService productService;
    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {

        Product product=productService.findProductById(req.getProductId());

        Rating rating=new Rating();
        rating.setProduct(product);
        rating.setUser(user);
        rating.setRating(req.getRating());
        rating.setCreatedAt(LocalDateTime.now());

        return ratingRepositoy.save(rating);
    }

    @Override
    public List<Rating> getProductsRating(Long productId) {

        return ratingRepositoy.getAllProductsRating(productId);
    }
}

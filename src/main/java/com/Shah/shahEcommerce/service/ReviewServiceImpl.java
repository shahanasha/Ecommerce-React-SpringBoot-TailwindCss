package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.exception.ProductException;
import com.Shah.shahEcommerce.modal.Product;
import com.Shah.shahEcommerce.modal.Review;
import com.Shah.shahEcommerce.modal.User;
import com.Shah.shahEcommerce.repository.ProductRepository;
import com.Shah.shahEcommerce.repository.ReviewRepository;
import com.Shah.shahEcommerce.request.ReviewRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;
    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {

        Product product=productService.findProductById(req.getProductId());

        Review review=new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepository.getAllProoductsreview(productId);
    }
}

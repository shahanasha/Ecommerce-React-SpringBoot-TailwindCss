package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.exception.ProductException;
import com.Shah.shahEcommerce.request.CreateProductRequest;
import com.Shah.shahEcommerce.modal.Product;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    public Product createProduct(CreateProductRequest req);

    public String deleteProduct(Long productId) throws ProductException;

    public Product updateProduct(Long productId, Product req) throws ProductException;

    public Product findProductById(Long id) throws ProductException;

    public List<Product> findProductByCategory(String category);

    public Page<Product> getAllProduct(String category, List<String> colors , List<String> size,
                                       Integer minPrice, Integer maxPrice, Integer minDiscount, String sort,
                                       String stock, Integer pageNumber, Integer pageSize);

}

package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.exception.OrderException;
import com.Shah.shahEcommerce.modal.Address;
import com.Shah.shahEcommerce.modal.Order;
import com.Shah.shahEcommerce.modal.User;
import com.Shah.shahEcommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartService cartService;
    @Autowired
    private ProductService productService;

    @Override
    public Order createOrder(User user, Address shippingAddress) {
        return null;
    }
    @Override
    public Order findOrderById(Long orderId) throws OrderException {
        return null;
    }
    @Override
    public List<Order> userOrderHistory(Long userId) {
        return null;
    }
    @Override
    public Order placedOrder(Long orderId) throws OrderException {
        return null;
    }
    @Override
    public Order confirmedOrder(Long orderId) throws OrderException {
        return null;
    }
    @Override
    public Order shippeddOrder(Long orderId) throws OrderException {
        return null;
    }
    @Override
    public Order deliveredOrder(Long orderId) throws OrderException {
        return null;
    }
    @Override
    public Order cancelledOrder(Long orderId) throws OrderException {
        return null;
    }
    @Override
    public List<Order> getAllOrders() {
        return null;
    }
    @Override
    public void deleteOrder(Long orderId) throws OrderException {

    }
}

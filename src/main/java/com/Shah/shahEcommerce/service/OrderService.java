package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.exception.OrderException;
import com.Shah.shahEcommerce.modal.Address;
import com.Shah.shahEcommerce.modal.Order;
import com.Shah.shahEcommerce.modal.User;


import java.util.List;

public interface OrderService {

    Order createOrder(User user, Address shippingAddress);
    Order findOrderById(Long orderId) throws OrderException;
    List<Order> userOrderHistory(Long userId);
    Order placedOrder(Long orderId) throws OrderException;
    Order confirmedOrder(Long orderId) throws OrderException;
    Order shippeddOrder(Long orderId) throws OrderException;
    Order deliveredOrder(Long orderId) throws OrderException;
    Order cancelledOrder(Long orderId) throws OrderException;
    List<Order> getAllOrders();
    void deleteOrder(Long orderId) throws OrderException;

}

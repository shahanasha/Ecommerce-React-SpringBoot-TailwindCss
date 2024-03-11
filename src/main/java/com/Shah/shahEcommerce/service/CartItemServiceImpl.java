package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.exception.CartItemException;
import com.Shah.shahEcommerce.exception.UserException;
import com.Shah.shahEcommerce.modal.Cart;
import com.Shah.shahEcommerce.modal.CartItem;
import com.Shah.shahEcommerce.modal.Product;
import com.Shah.shahEcommerce.modal.User;
import com.Shah.shahEcommerce.repository.CartItemRepository;
import com.Shah.shahEcommerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartItemServiceImpl implements CartItemService{

    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CartRepository cartRepository;

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());

        CartItem createdCartItem=cartItemRepository.save(cartItem);
        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {

        CartItem item=findCartItemById(id);
        User user=userService.findUserById(item.getUserId());

        if(user.getId().equals(userId)){
            item.setQuantity(cartItem.getQuantity());
            item.setPrice(item.getQuantity()*item.getProduct().getPrice());
            item.setDiscountedPrice(item.getProduct().getDiscountedPrice()*item.getQuantity());
        }
        return cartItemRepository.save(item);
    }

    @Override
    public CartItem isCartItemExists(Cart cart, Product product, String size, Long userId) {

        CartItem cartItem=cartItemRepository.isCartItemExists(cart,product,size,userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {

        CartItem cartItem=findCartItemById(cartItemId);
        User user=userService.findUserById(cartItem.getUserId());
        User reqUser=userService.findUserById(userId);//currently loggedin user
        if(user.getId()==reqUser.getId()){
            cartItemRepository.deleteById(cartItemId);
        }
        else {
            throw new UserException("You cant remove another users item");
        }

    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {

        Optional<CartItem> opt=cartItemRepository.findById(cartItemId);

        if(opt.isPresent()){
            return opt.get();
        }
        throw new CartItemException("Cart item not found with id -"+cartItemId);
    }
}

package com.Shah.shahEcommerce.service;


import com.Shah.shahEcommerce.exception.UserException;
import com.Shah.shahEcommerce.modal.User;

public interface UserService {
    User findUserById(Long userId) throws UserException;

    User findUserProfileByJwt(String jwt) throws UserException;
}

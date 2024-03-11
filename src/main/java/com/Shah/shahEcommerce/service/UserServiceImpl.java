package com.Shah.shahEcommerce.service;

import com.Shah.shahEcommerce.config.JwtProvider;
import com.Shah.shahEcommerce.exception.UserException;
import com.Shah.shahEcommerce.modal.User;
import com.Shah.shahEcommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserById(Long userId) throws UserException {

        Optional<User> user=userRepository.findById(userId);
        if(user.isPresent()){
            return user.get();
        }
        throw new UserException("User not found for this id - " +userId);
    }
    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {

        String email=jwtProvider.getEmailFromToken(jwt);

        User user=userRepository.findByEmail(email);

        if(user==null){
            throw new UserException("user not found with email- "+email);
        }
        return user;
    }
}

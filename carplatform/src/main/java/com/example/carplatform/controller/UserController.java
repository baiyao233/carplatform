package com.example.carplatform.controller;

import com.example.carplatform.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author baiyao
 * @date 2021/10/27 10:04
 * @description
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    private UserService userService;


}

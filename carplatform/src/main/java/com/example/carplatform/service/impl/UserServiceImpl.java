package com.example.carplatform.service.impl;

import com.example.carplatform.entity.SysUserEntity;
import com.example.carplatform.mapper.UserMapper;
import com.example.carplatform.service.UserService;
import com.example.carplatform.to.SuccessResultTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * @author baiyao
 * @date 2021/10/27 9:47
 * @description
 */
@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserMapper userMapper;

    @Override
    public ResponseEntity<?> addUser(SysUserEntity userEntity) {
        return null;
    }

}

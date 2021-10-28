package com.example.carplatform.service;

import com.example.carplatform.entity.SysUserEntity;
import org.springframework.http.ResponseEntity;

/**
 * @author baiyao
 * @date 2021/10/27 9:46
 * @description
 */
public interface UserService {

    /**
     * 新增用户
     *
     * @param userEntity 用户
     * @return ResponseEntity<?>
     */
    ResponseEntity<?> addUser(SysUserEntity userEntity);
}

package com.example.carplatform.vo;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;


/**
 * @author baiyao
 * @date 2021/10/27 9:56
 * @description
 */
public class UserInfoVO extends User {

    /**
     * 描述: 用户ID
     **/
    private Integer userId;

    private String token;

    public UserInfoVO(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
    }

    public UserInfoVO(String username, String password, Integer userId, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.userId = userId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "UserInfoVO{" +
                "userId=" + userId +
                '}';
    }
}

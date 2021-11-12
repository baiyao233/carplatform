package com.baiyao.identity.config;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;

import javax.annotation.Resource;

/**
 * @author baiyao
 * @date 2021/11/1 11:15
 * @description
 */
public class OAuthServerConfig extends AuthorizationServerConfigurerAdapter {

    @Resource
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public void configure(final AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
        oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess("isAuthenticated()");
    }

    @Override
    public void configure(final ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                // clientId, 可以类比为用户名
                .withClient("carplatform")
                // secret， 可以类比为密码
                .secret(passwordEncoder.encode("secret"))
                // 授权类型，这里选择授权码
                .authorizedGrantTypes("authorization_code")
                // 授权范围
                .scopes("user_info")
                // 自动认证
                .autoApprove(true)
                // 认证成功重定向URL
                .redirectUris("http://localhost:8081/identity/login","http://localhost:8082/carplatform/login")
                // 超时时间，10s
                .accessTokenValiditySeconds(10);
    }

}

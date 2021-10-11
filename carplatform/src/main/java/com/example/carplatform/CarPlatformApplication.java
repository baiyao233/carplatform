package com.example.carplatform;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author baiyao
 * @date 2021/10/10 18:05
 */
@SpringBootApplication
@MapperScan("com.example.carplatform.mapper")
public class CarPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(CarPlatformApplication.class, args);
    }

}

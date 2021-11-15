package com.example.carplatform.controller;

import com.example.carplatform.config.SystemConfig;
import com.example.carplatform.query.CarQuery;
import com.example.carplatform.service.CarService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


/**
 * @author baiyao
 * @date 2021/10/11 13:55
 * @description
 */
@RestController
@RequestMapping("/car")
public class CarController {
    @Resource
    private CarService carService;
    @Resource
    private SystemConfig systemConfig;

    @GetMapping("/")
    public ResponseEntity<?> findList(CarQuery query) {
        return carService.findList(query);
    }

    @GetMapping("/test")
    public ResponseEntity<?> testJenkins(){
        return ResponseEntity.ok(systemConfig);
    }
}

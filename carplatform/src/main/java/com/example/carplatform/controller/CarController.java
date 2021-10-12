package com.example.carplatform.controller;

import com.example.carplatform.query.CarQuery;
import com.example.carplatform.service.CarService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


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

    @GetMapping("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public ResponseEntity<?> findList(CarQuery query){
        return carService.findList(query);
    }
}

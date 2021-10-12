package com.example.carplatform.service;

import com.example.carplatform.query.CarQuery;
import org.springframework.http.ResponseEntity;

/**
 * @author baiyao
 * @date 2021/10/11 13:54
 * @description
 */
public interface CarService {
    /**
     * 查询车型列表
     *
     * @param query 查询条件
     * @return ResponseEntity
     */
    ResponseEntity<?> findList(CarQuery query);
}

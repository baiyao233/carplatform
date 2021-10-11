package com.example.carplatform.mapper;


import com.example.carplatform.entity.CarPriceEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author baiyao
 * @date 2021/10/11 13:52
 * @description CarPriceMapper
 */
@Mapper
public interface CarPriceMapper{
    List<CarPriceEntity> findAll();
}

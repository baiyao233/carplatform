package com.example.carplatform.service.impl;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.example.carplatform.entity.CarPriceEntity;
import com.example.carplatform.mapper.CarPriceMapper;
import com.example.carplatform.query.CarQuery;
import com.example.carplatform.service.CarService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import javax.annotation.Resource;
import java.util.List;


/**
 * @author baiyao
 * @date 2021/10/11 13:54
 * @description
 */
@Service
public class CarServiceImpl implements CarService {
    @Resource
    private CarPriceMapper carPriceMapper;

    @Override
    public ResponseEntity<?> findList(CarQuery query) {
        LambdaQueryWrapper<CarPriceEntity> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.like(null != query.getName(), CarPriceEntity::getCarName, query.getName());
        List<CarPriceEntity> carPriceEntityEntities = carPriceMapper.selectList(queryWrapper);
        return ResponseEntity.ok(carPriceEntityEntities);
    }
}

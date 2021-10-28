package com.example.carplatform.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.carplatform.entity.CarPriceEntity;
import org.apache.ibatis.annotations.Mapper;


/**
 * @author baiyao
 * @date 2021/10/11 13:52
 * @description CarPriceMapper
 */
@Mapper
public interface CarPriceMapper extends BaseMapper<CarPriceEntity> {
}

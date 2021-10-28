package com.example.carplatform.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.math.BigDecimal;

/**
 * @author baiyao
 * @date 2021/10/11 13:49
 * @description
 */
@Data
@TableName("car_price")
public class CarPriceEntity {
    @TableId
    private Integer id;
    /**
     * 车型
     */
    private String carName;
    /**
     * 指导价
     */
    private BigDecimal guidePrice;
    /**
     * 最低价(元）
     */
    private BigDecimal lowestPrice;
    /**
     * 优惠（元）
     */
    private BigDecimal discount;
    /**
     * 购置税（元）
     */
    private BigDecimal purchaseTax;
    /**
     * 上牌费（元）
     */
    private BigDecimal licenseFee;
}

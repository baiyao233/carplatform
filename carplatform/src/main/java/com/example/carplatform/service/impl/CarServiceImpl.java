package com.example.carplatform.service.impl;

import com.example.carplatform.config.ErrorCode;
import com.example.carplatform.entity.CarPriceEntity;
import com.example.carplatform.mapper.CarPriceMapper;
import com.example.carplatform.service.CarService;
import com.example.carplatform.to.ErrorResultTO;
import com.example.carplatform.to.SuccessResultTO;
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
    public ResponseEntity<?> test() {
        List<CarPriceEntity> carPriceEntityList = carPriceMapper.findAll();
        if (carPriceEntityList.size() == 0) {
            return ResponseEntity.status(ErrorCode.EMPTY_REQUEST_BODY.getResponseStatus())
                    .body(ErrorResultTO.createFailInstance(ErrorCode.EMPTY_REQUEST_BODY.getErrorCode(),
                            ErrorCode.EMPTY_REQUEST_BODY.getErrorInfo()));
        }
        return ResponseEntity.ok(SuccessResultTO.createSuccessInstance(carPriceEntityList));
    }
}

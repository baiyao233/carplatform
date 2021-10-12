package com.example.carplatform.query;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * @author baiyao
 * @date 2021/10/11 20:27
 * @description
 */
@Data
public class CarQuery extends PageQuery {
    @ApiModelProperty(value = "车型")
    String name;
}

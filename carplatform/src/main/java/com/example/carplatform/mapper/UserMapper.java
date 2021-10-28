package com.example.carplatform.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.carplatform.entity.SysPermissionEntity;
import com.example.carplatform.entity.SysUserEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author baiyao
 * @date 2021/10/27 10:16
 * @description
 */
@Mapper
public interface UserMapper extends BaseMapper<SysUserEntity> {
    /**
     * 查询用户权限
     *
     * @param userId 用户id
     * @return List<SysPermission>
     */
    List<SysPermissionEntity> getPermissionByUserId(@Param("userId") Integer userId);

    /**
     * 查询路径权限
     *
     * @param path 路径
     * @return List<SysPermissionEntity>
     */
    List<SysPermissionEntity> getPermissionByPath(@Param("path") String path);
}

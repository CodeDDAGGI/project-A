package com.projectA.miniproject.repository;

import com.projectA.miniproject.entity.Image;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ImgMapper {
    int save(Image image);

    Image findByNewsId(Long newsId);
}

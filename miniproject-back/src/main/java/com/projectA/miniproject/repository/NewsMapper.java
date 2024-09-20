package com.projectA.miniproject.repository;

import com.projectA.miniproject.entity.News;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NewsMapper {
    int save(News news);
    List<News> getListAll();
}

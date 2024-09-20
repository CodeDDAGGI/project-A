package com.projectA.miniproject.service;

import com.projectA.miniproject.dto.NewsDto;
import com.projectA.miniproject.entity.Image;
import com.projectA.miniproject.entity.News;
import com.projectA.miniproject.repository.ImgMapper;
import com.projectA.miniproject.repository.NewsMapper;
import com.projectA.miniproject.security.prinsipal.PrincipalUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsService {
    @Autowired
    private NewsMapper newsMapper;
    @Autowired
    private ImgMapper imgMapper;

    public NewsDto.RespDto newsWrite(NewsDto.ReqDto dto) {
        PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(principalUser.getId());
        News news = dto.toEntity();
        newsMapper.save(news);

        System.out.println(news.getNews_id());
        imgMapper.save(Image.builder()
                .news_id(news.getNews_id())
                .img_url(dto.getImg())
                .build());

        return NewsDto.RespDto.builder()
                .status(true)
                .news(news)
                .build();
    }

    public List<NewsDto.RespListDto> getNews() {
        List<News> list = newsMapper.getListAll();
        System.out.println(list);
        return newsMapper.getListAll().stream().map(News::toDto).collect(Collectors.toList());
    }

}

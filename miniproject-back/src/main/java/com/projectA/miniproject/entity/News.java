package com.projectA.miniproject.entity;

import com.projectA.miniproject.dto.NewsDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class News {
    private Long news_id;
    private Long user_id;
    private String title;
    private String content;

    Image img;

    public NewsDto.RespListDto toDto(){
        return NewsDto.RespListDto.builder()
                .news_id(news_id)
                .user_id(user_id)
                .title(title)
                .content(content)
                .img_id(img.getImage_id())
                .img_url(img.getImg_url())
                .build();
    }

}

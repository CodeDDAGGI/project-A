package com.projectA.miniproject.dto;

import com.projectA.miniproject.entity.News;
import lombok.Builder;
import lombok.Data;

import java.util.List;

public class NewsDto {

    @Data
    public static class ReqDto {
        private String title;
        private String content;
        private String img;

        public News toEntity() {
            return News.builder()
                    .title(title)
                    .content(content)
                    .build();
        }
    }
    @Data
    @Builder
    public static class RespDto{
        private boolean status;
        private News news;

    }
    @Data
    @Builder
    public static class RespListDto{
        private Long news_id;
        private Long user_id;
        private String title;
        private String content;
        private Long img_id;
        private String img_url;


    }
}

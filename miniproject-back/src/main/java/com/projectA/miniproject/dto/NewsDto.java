package com.projectA.miniproject.dto;

import lombok.Data;

public class NewsDto {

    @Data
    public static class ReqDto{
        private String title;
        private String content;
        private String img;
    }
}

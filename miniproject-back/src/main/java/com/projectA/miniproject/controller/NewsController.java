package com.projectA.miniproject.controller;

import com.projectA.miniproject.dto.NewsDto;
import com.projectA.miniproject.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/news")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @PostMapping
    public ResponseEntity<?> newsWrite(@RequestBody NewsDto.ReqDto dto) {
        return ResponseEntity.ok().body(newsService.newsWrite(dto));
    }

    @GetMapping
    public ResponseEntity<?> news() {
        return ResponseEntity.ok().body(newsService.getNews());
    }
}

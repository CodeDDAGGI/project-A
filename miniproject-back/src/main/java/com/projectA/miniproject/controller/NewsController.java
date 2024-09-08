package com.projectA.miniproject.controller;

import com.projectA.miniproject.dto.NewsDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/news")
public class NewsController {
    @PostMapping
    public ResponseEntity<?> news(@RequestBody NewsDto.ReqDto dto) {

        System.out.println("응답들어옴");
        System.out.println(dto);

        return ResponseEntity.ok().body("ok");
    }
}

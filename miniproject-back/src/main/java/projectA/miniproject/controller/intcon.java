package projectA.miniproject.controller;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/api/v1/")
public class intcon {

    @GetMapping("{id}")
    public ResponseEntity<?> getId (int id){

        return ResponseEntity.ok().body(id);
    }
}

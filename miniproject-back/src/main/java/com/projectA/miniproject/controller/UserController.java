package com.projectA.miniproject.controller;

import com.projectA.miniproject.dto.Request.ReqAddtoUser;
import com.projectA.miniproject.dto.Request.ReqEditUser;
import com.projectA.miniproject.entity.User;
import com.projectA.miniproject.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService  userService;

    //post 추가
    @PostMapping("/user")
    public ResponseEntity<?> addUser(@RequestBody ReqAddtoUser addtoUser){
        log.info("{}", addtoUser);
        return ResponseEntity.ok().body(userService.addUser(addtoUser));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> dldl(@PathVariable int userId ){
        log.info("겟매핑{}", userId);

        return ResponseEntity.ok().body(userId);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable int userId) {
        log.info("{}", userId);
        return ResponseEntity.ok().body(userService.deleteUser(userId));
    }

    @PutMapping("/{reqDto}")
    public ResponseEntity<?> modify (@RequestBody ReqEditUser reqDto){
        log.info("{}",reqDto);
        return ResponseEntity.ok().body(userService.editUser(reqDto));
    }






}



//
//
//
//
//
//
//











//    @GetMapping("/{id}")
//    public ResponseEntity<?> getId(@PathVariable int id){
//        try {
//            log.info("{}", id);
//            return ResponseEntity.ok().body(id);
//        } catch (Exception e) {
//            log.error("Error occurred", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred");
//        }
//    }


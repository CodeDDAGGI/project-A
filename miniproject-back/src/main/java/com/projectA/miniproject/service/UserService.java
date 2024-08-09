package com.projectA.miniproject.service;


import com.projectA.miniproject.dto.Request.ReqAddtoUser;

public interface UserService {

    // 컨트롤러에서 서비스 호출 서비스 메소드 실행 -> 맵퍼 메소드실행 -> xml가서 db까지 잡근
// 맵퍼 실행되면 리턴값받아서 -> 맵퍼에서 받은 리턴값을 서비스에서 받음 ->
    public int addUser(ReqAddtoUser addtoUser);
    public int delete()
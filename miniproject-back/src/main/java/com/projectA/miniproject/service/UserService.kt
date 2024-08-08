package com.projectA.miniproject.service

import org.springframework.beans.factory.annotation.Autowired


interface UserService {

    public int addUser (ReqAddUser reqAddUser);
}
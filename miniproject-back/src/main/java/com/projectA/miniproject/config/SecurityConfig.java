package com.projectA.miniproject.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;


@Configuration
@EnableWebSecurity
public class SecurityConfig {


    protected void config(HttpSecurity http)throws Exception {
        http.formLogin().disable();
        http.httpBasic().disable();
        http.authorizeRequests()
                .antMatchers("/api/v1/*" , "/test/*")
                .anyRequest()
                .permitAll();

    }
}

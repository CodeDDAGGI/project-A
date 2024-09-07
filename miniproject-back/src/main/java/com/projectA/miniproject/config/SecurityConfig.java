package com.projectA.miniproject.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    protected void configure(HttpSecurity http)throws Exception {
        http.formLogin().disable();
        http.httpBasic().disable();
        http.cors();
        http.csrf().disable();
        http.sessionManagement().disable();
        http.headers().frameOptions().disable();
        http.authorizeRequests()
                .antMatchers(
                        "/api/v1/*" ,
                                    "/test/*",
                        "/h2-console/**")
                .permitAll()
                .anyRequest()
                .authenticated();





    }
}



package com.projectA.miniproject.security.filter;

import com.projectA.miniproject.entity.User;
import com.projectA.miniproject.repository.UserMapper;
import com.projectA.miniproject.security.jwt.JwtProvider;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
public class JwtAccessTokenFilter extends GenericFilter {

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;

        String bearerAccessToken = request.getHeader("Authorization");

        if(bearerAccessToken == null || bearerAccessToken.isBlank()) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        String accessToken = jwtProvider.removeBearer(bearerAccessToken);

        Claims claims = null;

        try {
            claims = jwtProvider.getClaims(accessToken);
            Long userId = ((Integer) claims.get("userId")).longValue();
            User user = UserMapper.findById(userId);
            if(user == null) {
                throw new JwtException("해당 ID(" + userId + ")의 사용자 정보를 찾지 못했습니다.")
            }

        }
    }
}

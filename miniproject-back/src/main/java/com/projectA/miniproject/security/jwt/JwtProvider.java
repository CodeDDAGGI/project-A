package com.projectA.miniproject.security.jwt;

import com.projectA.miniproject.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtProvider {

    private final Key key;

    public JwtProvider(@Value("${jwt.secret}") String secret) {
        this.key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public Date getExpireDate() {
        return new Date(new Date().getTime() + (1000L * 60 * 60 * 24 * 30));
    }

    public String generateAccessToken(User user) {
        return Jwts.builder()
                .claim("userId", user.getUser_id())
                .expiration(getExpireDate())
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String removeBearer(String bearerToken) throws RuntimeException {
        if(bearerToken == null) {
            throw new RuntimeException();
        }
        int bearerLength = "bearer ".length();
        return  bearerToken.substring(bearerLength);
    }

    public Claims getClaims(String token) {

    }



}

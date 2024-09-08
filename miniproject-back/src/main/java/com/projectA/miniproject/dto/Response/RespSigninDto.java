package com.projectA.miniproject.dto.Response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RespSigninDto {
    private String accessToken;
    private String expireDate;
}

package com.projectA.miniproject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class like {
    private int like_id;
    private int new_id;
    private int like_status;
}

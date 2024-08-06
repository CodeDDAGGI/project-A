package projectA.miniproject.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class user_tb {

    private int user_id;
    private String username;
    private String password;
    private String user_email;

}

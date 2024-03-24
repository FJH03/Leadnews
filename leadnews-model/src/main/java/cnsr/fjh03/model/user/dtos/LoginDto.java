package cnsr.fjh03.model.user.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: LoginDto
 * @Date: 2024/3/10
 * @Time: 17:53
 * @Description:添加自定义描述
 */
@Data
public class LoginDto {
    /**
     * 手机号
     */
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED, name = "phone", description = "手机号")
    private String phone;

    /**
     * 密码
     */
    @Schema(requiredMode = Schema.RequiredMode.REQUIRED, name = "password", description = "密码")
    private String password;
}

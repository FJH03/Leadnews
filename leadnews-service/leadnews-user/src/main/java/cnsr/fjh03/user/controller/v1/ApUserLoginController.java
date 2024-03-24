package cnsr.fjh03.user.controller.v1;

import cnsr.fjh03.model.common.dtos.ResponseResult;
import cnsr.fjh03.model.user.dtos.LoginDto;
import cnsr.fjh03.user.service.ApUserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: ApUserLoginController
 * @Date: 2024/3/10
 * @Time: 17:37
 * @Description:添加自定义描述
 */
@RestController
@RequestMapping("api/v1/login")
@Tag(name = "app端用户登录接口", description = "app端用户登录接口")
public class ApUserLoginController {
    @Autowired
    private ApUserService apUserService;

    @PostMapping("login_auth")
    @Operation(summary = "用户登录")
    public ResponseResult login(@io.swagger.v3.oas.annotations.parameters.RequestBody(description = "登录DTO实体") @RequestBody LoginDto dto){
        return apUserService.login(dto);
    }
}

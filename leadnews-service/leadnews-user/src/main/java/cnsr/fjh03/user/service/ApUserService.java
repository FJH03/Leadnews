package cnsr.fjh03.user.service;

import cnsr.fjh03.model.common.dtos.ResponseResult;
import cnsr.fjh03.model.user.dtos.LoginDto;
import cnsr.fjh03.model.user.pojo.ApUser;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: ApUserService
 * @Date: 2024/3/10
 * @Time: 17:49
 * @Description:添加自定义描述
 */
public interface ApUserService extends IService<ApUser> {
    ResponseResult login(LoginDto dto);
}

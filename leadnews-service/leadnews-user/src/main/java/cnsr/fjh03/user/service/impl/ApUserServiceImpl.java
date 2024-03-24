package cnsr.fjh03.user.service.impl;

import cnsr.fjh03.model.common.dtos.ResponseResult;
import cnsr.fjh03.model.common.enums.AppHttpCodeEnum;
import cnsr.fjh03.model.user.dtos.LoginDto;
import cnsr.fjh03.model.user.pojo.ApUser;
import cnsr.fjh03.user.mapper.ApUserMapper;
import cnsr.fjh03.common.utils.JwtUtil;
import cnsr.fjh03.user.service.ApUserService;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: ApUserServiceImpl
 * @Date: 2024/3/10
 * @Time: 17:49
 * @Description:添加自定义描述
 */
@Service
public class ApUserServiceImpl extends ServiceImpl<ApUserMapper, ApUser> implements ApUserService {
    /**
     * app端登录功能
     * @param dto
     * @return
     */
    @Override
    public ResponseResult login(LoginDto dto) {
        //1.正常登录 用户名和密码
        if(StringUtils.isNotBlank(dto.getPhone()) && StringUtils.isNotBlank(dto.getPassword())){
            //1.1 根据手机号查询用户信息
            ApUser dbUser = getOne(Wrappers.<ApUser>lambdaQuery().eq(ApUser::getPhone, dto.getPhone()));
            if(dbUser == null){
                return ResponseResult.errorResult(AppHttpCodeEnum.DATA_NOT_EXIST,"用户信息不存在");
            }

            //1.2 比对密码
            String salt = dbUser.getSalt();
            String password = dto.getPassword();
            String pswd = DigestUtils.md5DigestAsHex((password + salt).getBytes());
            if(!pswd.equals(dbUser.getPassword())){
                return ResponseResult.errorResult(AppHttpCodeEnum.LOGIN_PASSWORD_ERROR);
            }

            //1.3 返回数据  jwt  user
            Map<String, Long> mp = new HashMap<>();
            mp.put("id", dbUser.getId().longValue());
            String token = JwtUtil.getToken(mp);
            Map<String,Object> map = new HashMap<>();
            map.put("token",token);
            dbUser.setSalt("");
            dbUser.setPassword("");
            map.put("user",dbUser);

            return ResponseResult.okResult(map);
        }else {
            //2.游客登录
            Map<String,Object> map = new HashMap<>();
            Map<String, Long> mp = new HashMap<>();
            mp.put("id", 0L);
            map.put("token",JwtUtil.getToken(mp));
            return ResponseResult.okResult(map);
        }
    }
}

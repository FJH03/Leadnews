package cnsr.fjh03.common.exception;

import cnsr.fjh03.model.common.enums.AppHttpCodeEnum;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: CustomException
 * @Date: 2024/3/10
 * @Time: 16:30
 * @Description:添加自定义描述
 */
public class CustomException extends RuntimeException {
    private AppHttpCodeEnum appHttpCodeEnum;

    public CustomException(AppHttpCodeEnum appHttpCodeEnum) {
        this.appHttpCodeEnum = appHttpCodeEnum;
    }

    public AppHttpCodeEnum getAppHttpCodeEnum() {
        return appHttpCodeEnum;
    }
}

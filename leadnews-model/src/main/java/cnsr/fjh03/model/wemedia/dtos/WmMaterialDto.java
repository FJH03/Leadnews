package cnsr.fjh03.model.wemedia.dtos;

import cnsr.fjh03.model.common.dtos.PageRequestDto;
import lombok.Data;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: WmMaterialDto
 * @Date: 2024/12/19
 * @Time: 15:56
 * @Description:添加自定义描述
 */
@Data
public class WmMaterialDto extends PageRequestDto {

    /**
     * 1 收藏
     * 0 未收藏
     */
    private Short isCollection;
}

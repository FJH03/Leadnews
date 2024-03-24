package cnsr.fjh03.model.common.dtos;


import lombok.Data;

import java.util.Date;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: ArticleHomeDto
 * @Date: 2024/3/12
 * @Time: 17:48
 * @Description:添加自定义描述
 */
@Data
public class ArticleHomeDto {
    Date maxBehotTime;

    Date minBehotTime;

    Integer size;

    String tag;
}

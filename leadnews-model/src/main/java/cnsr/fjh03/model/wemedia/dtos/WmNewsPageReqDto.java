package cnsr.fjh03.model.wemedia.dtos;

import cnsr.fjh03.model.common.dtos.PageRequestDto;
import lombok.Data;

import java.util.Date;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: WmNewsPageReqDto
 * @Date: 2024/12/19
 * @Time: 15:56
 * @Description:添加自定义描述
 */
@Data
public class WmNewsPageReqDto extends PageRequestDto {

    /**
     * 状态
     */
    private Short status;
    /**
     * 开始时间
     */
    private Date beginPubDate;
    /**
     * 结束时间
     */
    private Date endPubDate;
    /**
     * 所属频道ID
     */
    private Integer channelId;
    /**
     * 关键字
     */
    private String keyword;
}

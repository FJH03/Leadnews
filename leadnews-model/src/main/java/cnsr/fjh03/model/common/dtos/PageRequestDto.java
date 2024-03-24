package cnsr.fjh03.model.common.dtos;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: PageRequestDto
 * @Date: 2024/3/10
 * @Time: 16:40
 * @Description:添加自定义描述
 */
@Data
@Slf4j
public class PageRequestDto {
    protected Integer size;
    protected Integer page;

    public void checkParam() {
        if (this.page == null || this.page < 0) {
            setPage(1);
        }
        if (this.size == null || this.size < 0 || this.size > 100) {
            setSize(10);
        }
    }
}

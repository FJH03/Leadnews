package cnsr.fjh03.article.service;

import cnsr.fjh03.model.article.pojo.ApArticle;
import cnsr.fjh03.model.common.dtos.ArticleHomeDto;
import cnsr.fjh03.model.common.dtos.ResponseResult;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: ApArticleService
 * @Date: 2024/3/12
 * @Time: 18:09
 * @Description:添加自定义描述
 */
public interface ApArticleService extends IService<ApArticle> {
    /**
     * 根据参数加载文章列表
     * @param loadtype 1为加载更多  2为加载最新
     * @param dto
     * @return
     */
    ResponseResult load(Short loadtype, ArticleHomeDto dto);
}

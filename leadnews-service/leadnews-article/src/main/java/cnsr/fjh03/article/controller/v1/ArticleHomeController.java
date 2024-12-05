package cnsr.fjh03.article.controller.v1;

import cnsr.fjh03.article.service.ApArticleService;
import cnsr.fjh03.common.constants.ArticleConstants;
import cnsr.fjh03.model.common.dtos.ArticleHomeDto;
import cnsr.fjh03.model.common.dtos.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: ArticleHomeController
 * @Date: 2024/3/12
 * @Time: 17:45
 * @Description:添加自定义描述
 */
@RestController
@RequestMapping("api/v1/article")
public class ArticleHomeController {

    @Autowired
    private ApArticleService apArticleService;

    /**
     * 加载首页
     *
     * @param articleHomeDto
     * @return
     */
    @PostMapping("load")
    public ResponseResult load(@RequestBody ArticleHomeDto articleHomeDto) {
        return apArticleService.load(ArticleConstants.LOADTYPE_LOAD_MORE, articleHomeDto);
    }

    /**
     * 加载更多
     *
     * @param articleHomeDto
     * @return
     */
    @PostMapping("loadmore")
    public ResponseResult loadmore(@RequestBody ArticleHomeDto articleHomeDto) {
        return apArticleService.load(ArticleConstants.LOADTYPE_LOAD_MORE, articleHomeDto);
    }

    /**
     * 加载最新
     *
     * @param articleHomeDto
     * @return
     */
    @PostMapping("loadnew")
    public ResponseResult loadnew(@RequestBody ArticleHomeDto articleHomeDto) {
        return apArticleService.load(ArticleConstants.LOADTYPE_LOAD_NEW, articleHomeDto);
    }


}

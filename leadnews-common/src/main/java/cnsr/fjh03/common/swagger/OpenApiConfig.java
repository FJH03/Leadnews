package cnsr.fjh03.common.swagger;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: OpenApiConfig
 * @Date: 2024/3/10
 * @Time: 19:57
 * @Description:添加自定义描述
 */
@Configuration
public class OpenApiConfig {
    /**
     * SpringDoc 标题、描述、版本等信息配置
     *
     * @return openApi 配置信息
     */
    @Bean
    public OpenAPI springDocOpenAPI() {
        return new OpenAPI().info(new Info()
                .title("API文档")
                .description("接口文档说明")
                .version("v0.0.1-SNAPSHOT"));
    }
}

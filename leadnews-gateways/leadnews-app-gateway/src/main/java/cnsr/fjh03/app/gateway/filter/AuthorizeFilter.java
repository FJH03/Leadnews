package cnsr.fjh03.app.gateway.filter;

import cnsr.fjh03.app.gateway.utils.JwtUtil;
import com.alibaba.cloud.commons.lang.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: AuthorizeFilter
 * @Date: 2024/3/11
 * @Time: 19:30
 * @Description:添加自定义描述
 */
@Component
@Slf4j
public class AuthorizeFilter implements Ordered, GlobalFilter {

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        ServerHttpResponse response = exchange.getResponse();

        if (request.getURI().getPath().contains("/login")) {
            return chain.filter(exchange);
        }

        String token = request.getHeaders().getFirst("token");
        if (StringUtils.isBlank(token)) {
            response.setStatusCode(HttpStatus.UNAUTHORIZED);
            return response.setComplete();
        }

        log.info("解析token获得的数据为:{}", JwtUtil.getDataByKey(token, "id"));

        return chain.filter(exchange);
    }

    /**
     * 优先级配置
     *
     * @return
     */
    @Override
    public int getOrder() {
        return 0;
    }
}

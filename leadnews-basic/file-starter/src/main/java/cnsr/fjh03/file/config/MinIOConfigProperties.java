package cnsr.fjh03.file.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.io.Serializable;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: MinIOConfigProperties
 * @Date: 2024/12/5
 * @Time: 16:52
 * @Description:添加自定义描述
 */

@Data
@ConfigurationProperties(prefix = "minio")  // 文件上传 配置前缀file.oss
public class MinIOConfigProperties implements Serializable {

    private String accessKey;
    private String secretKey;
    private String bucket;
    private String endpoint;
    private String readPath;
}

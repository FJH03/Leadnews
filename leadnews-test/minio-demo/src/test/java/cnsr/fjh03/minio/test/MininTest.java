package cnsr.fjh03.minio.test;

import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import io.minio.errors.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: MininTest
 * @Date: 2024/12/19
 * @Time: 14:15
 * @Description:添加自定义描述
 */
public class MininTest {

    public static void main(String args[]) throws IOException, ServerException, InsufficientDataException, ErrorResponseException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
        FileInputStream fileInputStream = new FileInputStream("E:\\1.html");
        MinioClient minioClient = MinioClient.builder().credentials("minio", "minio123").endpoint("http://192.168.122.1:9000").build();

        PutObjectArgs putObjectArgs = PutObjectArgs.builder()
                .object("1.html")
                .contentType("text/html")
                .bucket("leadnews")
                .stream(fileInputStream, fileInputStream.available(), -1)
                .build();

        minioClient.putObject(putObjectArgs);
    }
}

package cnsr.fjh03.entity;

import lombok.Data;

import java.util.Date;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: Student
 * @Date: 2024/10/14
 * @Time: 15:54
 * @Description:添加自定义描述
 */
@Data
public class Student {
    private String name;//姓名
    private int age;//年龄
    private Date birthday;//生日
    private Float money;//钱包
}

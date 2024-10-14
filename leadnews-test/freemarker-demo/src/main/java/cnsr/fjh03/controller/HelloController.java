package cnsr.fjh03.controller;

import cnsr.fjh03.entity.Student;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @Created with Intellij IDEA Ultimate 2022.02.03 正式旗舰版
 * @Author: 2113042621-冯佳和
 * @ClassName: HelloController
 * @Date: 2024/10/14
 * @Time: 15:59
 * @Description:添加自定义描述
 */
@Controller
public class HelloController {
    @GetMapping("/basic")
    public String test(Model model) {


        //1.纯文本形式的参数
        model.addAttribute("name", "freemarker");
        //2.实体类相关的参数

        Student student = new Student();
        student.setName("小明");
        student.setAge(18);
        model.addAttribute("stu", student);

        return "01-basic";
    }
}

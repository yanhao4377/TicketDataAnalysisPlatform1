import com.xiaozu.service.FlightService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test {
    public static void main(String[] args) {
        ApplicationContext context=new ClassPathXmlApplicationContext("spring.xml");
        FlightService flightService = (FlightService) context.getBean("flightService");
//        flightService.selectBySaE("北京","西安");
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
        try {
            Date parse = simpleDateFormat.parse("2020-09-11");
            System.out.println(parse);
        } catch (ParseException e) {
            e.printStackTrace();
        }

    }

}

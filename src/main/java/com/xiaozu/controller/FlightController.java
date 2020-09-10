package com.xiaozu.controller;

import com.xiaozu.entity.Dog;
import com.xiaozu.entity.Flight;
import com.xiaozu.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@Controller
@RequestMapping
public class FlightController {
        @Autowired
        private FlightService flightService;

        @RequestMapping("hh")
        String test(HttpServletRequest request){
            request.setAttribute("test","东方航空");
            return "quota";
        }

        @RequestMapping("Route/searchRoute")
        @ResponseBody
        ArrayList<Flight> searchRoute(@RequestParam("start") String start, @RequestParam("end") String end){
            ArrayList<Flight> flights = flightService.selectBySaE(start, end);
            return  flights;
        }

        @RequestMapping("City/initSearch")
        @ResponseBody
        ArrayList<Flight> initSearch(@RequestParam("date") String date){
            ArrayList<Flight> flights = flightService.selectAll();
            return flights;
        }
        @RequestMapping("City/citySearch")
        @ResponseBody
        ArrayList<Flight> citySearch(@RequestParam("city") String city){
            ArrayList<Flight> flights = flightService.selectByCity(city);
            return flights;
        }
        @RequestMapping("airline/initSearch")
        @ResponseBody
        ArrayList<Flight> companyInitSearch(@RequestParam("date") String date){
            ArrayList<Flight> flights = flightService.selectAll();
            return flights;
        }
        @RequestMapping("flight/flightSearch")
        @ResponseBody
        Flight flightSearch(@RequestParam("date") String date, @RequestParam("flightNo") String flightNo){
            Flight flight = flightService.selectByNoAndDate(date, flightNo);
            return  flight;
        }
        @RequestMapping("flight/flightToday")
        @ResponseBody
        ArrayList<Flight> searchByDate(@RequestParam("date") String date){
            ArrayList<Flight> flights = flightService.selectByDate(date);
            return flights;
        }

}

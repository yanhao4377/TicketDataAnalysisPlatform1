package com.xiaozu.service;

import com.xiaozu.dao.FlightMapper;
import com.xiaozu.entity.Flight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.ArrayList;

@Service
@Transactional
public class FlightService {
    @Autowired
    private FlightMapper flightMapper;
    @Transactional()
    public void test(){
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-mm-dd");
        String date="2020-09-11";
        Flight f = flightMapper.test("CA1201",date);
        System.out.println(f);
    }
    @Transactional()
    public ArrayList<Flight> selectBySaE(String start,String end){
        ArrayList<Flight> flights = flightMapper.selectByStartAndEnd(start, end);
//        System.out.println(flights.get(0).getItinerarDate());
//        System.out.println(flights.get(0).getFromDateTime());
//        System.out.println(flights.get(0).getToDateTime());
        return flights;
    }
    @Transactional()
    public ArrayList<Flight> selectAll(){
        ArrayList<Flight> flights = flightMapper.selectAll();
        return flights;
    }
    @Transactional()
    public ArrayList<Flight> selectByCity(String city){
        ArrayList<Flight> flights = flightMapper.selectByCity(city);
        return flights;
    }
    @Transactional()
    public Flight selectByNoAndDate(String date,String flightNo){
        Flight flight = flightMapper.selectByNoAndDate(date,flightNo);
//        System.out.println(flights.get(0).getItinerarDate());
//        System.out.println(flights.get(0).getFromDateTime());
//        System.out.println(flights.get(0).getToDateTime());
        return flight;
    }
    @Transactional()
    public ArrayList<Flight> selectByDate(String date){
        ArrayList<Flight> flights = flightMapper.selectByDate(date);
        return flights;
    }
}

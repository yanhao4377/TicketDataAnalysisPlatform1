package com.xiaozu.dao;

import com.xiaozu.entity.Flight;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface FlightMapper {
    Flight test(@Param("FlightNumber") String FlightNumber, @Param("ItinerarDate") String ItinerarDate);
    ArrayList<Flight> selectByStartAndEnd(@Param("Start") String Start,@Param("End") String end);
    ArrayList<Flight> selectAll();
    ArrayList<Flight> selectByCity(@Param("city") String city);
    Flight selectByNoAndDate(@Param("date") String date,@Param("flightNo") String flightNo);
    ArrayList<Flight> selectByDate(@Param("date") String date);
}

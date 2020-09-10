package com.xiaozu.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class Flight {
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date ItinerarDate;
    private String Airline;
    private String FlightNumber;
    private String FromCity;
    private String ToCity;
    private Double Price;
    private Double PunctualityRate;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private Date FromDateTime;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private  Date ToDateTime;

    public Date getItinerarDate() {
        return ItinerarDate;
    }

    public void setItinerarDate(Date itinerarDate) {
        this.ItinerarDate = itinerarDate;
    }

    public String getAirline() {
        return Airline;
    }

    public void setAirline(String airline) {
        Airline = airline;
    }

    public String getFlightNumber() {
        return FlightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        FlightNumber = flightNumber;
    }

    public String getFromCity() {
        return FromCity;
    }

    public void setFromCity(String fromCity) {
        FromCity = fromCity;
    }

    public String getToCity() {
        return ToCity;
    }

    public void setToCity(String toCity) {
        ToCity = toCity;
    }

    public Double getPrice() {
        return Price;
    }

    public void setPrice(Double price) {
        Price = price;
    }

    public Double getPunctualityRate() {
        return PunctualityRate;
    }

    public void setPunctualityRate(Double punctualityRate) {
        PunctualityRate = punctualityRate;
    }

    public Date getFromDateTime() {
        return FromDateTime;
    }

    public void setFromDateTime(Date fromDateTime) {
        FromDateTime = fromDateTime;
    }

    public Date getToDateTime() {
        return ToDateTime;
    }

    public void setToDateTime(Date toDateTime) {
        ToDateTime = toDateTime;
    }

    public Flight(Date date, String airline, String flightNumber, String fromCity, String toCity, Double price, Double punctualityRate, Date fromDateTime, Date toDateTime) {
        this.ItinerarDate = date;
        Airline = airline;
        FlightNumber = flightNumber;
        FromCity = fromCity;
        ToCity = toCity;
        Price = price;
        PunctualityRate = punctualityRate;
        FromDateTime = fromDateTime;
        ToDateTime = toDateTime;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "ItinerarDate=" + ItinerarDate +
                ", Airline='" + Airline + '\'' +
                ", FlightNumber='" + FlightNumber + '\'' +
                ", FromCity='" + FromCity + '\'' +
                ", ToCity='" + ToCity + '\'' +
                ", Price=" + Price +
                ", PunctualityRate=" + PunctualityRate +
                ", FromDateTime=" + FromDateTime +
                ", ToDateTime=" + ToDateTime +
                '}';
    }
}

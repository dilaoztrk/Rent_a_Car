package com.rentacar.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // PLAKA
    @Column(unique = true, nullable = false)
    private String plateNo;

    // MARKA & MODEL
    private String brand;
    private String model;

    // ARAÇ BİLGİLERİ
    private Integer year;
    private Double dailyPrice;

    private String fuelType;
    private String transmission;
    private String category;

    private String status;

    @Column(length = 2000)
    private String description;

    // FOTOĞRAF YOLU
    private String imageUrl;

    // ÖZELLİKLER
    private Boolean hasAirConditioning;
    private Boolean hasChildSeat;
    private Boolean hasAppleCarplay;
    private Boolean hasRearViewCamera;
    private Boolean hasBluetooth;
    private Boolean hasNavigation;

    private Integer airbagCount;

    // ŞİRKET BAĞLANTISI
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
}
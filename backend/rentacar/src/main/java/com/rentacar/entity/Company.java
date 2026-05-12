package com.rentacar.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Company name cannot be empty")
    @Column(nullable = false, unique = true)
    private String companyName;

    @NotBlank(message = "Tax number cannot be empty")
    @Column(nullable = false, unique = true)
    private String taxNo;

    @NotBlank(message = "City cannot be empty")
    private String city;

    @NotBlank(message = "District cannot be empty")
    private String district;

    @NotBlank(message = "Neighborhood cannot be empty")
    private String neighborhood;

    @NotBlank(message = "Street cannot be empty")
    private String street;

    @NotBlank(message = "Building number cannot be empty")
    private String buildingNo;

    @NotBlank(message = "Phone cannot be empty")
    private String companyPhone;

    @Email(message = "Invalid email format")
    @Column(unique = true)
    private String companyEmail;
}
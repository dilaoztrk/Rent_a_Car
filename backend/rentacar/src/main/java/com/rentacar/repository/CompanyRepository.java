package com.rentacar.repository;

import com.rentacar.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    boolean existsByCompanyName(String companyName);

    boolean existsByTaxNo(String taxNo);

    Optional<Company> findByTaxNo(String taxNo);
}
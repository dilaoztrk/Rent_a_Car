package com.rentacar.repository;

import com.rentacar.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ManagerRepository
        extends JpaRepository<Manager, Long> {

    Optional<Manager> findByUserId(Long userId);
}

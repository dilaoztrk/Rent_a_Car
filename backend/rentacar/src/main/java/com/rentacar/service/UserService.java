package com.rentacar.service;

import com.rentacar.entity.User;
import com.rentacar.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // 🔹 TÜM KULLANICILAR
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 🔹 ID İLE KULLANICI
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));
    }

    // 🔹 SİL
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // ✅ USER REGISTER
    public User register(User user) {

        // email kontrol
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Bu email zaten kayıtlı");
        }

        // TC kontrol
        if (user.getNationalId() == null || user.getNationalId().length() != 11) {
            throw new RuntimeException("TC Kimlik 11 haneli olmalı");
        }

        user.setRole("USER");
        user.setIsActive(true);
        user.setRegistrationDate(LocalDate.now());

        // 🔐 ŞİFRE HASH
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    // ✅ ADMIN REGISTER
    public User registerAdmin(User user) {

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Bu email zaten kayıtlı");
        }

        user.setRole("ADMIN");
        user.setIsActive(true);
        user.setRegistrationDate(LocalDate.now());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    // ✅ LOGIN
    public User login(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Şifre yanlış");
        }

        // 🔐 ŞİFREYİ GİZLE
        user.setPassword(null);

        return user;
    }
}


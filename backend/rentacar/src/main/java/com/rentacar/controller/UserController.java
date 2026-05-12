package com.rentacar.controller;

import com.rentacar.entity.User;
import com.rentacar.security.JwtUtil;
import com.rentacar.service.UserService;
import com.rentacar.entity.Company;
import com.rentacar.entity.Manager;
import com.rentacar.repository.ManagerRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final ManagerRepository managerRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @PostMapping("/register")
    public User register(@RequestBody Map<String, String> body) {
        User user = new User();
        user.setFullName(body.get("fullName"));
        user.setNationalId(body.get("nationalId"));
        user.setEmail(body.get("email"));
        user.setPhone(body.get("phone"));
        user.setPassword(body.get("password"));
        return userService.register(user);
    }


 
  @PostMapping("/register-admin")
public User registerAdmin(@RequestBody Map<String, String> body) {

    User user = new User();
    user.setFullName(body.get("fullName"));
    user.setNationalId(body.get("nationalId"));
    user.setEmail(body.get("email"));
    user.setPhone(body.get("phone"));
    user.setPassword(body.get("password"));

    Company company = new Company();

    company.setCompanyName(body.get("companyName"));
    company.setTaxNo(body.get("taxNumber"));

    company.setCity(body.get("city"));
    company.setDistrict(body.get("district"));
    company.setNeighborhood(body.get("neighborhood"));
    company.setStreet(body.get("street"));
    company.setBuildingNo(body.get("buildingNo"));

    company.setCompanyEmail(body.get("companyEmail"));
    company.setCompanyPhone(body.get("companyPhone"));

    return userService.registerAdmin(user, company);
}

   @PostMapping("/login")
public Map<String, Object> login(
        @RequestBody Map<String, String> body
) {

    User user =
        userService.login(
            body.get("email"),
            body.get("password")
        );

    String token =
        jwtUtil.generateToken(
            user.getEmail(),
            user.getRole()
        );

    Long companyId = null;

    if (user.getRole().equals("ADMIN")) {

        Manager manager =
            managerRepository.findByUserId(user.getId())
                .orElse(null);

        if (manager != null) {
            companyId =
                manager.getCompany().getId();
        }
    }

    return Map.of(
        "token", token,
        "user", user,
        "companyId", companyId
    );
}

}
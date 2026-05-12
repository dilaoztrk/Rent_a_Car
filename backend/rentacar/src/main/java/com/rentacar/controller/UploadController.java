package com.rentacar.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin
public class UploadController {

    private final String UPLOAD_DIR = "uploads/";

    @PostMapping
    public ResponseEntity<String> uploadImage(
            @RequestParam("file") MultipartFile file
    ) {

        try {

            // uploads klasörü yoksa oluştur
            File uploadDir = new File(UPLOAD_DIR);

            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            // benzersiz dosya adı
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

            // kaydetme yolu
            String filePath = UPLOAD_DIR + fileName;

            // dosyayı kaydet
            file.transferTo(new File(filePath));

            // frontend'e dönecek url
            String imageUrl = "http://localhost:8080/uploads/" + fileName;

            return ResponseEntity.ok(imageUrl);

        } catch (IOException e) {

            return ResponseEntity.badRequest().body("Dosya yüklenemedi.");
        }
    }
}
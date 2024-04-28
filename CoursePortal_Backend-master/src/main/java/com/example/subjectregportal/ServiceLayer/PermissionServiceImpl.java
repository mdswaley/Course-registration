package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.Permission;
import com.example.subjectregportal.Entity.Profile;
import com.example.subjectregportal.Repository.PermitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PermissionServiceImpl implements PermissionService{

    @Autowired
    private PermitRepo permitRepo;
//    @Override
//    public Permission savePermission(Permission permission) {
//        return permitRepo.save(permission);
//    }

    @Override
    public Iterable<Permission> savePermissions(List<String> emails) {
        List<Permission> savedPermissions = new ArrayList<>();
        for (String email : emails) {
            Permission permission = new Permission();
            permission.setEmail(email);
            savedPermissions.add(permitRepo.save(permission));
        }
        return savedPermissions;
    }

    @Override
    public List<Permission> getPermissions() {
        return permitRepo.findAll();
    }

    @Override
    public Permission getPermitByEmail(String email) {
        return permitRepo.findByEmail(email);
    }
}

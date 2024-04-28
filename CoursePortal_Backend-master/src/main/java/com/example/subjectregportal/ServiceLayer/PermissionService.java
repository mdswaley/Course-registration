package com.example.subjectregportal.ServiceLayer;

import com.example.subjectregportal.Entity.Permission;

import java.util.List;

public interface PermissionService {
    Iterable<Permission> savePermissions(List<String> email);

    List<Permission> getPermissions();

    Permission getPermitByEmail(String email);
}

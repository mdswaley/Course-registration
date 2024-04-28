package com.example.subjectregportal.ControllerLayer;

import com.example.subjectregportal.Entity.Permission;
import com.example.subjectregportal.Entity.Profile;
import com.example.subjectregportal.ServiceLayer.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PermissionCont {
    @Autowired
    private PermissionService permissionService;

//    @PostMapping("/permissions")
//    public ResponseEntity<Permission> savePermission(@RequestBody Permission permission) {
//        Permission savedPermission = permissionService.savePermission(permission);
//        return ResponseEntity.ok(savedPermission);
//    }

    @PostMapping("/permissions")
    public ResponseEntity<Iterable<Permission>> savePermissions(@RequestBody List<String> emails) {
        return ResponseEntity.ok(permissionService.savePermissions(emails));
    }

//    @GetMapping("/getPermissions")
//    public ResponseEntity<Iterable<Permission>> getPermissions() {
//        Iterable<Permission> permissions = permissionService.getPermissions();
//        return ResponseEntity.ok(permissions);
//    }

    @GetMapping("/getPermissions")
    public List<Permission> getAllPermission()
    {
        return permissionService.getPermissions();
    }

    @GetMapping("/permissions/{email}")
    public ResponseEntity<Permission> getPermissionByEmail(@PathVariable String email) {
        Permission permission = permissionService.getPermitByEmail(email);
        if (permission == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(permission);
    }

}

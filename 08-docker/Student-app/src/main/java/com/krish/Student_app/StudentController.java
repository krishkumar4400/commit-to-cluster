package com.krish.Student_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    StudentRepo studentRepo;

    @RequestMapping("/get-students")
    public List<Student> getAllStudent() {
        return studentRepo.findAll();
    }

    @RequestMapping("/add-student")
    public void addStudent() {
        studentRepo.save(new Student("test1", 11));
        studentRepo.save(new Student("test2", 12));
        studentRepo.save(new Student("test3", 14));
    }
}

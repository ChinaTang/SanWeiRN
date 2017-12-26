package com.sanwei.db;

import org.litepal.crud.DataSupport;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by tangdi on 12/26/17.
 */

public class StudentDB extends DataSupport {
    private int id;
    private String name;
    private String teacher;
    private ArrayList<Achievement> achievements;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public List<Achievement> getAchievements() {
        return DataSupport.where("studentDB_id = ?", String.valueOf(id)).find(Achievement.class);
    }

    public void setAchievements(ArrayList<Achievement> achievements) {
        this.achievements = achievements;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}

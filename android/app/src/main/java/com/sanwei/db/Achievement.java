package com.sanwei.db;

import org.litepal.crud.DataSupport;

import java.util.Date;

/**
 * Created by tangdi on 12/26/17.
 */

public  class Achievement extends DataSupport{
    private int id;
    private String subject;
    private String achievement;
    private Date date;

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getAchievement() {
        return achievement;
    }

    public void setAchievement(String achievement) {
        this.achievement = achievement;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}

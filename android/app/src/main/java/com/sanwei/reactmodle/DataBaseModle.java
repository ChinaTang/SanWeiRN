package com.sanwei.reactmodle;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.sanwei.db.Achievement;
import com.sanwei.db.StudentDB;

import org.litepal.crud.DataSupport;

import java.util.Date;
import java.util.List;

/**
 * Created by tangdi on 12/26/17.
 */

public class DataBaseModle extends ReactContextBaseJavaModule {

    private ReactApplicationContext reactApplicationContext;

    public DataBaseModle(ReactApplicationContext reactContext) {
        super(reactContext);
        reactApplicationContext = reactContext;
    }

    @Override
    public String getName() {
        return "DataBaseModle";
    }

    @ReactMethod
    public void addStudent(String student){
        StudentDB studentDB = new StudentDB();
        studentDB.setName(student);
        studentDB.save();
    }

    @ReactMethod
    public void addAchievement(String student, String subject, String achievemnet){
        Achievement achievement = new Achievement();
        achievement.setAchievement(achievemnet);
        achievement.setSubject(subject);
        achievement.setDate(new Date());
        List<StudentDB> dbList = DataSupport.where("name = ?", student).find(StudentDB.class);
        dbList.get(0).getAchievements().add(achievement);
        dbList.get(0).update(dbList.get(0).getId());
    }

    @ReactMethod
    public void getStudent(String stundet){
        List<StudentDB> studentDBs;
        if(stundet.equals("")){
            studentDBs = DataSupport.findAll(StudentDB.class);
        }else{
            studentDBs = DataSupport.where("name = ?", stundet).find(StudentDB.class);
        }
        WritableArray writableArray = new WritableNativeArray();
        for(StudentDB item : studentDBs){
            WritableMap writableMap = new WritableNativeMap();
            writableMap.putString("name", item.getName());
            writableArray.pushMap(writableMap);
        }

        reactApplicationContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("StudentInfo", writableArray);
    }

    @ReactMethod
    public void getAchievement(String name, String subject){
        List<StudentDB> studentDBs = DataSupport.where("name = ?", name).find(StudentDB.class);
        List<Achievement> achievements = studentDBs.get(0).getAchievements();
        WritableArray writableArray = new WritableNativeArray();
        for (Achievement item : achievements){
            WritableMap writableMap = new WritableNativeMap();
            writableMap.putString("subjec", item.getSubject());
            writableMap.putString("date", item.getDate().toString());
            writableMap.putString("achievement", item.getAchievement());
            writableArray.pushMap(writableMap);
        }

        reactApplicationContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("AchievementInfo", writableArray);
    }

    @ReactMethod
    public void deleteStudent(String student){
        DataSupport.deleteAll(StudentDB.class, "name = ?", student);
    }
}

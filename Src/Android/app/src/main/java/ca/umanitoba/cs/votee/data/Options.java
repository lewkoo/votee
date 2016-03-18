package ca.umanitoba.cs.votee.data;

/**
 * Created by Yuriy on 3/16/2016.
 */

import org.json.JSONObject;

import java.io.Serializable;
import org.json.JSONObject;
import java.io.Serializable;

public class Options  implements Serializable {
    private String opt0;
    private String opt1;
    private String opt2;
    private String opt3;

    public Options(){

    }

    //constructor when creating Quiz
    public Options(String opt0, String opt1, String opt2, String opt3){
        this.opt0 = opt0;
        this.opt1 = opt1;
        this.opt2 = opt2;
        this.opt3 = opt3;
    }

    public String getOption1() {
        return opt0;
    }

    public String getOption2() {
        return opt1;
    }

    public String getOption3() {
        return opt2;
    }

    public String getOption4() {
        return opt3;
    }
}

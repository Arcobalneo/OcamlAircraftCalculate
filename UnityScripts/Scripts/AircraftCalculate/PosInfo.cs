using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PosInfo 
{
    public string Describe;
    public float[] Content;
    public AngleInfo Angle;
    
    public PosInfo(string _describe, AngleInfo _angle, GameObject _aircraft)
    {
        Describe = _describe;
        Angle = _angle;
        Content = new float[3] {
            _aircraft.transform.position.x, 
            _aircraft.transform.position.y, 
            _aircraft.transform.position.z };
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AngleInfo 
{
    public string Describe;
    public float Alpha; // Ó­½Ç
    public float Beta; // ²à»¬½Ç
    public float Theta; // ¸©Ñö½Çyaw
    public float Phi; // ¹ö×ª½Çroll
    public float Psi; // Æ«º½½Çpitch

    public AngleInfo(string _des, float _alpha, float _beta, float _theta, float _phi, float _psi)
    {
        Describe = _des;
        Alpha = _alpha;
        Beta = _beta;
        Theta = _theta;
        Phi = _phi;
        Psi = _psi;
    }
}

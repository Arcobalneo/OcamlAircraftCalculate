using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AngleInfo 
{
    public string Describe;
    public float Alpha; // ӭ��
    public float Beta; // �໬��
    public float Theta; // ������yaw
    public float Phi; // ��ת��roll
    public float Psi; // ƫ����pitch

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

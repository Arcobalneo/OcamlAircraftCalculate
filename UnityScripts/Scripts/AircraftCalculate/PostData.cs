using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PostData 
{
    public string Name;
    //public Determinant Determinant;
    public PosInfo PosInfo;

    public PostData(string _name, PosInfo _posInfo)
    {
        Name = _name;
        //Determinant = _deter;
        PosInfo = _posInfo;
    }
}

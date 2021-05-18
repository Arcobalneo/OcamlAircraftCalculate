using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Newtonsoft.Json;

public class Determinant 
{
    public string Describe;
    public int[,] Content;

    public Determinant(string _describe, int[,] _content)
    {
        Describe = _describe;
        Content = _content;
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AxisSelectPanel : MonoBehaviour
{
    public Toggle BodyAxisSelect;
    public Toggle EarthAxisSelect;
    public Toggle AirAxisSelect;

    public GameObject BodyAxis;
    public GameObject EarthAxis;
    public GameObject AirAxis;

    public void AxisControl(GameObject _axis)
    {
        if (_axis.gameObject.activeInHierarchy)
        {
            _axis.SetActive(false);
        }
        else _axis.SetActive(true);
    }
}

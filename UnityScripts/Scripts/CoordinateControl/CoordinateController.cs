using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CoordinateController : MonoBehaviour
{
    public GameObject X_Axis;
    public GameObject Y_Axis;
    public GameObject Z_Axis;

    // Start is called before the first frame update
    void Start()
    {
        X_Axis.GetComponent<Renderer>().material.color = Color.red;
        Y_Axis.GetComponent<Renderer>().material.color = Color.green;
        Z_Axis.GetComponent<Renderer>().material.color = Color.blue;
    }

    // Update is called once per frame
    //float x;
    //void Update()
    //{

    //    x += Time.deltaTime * 10;
    //    transform.rotation = Quaternion.Euler(x, 0, 0);

    //}

    public void RotateByAircraft(Vector3 _ruler)
    {
        transform.rotation = Quaternion.Euler(_ruler.x, _ruler.y, _ruler.z);
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AircraftController : MonoBehaviour
{
    public float maxSpeed;            
    public float decAltSpeed;        
    public float incAltSpeed;        
    public float curSpeed;            
    public float applySpeed;        
    public float airBrakeForce;      

    private Rigidbody rbody;

    public GameObject BodyCoordinate;
    public GameObject AirCoordinate;

    public Vector3 BodyAxis_X;
    public float alpha_angle;
    public float beta_angle;

    void Start()
    {
        rbody = GetComponent<Rigidbody>();
        BodyAxis_X = new Vector3(0, 0, 1); // »úÌåÖáX
    }

    void FixedUpdate()
    {
        move();
        rotate();
    }

    private void Update()
    {
        UpdateCoordinate();
    }
    private void move()
    {

        curSpeed = rbody.velocity.z;

        if (curSpeed >= maxSpeed)
        {

            applySpeed = curSpeed;
        }


        if (Input.GetKey(KeyCode.W))
        {

            rbody.AddRelativeForce(Vector3.forward * applySpeed);
            if (curSpeed >= incAltSpeed)
            {
                rbody.AddRelativeForce(Vector3.up * 3);
            }

        }
        if (Input.GetKey(KeyCode.S))
        {

            rbody.AddRelativeForce(Vector3.back * airBrakeForce);
            if (curSpeed <= decAltSpeed)
            {
                rbody.AddRelativeForce(Vector3.down * 3);
            }
        }
    }

    private void rotate()
    {
        if (Input.GetKey(KeyCode.A))
        {
            transform.Rotate(-Vector3.up * 15 * Time.deltaTime);

        }
        if (Input.GetKey(KeyCode.D))
        {
            transform.Rotate(Vector3.up * 15 * Time.deltaTime);

        }
        if (Input.GetKey(KeyCode.Q))
        {
            transform.Rotate(Vector3.left * 15 * Time.deltaTime);

        }
        if (Input.GetKey(KeyCode.E))
        {
            transform.Rotate(-Vector3.left * 15 * Time.deltaTime);

        }
        if (Input.GetKey(KeyCode.Z))
        {
            transform.Rotate(Vector3.forward * 15 * Time.deltaTime);

        }
        if (Input.GetKey(KeyCode.C))
        {
            transform.Rotate(-Vector3.forward * 15 * Time.deltaTime);

        }
    }    

    public void UpdateUI()
    {
        float[] pos = { transform.position.x, transform.position.y, transform.position.z };
        UIManager.Instance.VelocityUpdate(rbody.velocity);
        UIManager.Instance.EarthPosUpdate(pos);
    }

    public void UpdateCoordinate()
    {
        Vector3 v = rbody.velocity;
        alpha_angle = Vector3.Angle(BodyAxis_X, new Vector3(0, v.y, v.z));
        beta_angle = Vector3.Angle(BodyAxis_X, new Vector3(v.x, 0, v.z));
        //Debug.Log("alpha :" + alpha_angle + " beta : " + beta_angle);

        BodyCoordinate.GetComponent<CoordinateController>().RotateByAircraft(transform.rotation.eulerAngles);
        float x_angle = Vector3.Angle(new Vector3(1, 0, 0), v);
        float y_angle = Vector3.Angle(new Vector3(0, 1, 0), v);
        float z_angle = Vector3.Angle(new Vector3(0, 0, 1), v);
        AirCoordinate.GetComponent<CoordinateController>().RotateByAircraft(new Vector3(x_angle, y_angle, z_angle));
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraControl : MonoBehaviour
{
    private Transform player;

    private Vector3 direction;
    void Awake()
    {
        player = GameObject.FindGameObjectWithTag("Player").transform;

        //����player��camera�ķ��������ľ���
        direction = player.position - transform.position;
    }
    void Update()
    {
        transform.position = player.position - direction;
    }
}

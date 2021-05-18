using System.Net.Http;
using System.Text;
using UnityEngine;
using Newtonsoft.Json;

public class HttpManager : MonoBehaviour
{
    public static HttpManager Instance;
    private string url = "http://localhost:8086";

    public delegate string GetPostDataHandler();
    public event GetPostDataHandler GetPostDataEvent;
    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            if (Instance != null)
            {
                Destroy(gameObject);
            }
            DontDestroyOnLoad(gameObject);
        }
    }

    public async void SendDataToOwl()
    {
        string json = PostContentData();
        var data = new StringContent(json, Encoding.UTF8, "application/json");
        var client = new HttpClient();
        var response = await client.PostAsync(url, data);
        string result = response.Content.ReadAsStringAsync().Result; 
        OwlResponse result_content = JsonConvert.DeserializeObject<OwlResponse>(result);   
        UIManager.Instance.AirPosUpdate(result_content.PosInfoRes_B2A);
        UIManager.Instance.BodyPosUpdate(result_content.PosInfoRes_E2B);
        Debug.Log("PosInfoRes_B2E : " + result_content.PosInfoRes_B2E[0] + " " + result_content.PosInfoRes_B2E[1] + " " + result_content.PosInfoRes_B2E[2]);
    }

    public string PostContentData()
    {
        GameObject aircraft = GameObject.FindGameObjectWithTag("Player");
        Vector3 eulerAngle = aircraft.transform.rotation.eulerAngles; // Å·À­½Ç¡ª¡ªz£º¹ö×ª½Ç x£º¸©Ñö½Ç y£ºÆ«º½½Ç

        AngleInfo angleInfo = new AngleInfo("angle pos info", 
                                            aircraft.GetComponent<AircraftController>().alpha_angle,
                                            aircraft.GetComponent<AircraftController>().beta_angle,
                                            eulerAngle.x,
                                            eulerAngle.z,
                                            eulerAngle.y
                                            );

        PosInfo posInfo = new PosInfo("here is pos info", angleInfo, aircraft);
        PostData postData = new PostData("DataFromUnity",posInfo);
        return JsonConvert.SerializeObject(postData);
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class UIManager : MonoBehaviour
{
    public static UIManager Instance;

    public GameObject BodyPosPanel;
    public GameObject AirPosPanel;
    public GameObject EarthPosPanel;
    public GameObject AxisSelectPanel;
    public GameObject PauseMenu;
    public GameObject VelocityPanel;
    

    private bool isGamePaused = false;

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

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.M))
        {
            if (isGamePaused)
            {
                Resume();
            }
            else
            {
                Pause();
            }
        }

    }

    public void PostSend()
    {
        HttpManager.Instance.SendDataToOwl();
    }

    #region DataTextControlMethod
    

    private void PosPanelUpdate(GameObject _objPanel, float[] _pos)
    {
        if (_objPanel.activeSelf)
        {
            _objPanel.GetComponent<PanelContent>().Num_x.text = _pos[0].ToString("0.00");
            _objPanel.GetComponent<PanelContent>().Num_y.text = _pos[1].ToString("0.00");
            _objPanel.GetComponent<PanelContent>().Num_z.text = _pos[2].ToString("0.00");
        }
        else
        {
            Debug.LogWarning("panel gameobject is not active!");
        }  
    }

    private void PosPanelReset(GameObject _objPanel)
    {
        if (_objPanel.activeSelf)
        {
            _objPanel.GetComponent<PanelContent>().Num_x.text = "---";
            _objPanel.GetComponent<PanelContent>().Num_y.text = "---";
            _objPanel.GetComponent<PanelContent>().Num_z.text = "---";
        }
        else
        {
            Debug.LogWarning("panel gameobject is not active!");
        }
    }

    public void BodyPosUpdate(float[] _pos)
    {
        PosPanelUpdate(BodyPosPanel, _pos);
    }

    public void BodyPosReset()
    {
        PosPanelReset(BodyPosPanel);
    }

    public void AirPosUpdate(float[] _pos)
    {
        PosPanelUpdate(AirPosPanel, _pos);
    }

    public void VelocityUpdate(Vector3 _velocity)
    {
        PosPanelUpdate(VelocityPanel, new float[] {_velocity.x, _velocity.y, _velocity.z });
    }

    public void AirPosReset()
    {
        PosPanelReset(AirPosPanel);
    }

    public void EarthPosUpdate(float[] _pos)
    {
        PosPanelUpdate(EarthPosPanel, _pos);
    }

    public void EarthPosReset()
    {
        PosPanelReset(EarthPosPanel);
    }

    #endregion

    #region PauseMenu
    public void Pause()
    {
        AxisSelectPanel.SetActive(false);
        GameObject.FindGameObjectWithTag("Player").GetComponent<AircraftController>().UpdateUI();
        AirPosReset();
        BodyPosReset();
        PostSend();
        PauseMenu.SetActive(true);
        Time.timeScale = 0.0f;
        isGamePaused = true;
    }

    public void Resume()
    {
        AxisSelectPanel.SetActive(true);
        PauseMenu.SetActive(false);
        Time.timeScale = 1.0f;
        isGamePaused = false;
    }

    public void QuitGame()
    {
        Application.Quit();
    }
    #endregion
}

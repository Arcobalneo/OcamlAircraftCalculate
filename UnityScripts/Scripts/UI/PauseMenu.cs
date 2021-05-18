using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PauseMenu : MonoBehaviour
{
    public static bool isGamePaused = false;

    private void Update()
    {
        
    }

    public void Pause()
    {
        this.gameObject.SetActive(true);
        Time.timeScale = 0.0f;
        isGamePaused = true;
    }

    public void Resume()
    {
        this.gameObject.SetActive(false);
        Time.timeScale = 1.0f;
        isGamePaused = false;
    }

    public void QuitGame()
    {
        Application.Quit();
    }
}

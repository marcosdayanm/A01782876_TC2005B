using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FrameRate : MonoBehaviour
{
    public int targetFrameRate;

    void Awake()
    {
        // Hace que el objeto no se destruya al cargar una nueva escena
        DontDestroyOnLoad(gameObject);

        // Establece el límite del framerate
        Application.targetFrameRate = targetFrameRate;
    }


    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}

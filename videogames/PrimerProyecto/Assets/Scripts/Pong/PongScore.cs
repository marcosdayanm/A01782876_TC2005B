using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongScore : MonoBehaviour
{


    GameController controller;
    public int side;

    // Start is called before the first frame update
    void Start()
    {
        controller = GameObject.FindWithTag("GameController").GetComponent<GameController>();
    }

// Evento que se activa cuando cierto elemento sale fuera del collider
    void OnTriggerExit2D(Collider2D other)
    {
        controller.ChangeScore(side);
    }

}

// Script to move the paddles in the game
// Marcos Dayan Mann
// 19-feb-2024

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PadMovement : MonoBehaviour
{

    public float speed;
    public float limit;

    public KeyCode KeyUp;
    public KeyCode KeyDown;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        // Mover para arriba
        if (Input.GetKey(KeyUp) && transform.position.y < limit)
        {
            transform.Translate(Vector3.up * speed * Time.deltaTime);
        }

        // Mover para abajo
        else if (Input.GetKey(KeyDown) && transform.position.y > -limit)
        {
            transform.Translate(Vector3.down * speed * Time.deltaTime);
        }
    }
}

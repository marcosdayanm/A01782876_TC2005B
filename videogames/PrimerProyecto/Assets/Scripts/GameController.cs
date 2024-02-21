using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{

    public GameObject ball;
    public float speed;
    // Start is called before the first frame update
    void Start()
    {
        StartGame();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void StartGame()
    {
        float angle = GenerateRandomAngle();
        Vector2 direction = AngleToVector2D(angle);
        ball.GetComponent<Rigidbody2D>().AddForce(direction * speed);
    }

    float GenerateRandomAngle()
    {
        // Intenta hasta que encuentre un ángulo que no esté en los rangos prohibidos
        while (true)
        {
            float angle = Random.Range(0f, 360f);
            if ((angle <= 340 || angle >= 20) && (angle <= 70 || angle >= 110) && (angle <= 250 || angle >= 290))
            {
                return angle;
            }
        }
    }

    Vector2 AngleToVector2D(float angleInDegrees)
    {
        // Convierte ángulo en radianes para cálculos
        float angleInRadians = angleInDegrees * Mathf.Deg2Rad;
        // Crea un vector desde el ángulo
        return new Vector2(Mathf.Cos(angleInRadians), Mathf.Sin(angleInRadians));
    }


}


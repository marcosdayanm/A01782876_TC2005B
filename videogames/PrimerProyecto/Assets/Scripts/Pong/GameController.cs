using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using TMPro; // Text Mesh Pro

public class GameController : MonoBehaviour
{

    public GameObject ballPrefab;
    public GameObject ball;
    public float speed;

    // Score tracker
    public int scoreLeft = 0;
    public int scoreRight = 0;
    public int scoreWin;

    // Score UI elements
    public TMP_Text scoreLeftUI;
    public TMP_Text scoreRightUI;


    // Start is called before the first frame update
    void Start()
    {
        StartGame();
    }

    // Update is called once per frame
    void Update()
    {
        // Restart with R
        if (Input.GetKeyDown(KeyCode.R)) {
            Destroy(ball);
            StartGame();
        }

    }

    public void Reset()
    {
        Destroy(ball);
        StartGame();
    }

    public void ResetDefinitely()
    {
        Reset();
        scoreLeft = 0;
        scoreRight = 0;
        scoreLeftUI.text = scoreLeft.ToString();
        scoreRightUI.text = scoreRight.ToString();
    }

    public void StartGame()
    {
        ball = Instantiate(ballPrefab);

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


    public void ChangeScore(int side)
    {
        if (side == 1)
        {
            scoreRight++;
            scoreRightUI.text = scoreRight.ToString();

            // if (scoreRight >= scoreWin)
            // {
            //     scoreRightUI.text = "Winner!" + scoreRight.ToString();
            //     ResetDefinitely();
            // }
        }
        else
        {
            scoreLeft++;
            scoreLeftUI.text = scoreLeft.ToString();
        }
         
        Reset();
    }


}


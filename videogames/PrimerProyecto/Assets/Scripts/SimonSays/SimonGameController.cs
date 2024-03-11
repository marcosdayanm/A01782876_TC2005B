using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using Unity.VisualScripting;
using System.Linq;


public class SimonGameController : MonoBehaviour
{
    // Para que solo Unity pueda acceder a el elemento
    [SerializeField] List<int> simonSequence = new List<int>();
    [SerializeField] List<int> playerSequence = new List<int>();

    // Un array de botones
    [SerializeField] GameObject[] buttons;


    // Menu Screen
    public Image menuImage;
    public Image gameOverImage;
    public TMP_Text scoreUI;
    [SerializeField] GameObject startGameButton;
    [SerializeField] Toggle proMode;
    bool proModeBool = false;

    int score = 0;

    void Start()
    {
        gameOverImage.enabled = false;
        scoreUI.enabled = false;
        proMode.isOn = false;

        // Incializar los botones con su colore de inicio
        foreach (var b in buttons)
            b.GetComponent<SimonButton>().Initialize();

        // Añadir listeners a los botones ára el clickeo
        for (int i = 0; i < buttons.Length; i++)
        {
            int index = i;
            buttons[i].GetComponent<Button>().onClick.AddListener(() => {
                RegisterButtonClick(index); 
                Debug.Log($"Button clicked: {index}");
            });
        }

        startGameButton.GetComponent<Button>().onClick.AddListener(StartGameFlow);
    }


    void StartGame()
    {
        menuImage.enabled = false;
        scoreUI.enabled = true;
        startGameButton.gameObject.SetActive(false);
        proModeBool = proMode.isOn;
        proMode.gameObject.SetActive(false);
        score = 0;
        simonSequence.Clear();
        playerSequence.Clear();
        scoreUI.text = score.ToString();
    }

    void FinishGame()
    {
        menuImage.enabled = true;
        startGameButton.gameObject.SetActive(true);
        proMode.gameObject.SetActive(true);
        scoreUI.enabled = false;
        StopCoroutine(GameFlow());
    }


    public void StartGameFlow()
    {
        StartGame();
        StartCoroutine(GameFlow());
    }

    IEnumerator GameFlow()
    {
        while(true)
        {
            AddNumber();

            // Con esto se crea un thread en el que se llama a la función en el
            yield return StartCoroutine(ColorButtons(simonSequence.Count));

            // Obtener el resultado de InputAndValidation
            IEnumerator validationCoroutine = InputAndValidation();
            while (validationCoroutine.MoveNext())
            {
                yield return validationCoroutine.Current;
            }
            
            bool sequenceValid = (bool)validationCoroutine.Current;

            if (!sequenceValid)
            {
                
                gameOverImage.enabled = true;
                yield return new WaitForSeconds(3);
                gameOverImage.enabled = false;

                // Manejar la secuencia incorrecta, por ejemplo, terminar el juego
                FinishGame();
                Debug.Log("Secuencia incorrecta. Juego terminado.");
                yield break;
            }
            score++;
            Debug.Log($"Secuencia correcta. Score: {score}"); 
            scoreUI.text = score.ToString();
        }
    }

    void AddNumber()
    {
        int num = Random.Range(0, buttons.Length);
        simonSequence.Add(num);
        Debug.Log($"Número añadido! {num}");
    }


    IEnumerator ColorButtons(int size)
    {
        yield return new WaitForSeconds(1);
        Debug.Log($"Iteración: {size}");
        for (int i=0; i<size; i++)
        {
            yield return new WaitForSeconds(0.5f); // Yield es como un async, se espera a que la función termine para regresar
            int currentButton = simonSequence[i];
            Debug.Log(currentButton);

            // Llamar el método del script de botones, primero llamando al botón
            buttons[currentButton].GetComponent<SimonButton>().Highlight();
        }
    }

    void RegisterButtonClick(int buttonIndex)
    {
        playerSequence.Add(buttonIndex);
    }


    IEnumerator InputAndValidation()
    {

        if (proModeBool)
            simonSequence.Reverse(); 

        bool isValid = true;

        playerSequence.Clear();
        while (playerSequence.Count < simonSequence.Count && isValid)
        {
            if (playerSequence.Count > 0)
                isValid = playerSequence[playerSequence.Count - 1] == simonSequence[playerSequence.Count - 1];

            yield return null;   
        }

        // Validar la secuencia del jugador
        yield return simonSequence.SequenceEqual(playerSequence);
    }



}

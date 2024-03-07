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

    int score = 0;

    void Start()
    {
        // Incializar los botones con su colore de inicio
        foreach (var b in buttons)
            b.GetComponent<SimonButton>().Initialize();

        Debug.Log("Botones Inicializados");
        


        // Añadir listeners a los botones ára el clickeo
        for (int i = 0; i < buttons.Length; i++)
        {
            int index = i;
            buttons[i].GetComponent<Button>().onClick.AddListener(() => RegisterButtonClick(index));
        }

        Debug.Log("Botones con Listener");

        
        StartCoroutine(GameFlow());
    }

    void Update()
    {
        
    }

    IEnumerator GameFlow()
    {
        Debug.Log("Entré a GameFLow");
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
                // Manejar la secuencia incorrecta, por ejemplo, terminar el juego
                Debug.Log("Secuencia incorrecta. Juego terminado.");
                yield break;
            }
            Debug.Log($"Secuencia correcta. Score: {score}"); 
            score++;

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
        Debug.Log($"Iteración: {size}");
        for (int i=0; i<size; i++)
        {
            int currentButton = simonSequence[i];
            Debug.Log(currentButton);

            // Llamar el método del script de botones, primero llamando al botón
            buttons[currentButton].GetComponent<SimonButton>().Highlight();
            yield return new WaitForSeconds(1); // Yield es como un async, se espera a que la función termine para regresar
        }
    }

    void RegisterButtonClick(int buttonIndex)
    {
        playerSequence.Add(buttonIndex);
    }


    IEnumerator InputAndValidation()
    {
        playerSequence.Clear();
        while (playerSequence.Count < simonSequence.Count)
            yield return null; // Esperar hasta que el jugador complete su secuencia

        // Validar la secuencia del jugador
        yield return simonSequence.SequenceEqual(playerSequence);
    }



}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;


public class SimonGameController : MonoBehaviour
{

    public List<int> simonList, userList;
    public bool proMode = false;
    public int score = 0;
    public TMP_Text scoreUI;
    public Button[] simonButtons;

    public GameObject menuImage, gameImage;
    public Button startGameButton;
    public Toggle proModeToggle;


    // Start is called before the first frame update
    void Start()
    {
        startGameButton.onClick.AddListener(StartGame);
    }

    // Update is called once per frame
    void Update()
    {
        
    }


    public void StartGame()
    {
        if (proModeToggle.isOn) proMode = true;
        HideMenuElements();

    for (int i = 0; i < simonButtons.Length; i++)
        {
            int index = i; // Crear una nueva variable index dentro del scope del bucle
            simonButtons[i].onClick.AddListener(() => ButtonPressedUser(index));
        }

        StartCoroutine(GameFlow());

    }

    public void HideMenuElements()
    {
        menuImage.SetActive(false);
        proModeToggle.gameObject.SetActive(false);
        startGameButton.gameObject.SetActive(false);
    }

    
    IEnumerator GameFlow()
    {
        yield return new WaitForSeconds(1); // Espera un momento antes de iniciar la secuencia

        while (true)
        {
            Debug.Log("loop del gameflow");
            AddSimonSequence();
            yield return StartCoroutine(ShowSimonSequence());


            userList.Clear(); // Asegúrate de limpiar la lista antes de recibir nuevas entradas

            Debug.Log("A punto de entrar a el loop de esperar al usuario");
            
            while (userList.Count < simonList.Count)
            {


                // Verifica si el usuario ha completado su secuencia
                if (userList.Count == simonList.Count)
                {
                    Debug.Log("Entramos a q es igual el string");
                    // // Aquí puedes verificar si la secuencia del usuario es correcta
                    // if (IsUserSequenceCorrect())
                    // {
                    //     // Correcto. Continúa al siguiente nivel
                    //     IncreaseScore();
                    // }
                    // else
                    // {
                    //     // Incorrecto. Finaliza el juego o reinicia
                    //     GameOver();
                    //     yield break; // Salir de la corutina si el juego termina
                    // }

                    score ++;
                    scoreUI.text = score.ToString();

                    break;
                }
                yield return null; // Espera un frame antes de verificar de nuevo
            }


            
            yield return new WaitForSeconds(1); // Espera antes de la próxima secuencia
            
        }
    }


    void AddSimonSequence()
    {
        simonList.Add(Random.Range(0, 4)); // 0 a 3
    }

    IEnumerator ShowSimonSequence()
    {
        foreach (int i in simonList)
        {
            yield return StartCoroutine(PressButton(i)); // Corrección aquí
        }
    }

    IEnumerator PressButton(int buttonIndex)
    {
        var button = simonButtons[buttonIndex];
        var colors = button.colors; // Obtiene la configuración actual de colores del botón
        var originalColor = colors.normalColor; // Guarda el color original

        colors.normalColor = colors.pressedColor; // Cambia al color "presionado"
        button.colors = colors; // Aplica los cambios

        yield return new WaitForSeconds(0.5f); // Espera medio segundo

        colors.normalColor = originalColor; // Restaura el color original
        button.colors = colors; // Aplica los cambios
    }


    public void ButtonPressedUser(int index)
    {
        userList.Add(index);
    }


}

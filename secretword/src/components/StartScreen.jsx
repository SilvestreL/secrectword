import "./StartScreen.css";


const StartScreen = ({startGame}) => {
    return (
    <div className="Start">
        <h1> Secret Word</h1>
        <p> Clique no Botão abaixo para começar o jogo </p>
        <button onClick={startGame}> Começar o jogo </button>

    </div>
    
    )
}

export default StartScreen;
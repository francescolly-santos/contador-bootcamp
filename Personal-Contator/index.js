var container = document.getElementById("app")

function Contador(props){
    
    //let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1)
        console.log("Total de votos = " + numero)
    }

    function subtrair(){
        setNumero(numero - 1)
        console.log("Total de votos = " + numero)
    }


    return(
        <React.Fragment>
        <h1>{props.titulo}</h1>
        <h2>{numero}</h2>
        <button onClick={somar}>+</button>
        <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App(){
    return (
        <React.Fragment>
        <img src="https://s2.glbimg.com/nD7Ao3HBAyAK7_g_Tt75yk1pEiY=/780x440/e.glbimg.com/og/ed/f/original/2019/01/15/31617293018_896bf29d55_k.jpg" height = "200px"></img>
        <Contador titulo="Suco de laranja"/>
        <br></br>
        <img src="https://i0.wp.com/coolicias.ao/wp-content/uploads/2020/02/Receita-de-Mousse-de-Maracujá-com-Suco-Concentrado.jpg?resize=901%2C640&ssl=1" height = "200px"></img>
        <Contador titulo="Suco de maracujá"/>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);
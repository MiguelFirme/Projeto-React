import ChildComponent from "./ChildComponent";
import EventComponent from "./EventComponent";

function IntroComponent() {
  const a = 5, b = 2, nome = "Miguel";
  const aluno = { 
    nome: 'José',
    Email: 'josé@gmail.com'
  }


  return (
    <div>
      <h1>Componente de introdução</h1>
      <h3>Template Expressions</h3>
      <p>{nome}, o produto entre {a} e {b} é {a * b}</p>
      <p>Aluno {aluno.nome} <br /> E-mail: {aluno.Email}</p>
      <ChildComponent/>
      <EventComponent/>
    </div>
  );
}

export default IntroComponent;
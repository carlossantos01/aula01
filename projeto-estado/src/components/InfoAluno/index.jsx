import './style.css'

function InfoAluno(){
    const nome  = "Carlos"
    const idade = 24
    const curso = "Desenvolvimento de Sistemas"

    return (
        <div className= 'info-aluno'>  
            <h2>Informações do aluno:</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso:{curso}</p>
        </div>
    )
}

export default InfoAluno
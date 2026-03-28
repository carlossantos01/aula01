import {useState} from 'react'
import './style.css'

function AdicionarAluno(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [alunos, setAlunos] = useState([])

    // função para adicionar um aluno na lista
    const handleAdicionarAluno = (event) =>{
        event.preventDefault() // impede que a página seja recarregada 

        // se os campos estiverem preenchidos...
        if (nome && email) {
            setAlunos([...alunos, {nome, email}]) //adicionar na lista.
            setNome("") //Apaga o nome informado deixando o campo vazio.
            setEmail("") // Apaga o e-mail informado deixando o campo vazio.
        }
    }
    return(
    <div>
        <h2>Adicionar Aluno:</h2>

        <from onSubmit={handleAdicionarAluno}>
            
        </from>
    </div>
    )
        
    }



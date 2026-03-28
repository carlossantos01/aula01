import {useState} from 'react'
import './style.css'

function InfoCurso(){
    const [nome, setNome] = useState("Programação de aplicativos")
    const [cargaHoraria, setCargahoraria] = useState(90)
    const [local, setLocal] = useState("SENAI")

    return(
        <div className='info-curso'>
            <h2>Dados do curso: </h2>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Carga horária:</strong>{cargaHoraria}</p>
            <p><strong>Carga horária:</strong>Local: {local}</p>
        </div>
    )

}

export default InfoCurso
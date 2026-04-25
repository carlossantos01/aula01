import './style.css'

export default function Footer(){
    return (
        <footer>
            <div>
                <strong>Contabilidade Simples</strong>  - CNPJ  00.000.000./0001
                <br />
                Rua Exemplo, 123, - Centro - Salvador/BA
                <br />
                © {new Date().getFullYear()} Todos os direitos reservados
                
            </div>
        </footer>
    )
}
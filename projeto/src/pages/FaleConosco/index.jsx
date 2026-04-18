import './style.css'

export default function FaleConosco(){

    function handleSubmit(e) {
        e.preventDefault()
        alert("Mensagem enviada!")

    }
    return (
        <section>
            <h1>Fale Conosco</h1>
            <p>Tire dúvida e peça um orçamento sem compromisso.</p>
            <from onSubmit= {handleSubmit}>
                <div>
                    <label>
                        <span>Nome</span>
                        <input type="text" required placeholder='Seu nome' />
                    </label>
                    <label>
                        <span>E-mail</span>
                        <input type="email" required placeholder='seu@email.com' />
                    </label>
                    <label>
                        <span>Telefone</span>
                        <input type="telefone" required placeholder='(00) 90000-0000' />
                    </label>
                </div>
                <label>
                        <span>Assunto</span>
                        <input type="text" required placeholder='Ex.: Abertura de Empresa.' />
                    </label>
                <label>
                        <span>Mensagem</span>
                        <textarea rows="6" required placeholder='Conte-nos um pouco do seu caso.'/>
                    </label>

                    <button type='submit'>Enviar</button>

            </from>
        </section>
    )
}
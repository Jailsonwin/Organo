import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) =>{
    //Exemplo de estilo por const
    const estiloH3 = {
        borderColor: props.corPrimaria
    }

    return(
        //Renderizacao condicional 
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={estiloH3} >{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador>)}
            </div>
        </section>
        : ''
    );
}

export default Time;
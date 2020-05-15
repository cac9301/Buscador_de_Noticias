import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({ setcategoria }) => {

    // usear el custom HOOK

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ]
    // utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
    
    // funcion de enviar datos 

    const handlesubmit = e => {
        e.preventDefault();
        setcategoria(categoria);
    }
    return (
        <div className={`${styles['buscador']} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handlesubmit}>
                    <h2 className={`${styles['heading']}`}>
                        Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />
                    <div className={`${styles['separador']}`}>
                        <input
                            type="submit"
                            className={`${styles['btn-block']}  btn-large amber darken-2`}
                            value="buscar" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
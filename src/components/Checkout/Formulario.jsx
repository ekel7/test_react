import React from 'react'
import './formulario.css'

const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form className='form' onSubmit={handleSubmitForm}>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />

            <label>Telefono:</label>
            <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput} />

            <label>Email:</label>
            <input type="email" name="email" value={datosForm.email} onChange={handleChangeInput} />
            
            <label>Email de verificacion:</label>
            <input type="email" name="emailVerif" value={datosForm.emailVerif} onChange={handleChangeInput} />

            <button type='submit'>Enviar Orden</button>
        </form>
    )
}

export default Formulario
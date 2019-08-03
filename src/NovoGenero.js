import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [sucess, setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }
    const Save = () => {
        axios.post('/api/genres',{
            name
        })
        .then(res => {
            setSuccess(true)
        })
    }

    if (sucess){
        return (<Redirect to='/generos' />)
    }
    return (
        <div className='container'>
        <h1>Novo Genêros</h1>
        <form>
            <div className='form-group'>
                <label htmlFor='name'>Nome</label>
                <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genêro'/>
            </div>
            <button type='button' onClick={Save} className='btn btn-primary'>Salvar</button>
        </form>
    </div>
    )
}

export default NovoGenero
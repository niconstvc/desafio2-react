import React from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'



function Registro(props) {
  return (
    <>
      {/*        <SocialButton /> */}
      <div className='contenedorSocial'>
        <SocialButton icono="facebook" />
        <SocialButton icono="github" />
        <SocialButton icono="linkedin" />
      </div>
      <p>o usa tu mail para registrarte</p>
      <Formulario validarDatos={props.validarDatos}
        nombre={props.nombre}
        setNombre={props.setNombre}
        email={props.email}
        setEmail={props.setEmail}
        pass1={props.pass1}
        setPass1={props.setPass1}
        pass2={props.pass2}
        setPass2={props.setPass2}
      />
      {props.errorllenado ? <Alert errormsg={props.errorllenadomsg} status="error" estilomsg="conerror" /> : null}
      {props.errorigualdadpass ? <Alert errormsg={props.errorigualdadpassmsg} status="error" estilomsg="conerror" /> : null}
      {props.errorpass ? <Alert errormsg={props.errorpassmsg} status="error" estilomsg="conerror" /> : null}
      {props.erroremail ? <Alert errormsg={props.erroremailmsg} status="error" estilomsg="conerror" /> : null}
      {props.noerror ? <Alert errormsg={props.noerrormsg} status="noerror" estilomsg="sinerror" /> : null}
    </>
  )
}

export default Registro
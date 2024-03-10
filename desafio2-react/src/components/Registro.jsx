import React from 'react'
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'



function Registro(props) {
  return (
    <>
      {/*        <SocialButton /> */}
      <div className='contenedorSocial'>
    <a href="https://es-la.facebook.com/login/device-based/regular/login/?login_attempt=1">
        <SocialButton icono="facebook" />
    </a>
    <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsignup%3Fref_cta%3DSign%2Bup%26ref_loc%3Dheader%2Blogged%2Bout%26ref_page%3D%252F%26source%3Dheader-home">
        <SocialButton icono="github" />
    </a>
    <a href="https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin">
        <SocialButton icono="linkedin" />
    </a>
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
      {props.errorllenado ? <Alert errormsg={props.errorllenadomsg} status="alert alert-danger" /> : null}
      {props.errorigualdadpass ? <Alert errormsg={props.errorigualdadpassmsg} status="alert alert-danger" /> : null}
      {props.errorpass ? <Alert errormsg={props.errorpassmsg} status="alert alert-danger" /> : null}
      {props.erroremail ? <Alert errormsg={props.erroremailmsg} status="alert alert-danger" /> : null}
      {props.noerror ? <Alert errormsg={props.noerrormsg} status="alert alert-success" /> : null}
    </>
  )
}

export default Registro
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import MyAlert from './Alert';
import { useState } from 'react';



const Registro = () => {
  const [alert, setAlert] = useState({
    error: "",
    message: "",
    color: ""
  }); 

  return (
    <>
      <div className='container border border-light-subtle rounded-5 bg-white p-5'>
        <h1 className='fs-1'>Crea una cuenta</h1>
        <div className='d-flex gap-3 justify-content-center my-3'>
          <SocialButton icon="fa-brands fa-facebook custom" />
          <SocialButton icon="fa-brands fa-github custom" />
          <SocialButton icon="fa-brands fa-linkedin-in custom" />
        </div>
        <p>O usa tu email para registrarte</p>
        <Formulario setAlert={setAlert}/>
        {alert.message && <MyAlert color={alert.color}>{alert.message}</MyAlert>}
      </div>
    </>
  );
};

export default Registro;


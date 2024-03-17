import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormValidation = (e) => {
    e.preventDefault();
    if(nombre === '' || email === '' || password === '' ||confirmPassword === ''){
      setAlert({
        error: true,
        message: "completa todos los campos !",
        color: "danger"
      });
      return
    }
    if (password !== confirmPassword) {
      setAlert({
        error: true,
        message: "Las contraseñas no coinciden !",
        color: "danger"
      });
      return
    }

    setAlert({
      error: false,
      message: "Cuenta creada exitosamente !",
      color: "success"
    });
    setNombre('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  };

  return (
    <Form className='formulario' onSubmit={handleFormValidation}>
      <div className="form-group mb-3">
        <input type='text' name='nombre' className='form-control' placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} />
      </div>
      <div className="form-group mb-3">
        <input type='email' name='email' className='form-control' placeholder='tuemail@ejemplo.com' onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <div className="form-group mb-3">
        <input type='password' name='password' className='form-control' placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <div className="form-group mb-3">
        <input type='password' name='password' className='form-control' placeholder='Connfirmar tu contraseña' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
      </div>
      <div className="d-grid gap-2">
        <Button type='submit' className='btn btn-success'>Registrate</Button>
      </div>
    </Form>
  );
};

export default Formulario;

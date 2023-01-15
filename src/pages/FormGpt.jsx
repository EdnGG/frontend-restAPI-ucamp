import { useFormik } from 'formik';

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      // Enviar los valores al servidor para iniciar sesión
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'El correo es requerido';
      }
      if (!values.password) {
        errors.password = 'La contraseña es requerida';
      }
      return errors;
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
      </div>
      <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
    </form>
  );
};


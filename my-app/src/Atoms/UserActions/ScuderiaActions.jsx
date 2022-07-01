import React from 'react';
import { useForm } from 'react-hook-form';

import './UserActions';

const ScuderiaActions = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  
  return (
    <form className="UserActions" onSubmit={handleSubmit(() => {})}>
      <input placeholder="Sobrenome" {...register('surname', { required: true})} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default ScuderiaActions;

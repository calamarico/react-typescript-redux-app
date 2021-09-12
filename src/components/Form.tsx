import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Label, FormGroup, Form, Button } from 'reactstrap';

import '../styles/form.css';

const getRandomId: any = () => `id${Math.random().toString(16).slice(2)}`;

/**
 * Form component.
 * Renders a dynamic form for allow adding new submissions.
 */
const FormSub: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [inputFields, setInputFields] = useState([]);

  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmit = (data: any) => {
    fetch(`http://localhost:3000/taxes/${id}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, ...{ parentId: id, id: getRandomId() } }),
    })
      // eslint-disable-next-line no-alert
      .then(() => alert('Done!'));
  };

  useEffect(() => {
    fetch(`http://localhost:3000/taxes/${id}/form`, {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((fields) => setInputFields(fields));
  }, []);

  return (
    <div className="form-sub">
      <h1>Add Submission</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputFields.map((field: any) => (
          <FormGroup key={field.id}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              required
              {...register(field.id)}
            />
          </FormGroup>
        ))}
        <div className="form-sub-button">
          <Button type="submit">Add</Button>
          <Button type="button" onClick={() => history.goBack()}>
            Back
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormSub;

import ModalAlert from '@components/ModalAlert/ModalAlert';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, FloatingLabel, Form, ListGroup } from 'react-bootstrap';
import { IOrder } from 'src/models/OrderModel';
import { IPlan } from 'src/models/PlansModels';
import { GetMethod, PostMethod, PutMethod } from 'src/services/request';
import { v4 as uuidv4 } from 'uuid';

interface IPropsRentComponent {
  idMovie: string;
  demand: number;
  refreshPeticion: () => void;
}

const RentComponent = (props: IPropsRentComponent) => {
  const { idMovie, demand, refreshPeticion } = props;

  const [planes, setPlanes] = useState<IPlan[]>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [plandescription, setPlanescription] = useState<string>('');
  const [loadpeticion, setLoadpeticion] = useState<boolean>(false);
  const [showmodal, setShowmodal] = useState<boolean>(false);
  const [showmodalsuccess, setShowmodalsuccess] = useState<boolean>(false);
  const [orden, setOrden] = useState<IOrder>({
    orden: '',
    movieId: '',
    plan: '',
    fechaInicio: '',
    email: '',
  });

  const handleShowModal = (toggle: boolean) => {
    setShowmodal(toggle);
  };
  const handleShowModalSuccess = (toggle: boolean) => {
    setShowmodalsuccess(toggle);
  };

  const peticion = async () => {
    setLoad(true);
    const result = await GetMethod(`/planes`);
    if (result.ok) {
      console.log(result.response);
      setPlanes(result.response);
      setLoad(false);
      return;
    }
    setLoad(false);
  };

  const getPrecio = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterElement = planes.filter((plan) => plan.plan === e.target.value)[0];
    setPlanescription(filterElement.descripcion);
    setOrden({ ...orden, plan: e.target.value });
  };

  const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrden({ ...orden, email: e.target.value });
  };

  useEffect(() => {
    peticion();
  }, []);

  const postOrden = async () => {
    const fecha = new Date();
    const newOrder = {
      ...orden,
      orden: uuidv4(),
      movieId: idMovie,
      fechaInicio: `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`,
    };
    const postNewOrder = await PostMethod(newOrder, '/rentas');
    if (postNewOrder.ok) {
      return postNewOrder;
    } else {
      throw new Error(postNewOrder.message);
    }
  };

  const putDemand = async () => {
    const putDemandMovie = await PutMethod({ demand: demand + 1 }, `/movies/${idMovie}`);
    if (putDemandMovie.ok) {
      return putDemandMovie;
    } else {
      throw new Error(putDemandMovie.message);
    }
  };

  const submit = async (e: any) => {
    e.preventDefault();
    setLoadpeticion(true);
    if (!orden.email || !orden.plan) {
      setShowmodal(true);
      setLoadpeticion(false);
      return;
    }
    try {
      await postOrden();
      await putDemand();
      refreshPeticion();
      setShowmodalsuccess(true);
      setLoadpeticion(false);
    } catch (err) {
      setLoadpeticion(false);
    }
  };

  if (load) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <ModalAlert
        show={showmodal}
        handleShow={handleShowModal}
        title="Algo salio mal"
        body="Asegurate de llenar todos os campos"
        button="Aceptar"
        variant="warning"
      />
      <ModalAlert
        show={showmodalsuccess}
        handleShow={handleShowModalSuccess}
        title="Orden realizada!"
        body="En unos breves instantes te llegara a tu correo las indicaciones para que puedas disfrutar de tu pelicula"
        button="Aceptar"
        variant="success"
      />
      <ListGroup>
        <ListGroup.Item variant="info">
          <h1>Rentar Película</h1>
          <p>
            Renta esta película poniendo tu correo y eligiendo un plan, posteriormente te llegara a tu correo un link
            para pagar y poder ver la película.
          </p>
          {plandescription && (
            <ListGroup style={{ margin: '10px 0px 20px 0px' }}>
              <ListGroup.Item variant="success">{plandescription}</ListGroup.Item>
            </ListGroup>
          )}
          <Form onSubmit={submit}>
            <Form.Group>
              <FloatingLabel controlId="floatingInput" label="Escribe tu correo" className="mb-3">
                <Form.Control type="email" onChange={getEmail} value={orden.email} disabled={loadpeticion} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelect" label="Elige un plan de renta">
                <Form.Select aria-label="select" onChange={getPrecio} value={orden.plan} disabled={loadpeticion}>
                  <option disabled value="">
                    Elige un plan de renta
                  </option>
                  {planes.map((plan, key: number) => {
                    return (
                      <option value={plan.plan} key={key}>
                        {plan.plan.toUpperCase()} -{' '}
                        {Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(plan.costo)}MX
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
              <Button
                type="submit"
                size="lg"
                disabled={loadpeticion}
                style={{
                  margin: '20px 0px',
                }}
              >
                Rentar Película
              </Button>
            </Form.Group>
          </Form>
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <p>En caso de tener algun problema o falla contactanos soporteamlove@gmail.com</p>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default RentComponent;

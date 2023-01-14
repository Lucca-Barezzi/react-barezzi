import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useCartContext } from '../../Context/Cartcontext'
import { useState } from 'react';

const InputForm = () => {

    const { cartList } = useCartContext()

    const [dataForm, setDataForm] = useState({
        name: "",
        lastName: "",
        phone: ""
    })


    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [error, setError] = useState('');


    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleEmail1Change = (e) => {
        setEmail1(e.target.value);
        setDataForm({ ...dataForm, email1: e.target.value });
    };

    const handleEmail2Change = (e) => {
        setEmail2(e.target.value);
        setDataForm({ ...dataForm, email2: e.target.value });
    };


    const createOrder = (evt) => {
        evt.preventDefault();

        if (email1 !== email2) {
            setError('Emails do not match');
            return;
        }
        setError('');

        const order = {};

        order.buyer = dataForm;

        order.item = cartList.map(({ name, id, price }) => ({ name, id, price }));

        const datab = getFirestore();
        const queryOrder = collection(datab, 'orders');
        addDoc(queryOrder, order)
            .then(resp => console.log(resp));
    };



    return (
        <Form onSubmit={createOrder}>
            <Form.Group className='mb-3 ' controlId='formPeople'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    name='name'
                    value={dataForm.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type='text'
                    name='lastName'
                    value={dataForm.lastName}
                    onChange={handleChange}
                    placeholder='Enter your Last Name'
                />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type='number'
                    name='phone'
                    value={dataForm.phone}
                    onChange={handleChange}
                    placeholder='Enter your phone number'
                />
                <Form.Control
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={email1}
                    onChange={handleEmail1Change}
                    required
                />
                <Form.Control
                    type='text'
                    name='confirmEmail'
                    placeholder='Confirm your email'
                    value={email2}
                    onChange={handleEmail2Change}
                    required
                />
            </Form.Group>

            <center>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </center>
        </Form>
    )
}

export default InputForm
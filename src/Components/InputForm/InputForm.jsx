import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";

const InputForm = () => {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    phone: "",
  });

  const { cartList, deleteCart } = useCartContext();

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

    setLoading(true);

    if (error) return;
    if (email1 !== email2) {
      setError("Emails do not match");
      return;
    } else {
      setError("");
    }

    const order = {};

    order.buyer = dataForm;

    order.item = cartList.map(({ name, id, price }) => ({ name, id, price }));

    const datab = getFirestore();
    const queryOrder = collection(datab, "orders");
    addDoc(queryOrder, order).then((resp) => {
      setOrderId(resp.id);
      deleteCart();
      setLoading(false);
    });
  };
return (
    <>
      {!loading && !orderId && cartList.length > 0 && (
        <Form className="form" onSubmit={createOrder}>
          <Form.Group className="mb-3 " controlId="formPeople">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={dataForm.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={dataForm.lastName}
              onChange={handleChange}
              placeholder="Enter your Last Name"
            />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
            className=""
              type="number"
              name="phone"
              value={dataForm.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            <Form.Control
              className="mt-2"
              type="text"
              name="email"
              placeholder="Email"
              value={email1}
              onChange={handleEmail1Change}
              required
            />
            <Form.Control
              className="mt-2"
              type="text"
              name="confirmEmail"
              placeholder="Confirm your email"
              value={email2}
              onChange={handleEmail2Change}
              required
            />
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
          </Form.Group>

          <center>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </center>
        </Form>
      )}
      {orderId && !loading && (
        <>
        
         <h2 className="bg-dark text-white cursive" style={{ color: "red" , width:"60vw" }}>
            Your order has been succesfully received Id: {orderId}
          </h2>
        </>
      )}
    </>
  );
};

export default InputForm;
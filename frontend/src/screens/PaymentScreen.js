import React, { useState } from "react";

import {
  Form,
  Button,
  Col,
  FormGroup,
  FormCheck,
  FormLabel,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../action/cartActions";

import FormContainer from "../components/FormContainer";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <FormLabel as="legend"> select method</FormLabel>

          <Col>
            <FormCheck
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
            <FormCheck
              type="radio"
              label="Payment On Delivery"
              id="paymentOnDelivery"
              name="paymentMethod"
              value="deliveryPayment"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
          </Col>
        </FormGroup>
        <Button type="submit" variant="primary primaryBtn">
          {" "}
          continue...
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;

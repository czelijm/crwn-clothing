import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    //price myst be in us cents
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51IC9HWE0ekSlhYUhyZ0Pfx5Hv83FlKuxOCPV1JmxJ51Ha5P1D9EtUndVoQHfQpWVoCCE6TX6bPiwVa403HwLSTj600oLT0opXs';

    const onToken = token =>{
        console.log(token);
        alert('Payment Sucessful');
    } 

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://www.svgshare.com/i/CUz.svf'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
)}

export default StripeCheckoutButton;
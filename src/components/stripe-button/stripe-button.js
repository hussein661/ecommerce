import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStripe = price*100
    const publichableKey = 'pk_test_nNCwHGcci4HLOATmDGj3ycYo'
    const onToken = token=>{
        console.log(token)
        alert('payment successfull')
    }
    return (
        <StripeCheckout 
            label='Pay Not'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ${price}`}
            ammount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publichableKey}
        />
    );
};

export default StripeButton;
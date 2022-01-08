import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JLqsGSDvMD9hWGLiOUSh2a2GJm3w5CLTkNNRrmddhVMHppFqZbN0FZpY6GcyFdtzaDnASn8X20fi7GTFQcFxUDD00DQOZUK4t';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout
        label='Pay Now'
        name='Attire Affair'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};
export default  StripeCheckoutButton;
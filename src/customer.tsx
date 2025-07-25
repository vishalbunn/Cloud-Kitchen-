import React, { useState, useEffect } from 'react';
import db from './db.json';

const Customer = () => {
  const [menu, setMenu] = useState(db.menu);

  const handlePayment = (amount) => {
    const options = {
      key: 'YOUR_KEY_ID', // Enter the Key ID generated from the Dashboard
      amount: amount * 100,
      currency: 'INR',
      name: 'Orderly Meals',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo.jpg',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <h1>Customer</h1>
      <h2>Menu</h2>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handlePayment(item.price)}>Pay with Razorpay</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customer;

import React from 'react';
import PricingCard from './SingleCard';

const App = () => {
  const pricingData = [
    {

      index:0,  
      title: 'Basic Plan',
      price: '$34.99/per mo.',
      features: ['Ultimate access to all course', 'Free acess for all kind of exercise corrections with downloads', 'Total assessment corrections with free download access system', 'Unlimited download of courses on the mobile app contents',],
      par: "For the ultimate company team who work with new come data stack",  
    },
    {
        index:1, 
      title: 'Pro Plan',
      par: "For the organization who work with new come data stack",
      par:"For the ultimate company team who work with new come data stack",
      price: '$29.99/per mo.',
      features: ['Ultimate access to all course', 'Free acess for all kind of exercise corrections with downloads', 'Total assessment corrections with free download access system', 'Unlimited download of courses on the mobile app contents',],

    },
    {
        index:2, 
      title: 'Premium Plan',
      par: "For the startup team who work with new come data stack",
      price: '$25.99/per mo.',
      features: ['Ultimate access to all course', 'Free acess for all kind of exercise corrections with downloads', 'Total assessment corrections with free download access system', 'Unlimited download of courses on the mobile app contents',],
    },
  ];

  return (
    <div className="flex justify-center">
      {pricingData.map((pricing, index) => (
        <PricingCard
          key={index}
          num={pricing.index}
          title={pricing.title}
          price={pricing.price}
          features={pricing.features}
          par={pricing.par}
        />
      ))}
    </div>
  );
};

export default App;

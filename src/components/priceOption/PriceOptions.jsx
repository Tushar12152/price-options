import PriceOption from "./priceOption";

const PriceOptions = () => {
     
    const priceOptions=[
          {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30/month",
            "features": [
              "Access to basic gym facilities",
              "Unlimited cardio equipment usage",
              "Locker room access",
              "Fitness assessment upon signup",
              "Discounts on gym merchandise"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": "$50/month",
            "features": [
              "Access to all gym facilities",
              "Unlimited access to classes (e.g., yoga, spin)",
              "Personal training session once a week",
              "Sauna and spa access",
              "Nutritional consultation"
            ]
          },
          {
            "id": 3,
            "name": "Family Membership",
            "price": "$80/month",
            "features": [
              "Access for up to 4 family members",
              "Unlimited access to all gym facilities",
              "Access to kids' play area",
              "Discounts on classes and personal training sessions",
              "Monthly family fitness challenge"
            ]
          }
        ]
      
      
    return (
        <div>
            <h1 className="font-bold text-4xl text-violet-400  text-center py-10">Best prices in this Town</h1>
             <div className="grid md:grid-cols-2 lg:grid-cols-3  w-[80%] mx-auto gap-6">
             {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
              }
             </div>
        </div>
    );
};

export default PriceOptions;
import PropTypes from "prop-types";
import Feature from "../feature/Feature";


const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className="bg-violet-300 p-4 flex flex-col rounded-md">
             <h2 className="text-center">
                <span className="font-bold  text-4xl">{price}</span>
                
             </h2> 
             <h3 className="font-semibold text-center text-3xl">{name}</h3>
           <div className="flex-grow mb-8">  {
                features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
             }
             </div>

             <button className="bg-green-900 w-full p-2 text-white font-bold rounded-lg hover:bg-gray-400">Buy Now</button>
        </div>
        
    );
};
PriceOption.propTypes={
    option:PropTypes.object.isRequired,
}
export default PriceOption;
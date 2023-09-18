import PropTypes from "prop-types";
import {AiFillCheckCircle } from 'react-icons/ai';


const Feature = ({feature}) => {
    return (
        <div className="flex items-center px-4">
          <AiFillCheckCircle className="text-sm text-green-900"></AiFillCheckCircle>  <h1 className="text-center text-indigo-600 text-sm p-2" >  {feature}</h1>
        </div>
    );
};
Feature.propTypes={
    feature:PropTypes.string.isRequired,
}
export default Feature;
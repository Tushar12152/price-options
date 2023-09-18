import PropTypes from 'prop-types';


const List = ({route}) => {
    return (
        <div>
            <li className='hover:bg-violet-950 rounded px-2 text-white'> <a href={route.path}>{route.name}</a></li>
          
        </div>
    );
};
List.propTypes={
    route:PropTypes.object.isRequired,
}
export default List;
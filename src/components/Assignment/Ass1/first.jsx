import './first.css'
import PropTypes from 'prop-types';

export const FirstComponent = ({name,email})=>{
   return(
    <div className="card">
      <h1 className="card_title">{name}</h1>
      <p className="card_email" title={`Email of ${name}`}>Email: {email}</p>
    </div>
   )
}

FirstComponent.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
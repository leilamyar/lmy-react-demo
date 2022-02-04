import PropTypes from 'prop-types';
import './CustomButton.css';

const CustomButton = (props) => {
  const { customBtnLabel } = props;
  return (
    <button {...props.htmlAttribute}
      className={`${props.htmlAttribute.className} custom-btn`}>
      {customBtnLabel}
    </button>
  );
}

CustomButton.propTypes = {
  customBtnLabel: PropTypes.string.isRequired,
}

export default CustomButton;
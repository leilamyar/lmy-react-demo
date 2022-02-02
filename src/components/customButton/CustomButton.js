import PropTypes from 'prop-types';
import './CustomButton.css';

const CustomButton = ({ customBtnLabel, clr: { bgClr, borderClr } }) => {
  return (
    <>
      {/* <button style={{ backgroundColor: bgClr }, { border: `2px solid ${borderClr}` }}> */}
      <button className='custom-btn'>
        {customBtnLabel}
      </button>
    </>
  );
}

CustomButton.propTypes = {
  customBtnLabel: PropTypes.string.isRequired,
  clr: PropTypes.object,
}

CustomButton.defaultProps = {
  clr: {
    bgClr: 'white',
    borderClr: 'black',
  }
};
export default CustomButton;
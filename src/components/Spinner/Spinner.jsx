import ClipLoader from 'react-spinners/ClipLoader';
import './Spinner.css';
/* eslint-disable */

function Spinner() {
  return (
    <>
    <div className="sweet-loading">
      <ClipLoader
        color={"#B99056"}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.7}
      />
       </div>
      <p>Publication en cours</p>
      </>
  );
}

export default Spinner;
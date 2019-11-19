import React from 'react';
import './ComplimentsFormComponent.css';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';


const ComplimentsFormView = ({ onSubmit, displayName, handleClose, checkboxValue, handleChange}) => {
    return (
      <div className = "complimentsFormContainer">
        <div className = "userName">
          <strong className = "name">{displayName}</strong>
          <div className = "close">
            <CloseIcon onClick={handleClose}/>
          </div>
        </div>
        <div className = "postText">
          <form onSubmit={onSubmit}>
            <TextField type="text" name="content" placeholder="Write anything" />
            <div className="submitButton">
              <button>Send Compliment</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default ComplimentsFormView;

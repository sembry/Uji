import React from 'react';
import './ComplimentsFormComponent.css';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';


const ComplimentsFormView = ({ onSubmit, handleClose, complimentReceiver } ) => {
    return (
      <div className = "complimentsFormContainer">
        <div className = "userName">
          <strong className = "name">To: {complimentReceiver}</strong>
          <div className = "close">
            <CloseIcon onClick={handleClose}/>
          </div>
        </div>
        <div className = "postText">
          <form onSubmit={onSubmit}>
          <TextField className = "textField"
              type="text"
              multiline
              name="content"
              rows="2"
              placeholder="Write anything" />
            <div className="submitButton">
              <button>Send Compliment</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default ComplimentsFormView;

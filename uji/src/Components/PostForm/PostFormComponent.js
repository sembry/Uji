import React from 'react';
import './PostFormComponent.css';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';


const PostFormView = ({ onSubmit, displayName, handleClose }) => {
    return (
      <div className = "postFormContainer">
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
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );  
}
export default PostFormView;
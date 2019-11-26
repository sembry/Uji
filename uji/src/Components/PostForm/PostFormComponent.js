import React from 'react';
import './PostFormComponent.css';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';


const PostFormView = ({ onSubmit, displayName, handleClose, checkboxValue, handleChange}) => {
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
            <TextField className = "textField"
                type="text"
                multiline
                name="content"
                rows="2"
                placeholder="Write anything" />
            <div className = "anonymousCheck">
              <input type="checkbox" name="anon" value={checkboxValue}
                onChange={handleChange}/>
                <p className="checkbox-text">Post anonymously </p>
            </div>
            <div className="submitButton">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default PostFormView;

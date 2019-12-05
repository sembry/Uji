import React from 'react';
import './PostFormComponent.css';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
                placeholder="Write anything"
            />
            <FormControlLabel
              control={<Switch onChange={handleChange} value={checkboxValue} />}
              label="Post Anonymously"
            />
            <div className="submitButton">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default PostFormView;

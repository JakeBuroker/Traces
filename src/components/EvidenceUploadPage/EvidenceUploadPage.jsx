import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
// Import your audio recording and playing components
import AudioUploadElement from './AudioUploadElement';

export default function EvidenceUpload() {
  const history = useHistory();
  const dispatch = useDispatch();
  const evidenceType = useSelector((store) => store.evidenceUploadReducer.evidenceUploadReducer);

  

  // Handle file input change for audio uploads
  const changeAudio = (event) => {
    event.preventDefault();
    const files = event.target.files; // This is a FileList object, not an array.
    const selectedFilesArray = Array.from(files); // Convert FileList to an array.
    console.log("selectedFiles", selectedFilesArray, "selectedFiles type", typeof selectedFilesArray);
    // Dispatch the action with the selected files
    dispatch({ type: 'SET_MEDIA', payload: selectedFilesArray });
    history.push('/evidence-details');
  };

  // Navigate to evidence details page
  const pushAudio = () => {
    history.push('/evidence-details');
  };

  // Render component based on the selected evidence type
  if (evidenceType == null) {
    return (
      <div>
        <button onClick={goBack}>Go Back</button>
        <p>No type has been chosen</p>
      </div>
    );
  } else if (evidenceType === "cambutton" || evidenceType === "notesbutton") {
    return (
      <div style={{ padding: "55px" }}>
        <BackButton/>
        <p>This is where you upload images or videos</p>
        <input
          onChange={changeAudio} // Use the same handler for simplicity
          type="file"
          id="fileInput"
          multiple
          accept='video/*, image/*'
        />
      </div>
    );
  } else if (evidenceType === "audiobutton") {
    // For audio uploads, provide a file input and the AudioUploadElement for recording
    return (
      <div style={{ padding: "55px" }}>
        <BackButton/>
        <p>This is where you upload audio</p>
        <input
          onChange={changeAudio}
          type="file"
          id="fileInput"
          multiple
          accept="audio/*" // Ensure only audio files can be uploaded
        />
        <AudioUploadElement />
      </div>
    );
  } else {
    // Fallback case if the evidence type is unrecognized
    return (
      <div>
        <button onClick={goBack}>Go Back</button>
        <p>I'm not sure what's going on</p>
      </div>
    );
  }
}
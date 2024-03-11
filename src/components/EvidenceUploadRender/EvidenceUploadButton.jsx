// * Here is where i'll make the static button for evidence upload which
// * renders the upload choices for which type of media you're uploading
import './EvidenceUploadButton.css'
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

export default function EvidenceUploadButton () {
    const dispatch = useDispatch()
    const history = useHistory()
    let [evidenceType, setEvidenceType] = useState()
const [showAdditionalButtons, setShowAdditionalButtons] = useState(false);

// const mainButtonRef= useRef(null)
const EvidenceUploadOnclick = (event) => {
    event.preventDefault()
    let uploadType = event.target.closest('button').id
    console.log("choosing evidence upload type", uploadType);
    setEvidenceType(uploadType)
    dispatch({type:'SET_EVIDENCE_TYPE', payload:uploadType})
    history.push('/evidenceupload')

}
const EvidenceDetails = (event) => {
  event.preventDefault()
  let uploadType = event.target.closest('button').id
  console.log("choosing evidence upload type", uploadType);
  setEvidenceType(uploadType)
  dispatch({type:'SET_EVIDENCE_TYPE', payload:uploadType})
  history.push('/evidence-details')
}

const toggleAdditionalButtons = () => {
  setShowAdditionalButtons(!showAdditionalButtons);
};

return (
  <div className='button-container'>
    <button 
    className="button" onClick={toggleAdditionalButtons}>📕</button>

    {showAdditionalButtons && (
      <div >
        <button onClick = {EvidenceUploadOnclick} className="additional-button" id="cambutton">📸</button>
        <button onClick = {EvidenceUploadOnclick} className="additional-button" id="audiobutton">🎤</button>
        <button onClick = {EvidenceDetails} className="additional-button" id="notesbutton">📝</button>
      </div>
    )}
  </div>
);
}






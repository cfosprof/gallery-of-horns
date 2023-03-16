import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    // Destructure the props to get the beast data, show status, and onHide function
    const { beast, show, onHide } = this.props;

    // If there's no beast data, don't render anything
    if (!beast) {
      return null;
    }

    // Render the Modal component from React Bootstrap
    return (
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          {/* Set the title of the modal to the beast's title */}
          <Modal.Title>{beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display the beast's image and description */}
          <img src={beast.image_url} alt={beast.title} className="img-fluid" />
          <p>{beast.description}</p>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;

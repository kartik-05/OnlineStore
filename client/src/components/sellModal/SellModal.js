import React from 'react'
import Form from '../form/Form'
import './SellModal.css';

function SellModal({ sellModal, setSellModal, currentId, setCurrentId }) {
    return (
        <div className="sell-modal-container" style={sellModal === false ? { visibility: "hidden" } : { visibility: "visible" }}>
            <Form setSellModal={setSellModal} currentId={currentId} setCurrentId={setCurrentId} />
        </div>

    )
}

export default SellModal

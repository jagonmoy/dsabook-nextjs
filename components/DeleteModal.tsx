import React, { useState } from 'react';
import { TrashIcon } from "@heroicons/react/24/outline";
interface Props {
}

const DeleteModal: React.FC<Props> = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button
                type="button"
                onClick={() => setShowModal(true)}
            >
                <TrashIcon className="delete_icon" />
            </button>
            {showModal && (
                <>
                    <div className="delete_modal_div_1">
                        <div className="delete_modal_div_2">
                            <div className="delete_modal_div_3">
                                <h3 className="delete_warning_text">Are you sure you want to delete this?</h3>
                                <button data-modal-hide="popup-modal" type="button" className="delete_confirm_button">
                                    Yes, I'm sure
                                </button>
                                <button onClick={() => setShowModal(false)} data-modal-hide="popup-modal" type="button" className="delete_reject_button">No, cancel</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default DeleteModal;

const Modal = ({setModalOpen}) => {
    function btnHandler() {
        setModalOpen(false)
    }

    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={btnHandler}>Cancel</button>
            <button className='btn' onClick={btnHandler}>Confirm</button>
        </div>
    );
};

export default Modal;

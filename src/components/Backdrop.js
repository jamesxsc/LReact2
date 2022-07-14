const Backdrop = ({setModalOpen}) => {
    return (
        <div className='backdrop' onClick={() => setModalOpen(false)}/>
    );
};

export default Backdrop;

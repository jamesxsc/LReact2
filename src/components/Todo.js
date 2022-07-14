import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({text}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const deleteHandler = () => {
        setModalOpen(true);
    }

    return (
        <div className='card'>
            <h2>{text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalOpen && (<Modal setModalOpen={setModalOpen}/>)}
            {modalOpen && (<Backdrop setModalOpen={setModalOpen}/>)}
        </div>
    );
};

export default Todo;

import { createPortal } from 'react-dom';

export const Portal = () => {
    return createPortal(
        <div className="modal-bace">
            <div className="modal-box">
                <h3>my modal box</h3>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Portal
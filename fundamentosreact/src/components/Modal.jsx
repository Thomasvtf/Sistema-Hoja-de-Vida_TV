import { useRef, useEffect } from "react";

function Modal({ isOpen, onClose, titulo, children }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    const manejarClickFondo = (e) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog 
            ref={dialogRef} 
            onClose={onClose} 
            onClick={manejarClickFondo}
            className="modal-nativo"
                style={{ 
                    border: "solid 1px #ffff",
                    borderRadius: "8px",
                    padding: "20px", 
                    maxWidth: "500px", 
                    width: "90%", 
                    color: "#ffff", 
                    background: "rgb(17, 17, 17)" 
                }}
        >

            <div className="modal-contenido">
                <div className="modal-header" 
                    style={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center", 
                        borderBottom: "1px solid #eee", 
                        paddingBottom: "10px", 
                        marginBottom: "15px" 
                    }}>

                    <h3>{titulo}</h3>
                    <button type="button" onClick={onClose} 
                        style={{ 
                            background: "none",
                            border: "none", 
                            fontSize: "24px", 
                            cursor: "pointer", 
                            color:"#ffff"
                            }}
                            >x</button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </dialog>
    );
}

export default Modal;

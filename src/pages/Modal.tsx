import React, { useState, useEffect } from "react";

// Define the props for the Modal component
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (inputValue: string) => void;
    initialReferralId: string; // Add initialReferralId prop to receive referralId from parent
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, initialReferralId = "" }) => {
    const [inputValue, setInputValue] = useState<string>(initialReferralId);
    const [error, setError] = useState<string>('');

    // Handle input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setError(''); // Clear error on input change
    };

    useEffect(() => {
        setInputValue(initialReferralId);  // Re-initialize inputValue if initialReferralId changes (e.g. when the modal is re-opened)
    }, [initialReferralId]);

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!inputValue.trim()) {
            setError('Please enter a valid referral address.'); // Set error message
            // onSubmit(inputValue); // Pass input value to parent on submit
            // onClose(); // Close modal
        } else {
            // alert('Please enter a value');
            onSubmit(inputValue); // Pass input value to parent on submit
            setInputValue(''); // Clear input after submission
            onClose(); // Close modal
        }
    };

    if (!isOpen) return null;

    return (
        <div style={overlayStyles}>
            <div style={modalStyles}>
                <h2>Enter your Referral Address</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter Referral ID..."
                        style={error ? { ...inputStyles, borderColor: 'red' } : inputStyles}
                    // style={inputStyles}
                    />
                    {error && <p style={errorTextStyles}>{error}</p>} {/* Display error message */}
                    <div>
                        <button type="submit" style={buttonStyles}>Submit</button>
                        <button type="button" onClick={onClose} style={buttonStyles}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Simple styles for modal and overlay
const overlayStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

const modalStyles: React.CSSProperties = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    width: "300px",
    textAlign: "center",
};

const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',  // Adjust font size
    color: '#333',     // Text color
    fontFamily: 'Arial, sans-serif', // Font family for text
};


const buttonStyles: React.CSSProperties = {
    padding: "8px 16px",
    margin: "5px",
    borderRadius: "4px",
    border: "1px solid #007bff",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
};

const errorTextStyles: React.CSSProperties = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
};
export default Modal;

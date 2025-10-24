import React from 'react';

interface AlertBoxProps {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
}

const AlertBox: React.FC<AlertBoxProps> = ({ message, type }) => {
    const getAlertClass = () => {
        switch (type) {
            case 'success':
                return 'alert-success';
            case 'error':
                return 'alert-error';
            case 'info':
                return 'alert-info';
            case 'warning':
                return 'alert-warning';
            default:
                return '';
        }
    };

    return (
        <div className={`alert-box ${getAlertClass()}`}>
            {message}
        </div>
    );
};

export default AlertBox;
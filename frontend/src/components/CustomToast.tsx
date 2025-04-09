import { Toast, ToastContainer } from 'react-bootstrap';
import { Icon } from '@iconify-icon/react';

interface CustomToastProps {
  show: boolean;
  onClose: () => void;
  message: string;
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
  delay?: number;
}

// Configuração dos ícones e cores
const toastConfig = {
  primary: {
    icon: 'mdi:information',
    color: 'var(--color-primary)'
  },
  success: {
    icon: 'mdi:check-circle',
    color: 'var(--color-success)'
  },
  danger: {
    icon: 'mdi:alert-circle',
    color: 'var(--color-danger)'
  },
  warning: {
    icon: 'mdi:alert',
    color: 'var(--color-warning)'
  },
  info: {
    icon: 'mdi:information',
    color: 'var(--color-info)'
  }
};

const CustomToast: React.FC<CustomToastProps> = ({ 
  show, 
  onClose, 
  message, 
  variant = 'primary', 
  delay = 3000 
}) => {
  const config = toastConfig[variant];

  return (
    <ToastContainer 
      position="top-end" 
      className="p-3"
      style={{ zIndex: 9999 }}
    >
      <Toast 
        show={show} 
        onClose={onClose}
        delay={delay}
        autohide
        style={{
          borderRadius: '12px',
          backgroundColor: '#ffffff',
          color: '#2a2a2a',
          border: 'none',
          paddingRight: '12px'
        }}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        className='shadow-sm'
      >
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center p-2">
            <Icon 
              icon={config.icon} 
              style={{
                fontSize: '24px',
                color: config.color,
                marginRight: '12px'
              }} 
            />
            <div className="toast-body" style={{ padding: 0 }}>
              {message}
            </div>
          </div>
          <button 
            type="button" 
            className="btn-close me-2 m-auto" 
            onClick={onClose}
            aria-label="Close"
            style={{
              filter: 'invert(0.5)'
            }}
          />
        </div>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
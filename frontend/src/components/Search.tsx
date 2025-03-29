import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Icon } from '@iconify-icon/react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import CustomToast from './CustomToast';

const SearchBar = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastVariant, setToastVariant] = useState<'primary' | 'success' | 'danger' | 'warning' | 'info'>('primary');

  useEffect(() => {
    if (transcript) {
      setSearchQuery(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setToastMessage('Seu navegador não suporta reconhecimento de voz.');
      setToastVariant('danger');
      setShowToast(true);
    } else if (!isMicrophoneAvailable) {
      setToastMessage('Microfone não disponível. Por favor, verifique as permissões.');
      setToastVariant('warning');
      setShowToast(true);
    }
  }, [browserSupportsSpeechRecognition, isMicrophoneAvailable]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Pesquisando por:', searchQuery);
  };

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: false,
        language: 'pt-BR'
      }).catch((error) => {
        console.error('Erro ao iniciar reconhecimento de voz:', error);
        setToastMessage('Erro ao acessar o microfone. Verifique as permissões.');
        setToastVariant('danger');
        setShowToast(true);
      });
    }
  };

  return (
    <>
      <Form 
        onSubmit={handleSearchSubmit} 
        className="d-flex align-items-center position-relative"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Icon 
          icon="material-symbols:search"
          className="position-absolute"
          style={{
            fontSize: '22px',
            left: '10px',
            color: '#00000066',
          }}
        />
        
        <Form.Control
          type="search"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-grow-1"
          style={{
            borderRadius: '14px',
            paddingLeft: '38px',
            paddingRight: browserSupportsSpeechRecognition && isMicrophoneAvailable ? '38px' : '38px',
            backgroundColor: '#E7ECE6',
            border: 'none',
            fontSize: '15px',
            minWidth: '120px',
            height: '38px',
          }}
          disabled={!browserSupportsSpeechRecognition || !isMicrophoneAvailable}
        />
        
        {browserSupportsSpeechRecognition && isMicrophoneAvailable && (
          <Icon 
            icon={listening ? "material-symbols:mic-off" : "material-symbols:mic"}
            className="position-absolute"
            onClick={toggleListening}
            style={{
              fontSize: '22px',
              right: '10px',
              color: listening ? '#23BC60' : '#00000066',
              cursor: 'pointer',
            }}
            aria-label={listening ? "Parar gravação" : "Iniciar gravação"}
            role="button"
            tabIndex={0}
          />
        )}
      </Form>
      
      <CustomToast
        show={showToast}
        onClose={() => setShowToast(false)}
        message={toastMessage}
        variant={toastVariant}
      />
    </>
  );
}

export default SearchBar;
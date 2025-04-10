import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Icon } from '@iconify-icon/react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import CustomToast from './CustomToast';
import './Search.css';

const SearchBar = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'primary' | 'success' | 'danger' | 'warning' | 'info'>('primary');

  useEffect(() => {
    if (transcript) {
      setSearchQuery(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setToastMessage('Seu navegador não suporta reconhecimento de voz.');
      setToastVariant('info');
      setShowToast(true);
    } else if (!isMicrophoneAvailable) {
      setToastMessage('Microfone não disponível. Você ainda pode digitar sua pesquisa.');
      setToastVariant('info');
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
      }).catch((error?: unknown) => {
        console.error('Erro ao iniciar reconhecimento de voz:', error);
        setToastMessage('Erro ao acessar o microfone. Você ainda pode digitar sua pesquisa.');
        setToastVariant('info');
        setShowToast(true);
      });
    }
  };

  return (
    <div className='container-search'>
      <Form 
        onSubmit={handleSearchSubmit} 
        className="d-flex align-items-center position-relative search-bar-customizado"
        style={{marginRight: '45px'}}
      >
        
        <Form.Control
          type="search"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-grow-1"
          style={{
            borderRadius: '14px',
            paddingLeft: '20px',
            paddingRight: '38px',
            border: 'none',
            fontSize: '15px',
            height: '38px',
          }}
        />

          <Button
            type="submit"
            variant="link"
            className='submit-button'
          >
            <Icon 
              icon="material-symbols:search"
              style={{
                fontSize: '22px',
              }}
            />
          </Button>
        
        {browserSupportsSpeechRecognition && isMicrophoneAvailable && (
          <Icon 
            icon={listening ? "material-symbols:mic-off" : "material-symbols:mic"}
            className="position-absolute"
            onClick={toggleListening}
            style={{
              fontSize: '22px',
              right: '10px',
              color: listening ? 'var(--color-secondary)' : '#00000066',
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
    </div>
  );
}

export default SearchBar;
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Icon } from '@iconify-icon/react';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }

  interface SpeechRecognitionEvent {
    results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionError {
    error: string;
    message: string;
  }
}

export {};

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Pesquisando por:', searchQuery);
  };

  const startListening = () => {
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'pt-BR';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.start();

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
      };

      recognition.onerror = (event: SpeechRecognitionError) => {
        console.error('Erro no reconhecimento de fala:', event.error);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      setIsListening(true);
    } else {
      console.error('A API de reconhecimento de fala não é suportada neste navegador.');
    }
  };

  return (
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
          paddingRight: '38px',
          backgroundColor: '#E7ECE6',
          border: 'none',
          fontSize: '15px',
          minWidth: '120px',
          height: '38px',
        }}
      />
      <Icon 
        icon={isListening ? "material-symbols:mic-off" : "material-symbols:mic"}
        className="position-absolute"
        style={{
          fontSize: '22px',
          right: '10px',
          color: '#00000066',
          cursor: 'pointer',
        }}
        onClick={startListening}
      />
    </Form>
  );
}

export default SearchBar;
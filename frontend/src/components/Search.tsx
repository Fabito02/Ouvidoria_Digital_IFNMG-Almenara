import { useState, useEffect } from 'react';
import { Input } from "../components/ui/input";
import { Button } from '../components/ui/button';
import { Icon } from '@iconify-icon/react';
import { toast } from 'sonner';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
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

  useEffect(() => {
    if (transcript) {
      setSearchQuery(transcript);
    }
  }, [transcript]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Pesquisando por:', searchQuery);
  };

  const toggleListening = () => {
    if (!browserSupportsSpeechRecognition) {
      toast.info('Seu navegador não suporta reconhecimento de voz.');
      return;
    }
    if (!isMicrophoneAvailable) {
      toast.warning('Microfone não disponível. Você ainda pode digitar sua pesquisa.');
      return;
    }
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: false,
        language: 'pt-BR'
      }).catch((error?: unknown) => {
        console.error('Erro ao iniciar reconhecimento de voz:', error);
        toast.error('Erro ao acessar o microfone. Você ainda pode digitar sua pesquisa.');
      });
    }
  };

  return (
    <div className="container-search">
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center relative search-bar-customizado"
        style={{ marginRight: '45px' }}
      >
        <Input
          type="search"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-grow"
          style={{
            borderRadius: '14px',
            fontSize: '15px',
            height: '38px',
          }}
        />

        <Button
          type="submit"
          variant="ghost"
          className="submit-button"
          size="icon"
        >
          <Icon
            icon="material-symbols:search"
            style={{ fontSize: '22px' }}
          />
        </Button>

        <Icon
          icon={listening ? "material-symbols:mic-off" : "material-symbols:mic"}
          className="absolute right-2 microphone-icon"
          onClick={toggleListening}
          style={{
            fontSize: '22px',
            color: listening ? 'var(--color-secondary)' : '#00000066',
            cursor: 'pointer',
          }}
          aria-label={listening ? "Parar gravação" : "Iniciar gravação"}
          role="button"
          tabIndex={0}
        />
      </form>
    </div>
  );
};

export default SearchBar;

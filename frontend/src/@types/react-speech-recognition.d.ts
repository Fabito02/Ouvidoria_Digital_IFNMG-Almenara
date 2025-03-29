// src/@types/react-speech-recognition.d.ts
declare module 'react-speech-recognition' {
    interface SpeechRecognitionOptions {
      continuous?: boolean;
      language?: string;
      interimResults?: boolean;
    }
  
    interface ListeningOptions {
      continuous?: boolean;
      language?: string;
    }
  
    interface UseSpeechRecognitionOptions {
      transcribing?: boolean;
      clearTranscriptOnListen?: boolean;
      commands?: any[];
    }
  
    export interface SpeechRecognition {
      startListening(options?: ListeningOptions): Promise<void>;
      stopListening(): Promise<void>;
      abortListening(): Promise<void>;
      getRecognition(): any;
      applyPolyfill(polyfill: any): void;
    }
  
    export interface UseSpeechRecognitionReturn {
      transcript: string;
      interimTranscript: string;
      finalTranscript: string;
      listening: boolean;
      resetTranscript: () => void;
      browserSupportsSpeechRecognition: boolean;
      isMicrophoneAvailable: boolean;
    }
  
    const SpeechRecognition: SpeechRecognition;
    export function useSpeechRecognition(
      options?: UseSpeechRecognitionOptions
    ): UseSpeechRecognitionReturn;
  
    export default SpeechRecognition;
  }
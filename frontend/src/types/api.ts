export type Usuario = {
    User_ID?: number;
    Nome: string;
    Email: string;
    Telefone?: string | null;
    Foto_Perfil?: string | null;
    SIAPE?: string | null;
    Tipo: 'servidor' | 'discente' | 'docente' | 'direção' | 'outro';
    Data_Criacao?: Date;
    Role: 'user' | 'admin';
    Senha: string;
  };

# Ouvidoria Digital IFNMG - Almenara


## Etapas de configuração do dispositivo para o uso da aplicação local
- - -

### Requisitos:


**• Linux**

Utilize alguma um Linux, como ArchLinux, Fedora, ou Ubuntu. Outra opção é utilizar o WSL no Windows, mas se atente ao fato de que, ao utilizar o WSL, será possível notar uma perda significante no desempenho, principalmente em dispositivos de baixo custo em comparação ao sistema operacional nativo, e adicionará mais passos de configuração.


**• Git**

ArchLinux

```bash
sudo pacman -S git
```

Fedora

```bash
sudo dnf install git
```

Ubuntu e derivados

```bash
sudo apt install git
```


**• Npm e Node.js**

ArchLinux

```bash
sudo pacman -S npm nodejs
```

Fedora

```bash
sudo dnf install nodejs npm
```

Ubuntu e derivados

```bash
sudo apt install npm nodejs
```


**• Docker**

Arch Linux

sudo pacman -S docker
sudo systemctl enable --now docker
sudo usermod -aG docker $USER

Fedora

```bash
sudo dnf install docker docker-compose
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
```

Ubuntu e derivados

```bash
sudo apt install docker.io docker-compose
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
```

*Reinicie a sessão para aplicar as permissões.

Teste a instalação:

```bash
docker run hello-world
```

### Clonagem do repositório e configuração do ambiente:


**• Clone o repositório**

```bash
git clone https://github.com/Fabito02/Ouvidoria_Digital_IFNMG-Almenara.git
```


**• Abra a pasta**

```bash
cd 'Ouvidoria_Digital_IFNMG-Almenara'
```


**• Abra a pasta "frontend" e execute a instalação das dependências**

```bash
cd frontend
npm install
```

Aguarde a instalação finalizar

**• Execute a aplicação em um servidor local**

```bash
npm run dev
```

---

## Criando uma Branch no Git

### Etapas para criar uma nova branch no Git
- - -

**Requisitos:**

**• Git**

---

### Criando uma Branch no Git

**• Verificar em qual branch você está**

Antes de criar uma nova branch, é bom saber em qual branch você se encontra no momento. Para isso, utilize o comando:

```bash
git branch
```

Antes de seguir para o passo de criação da sua nova branch, certifique-se de estar na branch **main**, pois ela deve ser utilizada como base para a branch que será criada. A branch atual estará marcada com um `*`.

Caso não esteja na branch **main**, execute o comando:

```bash
git checkout main
```

**• Criar uma nova branch**

Para criar uma nova branch, utilize o comando abaixo:

```bash
git branch minha-nova-branch
```

Isso cria a nova branch, mas você ainda não mudou para ela. Para mudar para a nova branch, execute o próximo passo.

**• Mudar para a nova branch**

Agora, para mudar para a branch recém-criada, utilize o comando:

```bash
git checkout minha-nova-branch
```

Ou, se você quiser criar e já mudar para a nova branch em um único comando:

```bash
git checkout -b minha-nova-branch
```


**• Confirmar a troca de branch**

Para verificar se você está na nova branch, utilize o comando novamente:

```bash
git branch
```

Agora o `*` deve estar na sua nova branch!

---

### Trabalhando na Nova Branch

**• Adicionar as alterações**

Faça as modificações que precisar no código e adicione as mudanças:

```bash
git add .
```


**• Comitar as alterações**

Depois de adicionar os arquivos, faça o commit com uma mensagem descritiva:

```bash
git commit -m "Adicionando minha nova feature"
```

***OBS: Esta parte pode ser feita de forma gráfica pelo Visual Studio Code**

---

### Enviando a Branch para o Repositório Remoto

**• Enviar a branch para o GitHub**

Para enviar a branch recém-criada para o repositório remoto, utilize:

```bash
git push -u origin minha-nova-branch
```

***OBS: Esta parte pode ser feita de forma gráfica pelo Visual Studio Code**

---

### Resumo dos Comandos

```bash
git branch minha-nova-branch        # Cria a branch
git checkout minha-nova-branch      # Muda para a branch
git add .                            # Adiciona mudanças
git commit -m "Mensagem do commit"   # Faz o commit
git push -u origin minha-nova-branch # Envia a branch para o repositório remoto
```

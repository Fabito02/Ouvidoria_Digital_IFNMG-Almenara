import { useEffect, useRef, useState } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import { Input } from "../../components/ui/input"
import { Checkbox } from "../../components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import Button from "../../components/buttons/Button"

const Elogio = () => {
  const [anonimo, setAnonimo] = useState(false)
  const [tipoReclamacao, setTipoReclamacao] = useState("")
  const editorRef = useRef<Quill | null>(null)

  useEffect(() => {
    document.title = "Enviar elogio"

    if (!editorRef.current) {
      editorRef.current = new Quill("#editor", {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }, { header: "3" }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["bold", "italic", "underline", "strike"],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            ["blockquote", "code-block"],
            ["link", "image", "video"],
            ["clean"],
          ],
        },
      })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const editor = document.querySelector("#editor") as HTMLElement
    const content = editor.innerHTML
    console.log(content)
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-6 mt-10 mb-5">
        <h1 className="text-4xl font-semibold mb-10">Elogio</h1>

        <div>
          <h3 className="mb-1">Deseja fazer o elogio de forma anônima?</h3>
          <Checkbox id="anonimo" checked={anonimo} onCheckedChange={(checked: boolean) => setAnonimo(checked)} />
        </div>

        {!anonimo && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="mb-1">Nome</h3>
              <Input id="nome" type="text" placeholder="Digite seu nome" required />
            </div>
            <div>
              <h3 className="mb-1">E-mail</h3>
              <Input id="email" type="email" placeholder="Digite seu e-mail" required />
            </div>
            <div className="md:col-span-1">
              <h3 className="mb-1">Telefone</h3>
              <Input id="telefone" type="tel" placeholder="(00) 00000-0000" />
            </div>
          </div>
        )}

        <div>
          <h3 className="mb-1">Tipo de Elogio</h3>
          <Select name="tipoElogio" onValueChange={(value) => setTipoReclamacao(value)}>
            <SelectTrigger className="custom-select">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent className="custom-select-content">
              <SelectItem value="infraestrutura">Estrutura e Espaços</SelectItem>
              <SelectItem value="atendimento">Atendimento</SelectItem>
              <SelectItem value="servico">Serviço</SelectItem>
              <SelectItem value="seguranca">Segurança</SelectItem>
              <SelectItem value="higiene">Higiene</SelectItem>
              <SelectItem value="alimentacao">Alimentação</SelectItem>
              <SelectItem value="equipamentos">Equipamentos</SelectItem>
              <SelectItem value="docentes">Docentes</SelectItem>
              <SelectItem value="servidores">Servidores</SelectItem>
              <SelectItem value="acessibilidade">Acessibilidade</SelectItem>
              <SelectItem value="eventos">Eventos</SelectItem>
              <SelectItem value="burocracia">Burocracia</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {tipoReclamacao === "infraestrutura" && (
          <div>
            <h3 className="mb-1">Área do Campus</h3>
            <Select name="areaCampus">
              <SelectTrigger className="custom-select">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="custom-select-content">
                <SelectItem value="portaria">Portaria</SelectItem>
                <SelectItem value="biblioteca">Biblioteca</SelectItem>
                <SelectItem value="setor-administrativo">Setor Administrativo</SelectItem>
                <SelectItem value="predio-pedagogico-1">Prédio Pedagógico I</SelectItem>
                <SelectItem value="auditório">Auditório</SelectItem>
                <SelectItem value="semirresidencial">Semirresidencial</SelectItem>
                <SelectItem value="nucleo-assuntos-estudantis">Núcleo de Assuntos Estudantis</SelectItem>
                <SelectItem value="lanchonete">Lanchonete</SelectItem>
                <SelectItem value="refeitorio">Refeitório</SelectItem>
                <SelectItem value="nucleo-estudos-agroecologia">Núcleo de Estudos em Agroecologia</SelectItem>
                <SelectItem value="predio-pedagogico-2">Prédio Pedagógico II</SelectItem>
                <SelectItem value="moradia-estudantil">Moradia Estudantil - Residencial</SelectItem>
                <SelectItem value="laboratorio-solos">Laboratório de Solos</SelectItem>
                <SelectItem value="ginasio">Ginásio</SelectItem>
                <SelectItem value="suinocultura">Suinocultura</SelectItem>
                <SelectItem value="casa-racao">Casa de Ração</SelectItem>
                <SelectItem value="laboratorio-campo">Laboratório de Campo</SelectItem>
                <SelectItem value="bovinocultura">Bovinocultura</SelectItem>
                <SelectItem value="avicultura">Avicultura</SelectItem>
                <SelectItem value="casa-maquinas">Casa de Máquinas</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <h3 className="mb-1">Título</h3>
          <Input id="titulo" type="text" placeholder="Digite o título do elogio" required />
        </div>

        <div>
          <h3 className="mb-1">Descreva seu elogio</h3>
          <div
            id="editor"
            className="inputElogio border border-border bg-background quill-textarea"
          ></div>
        </div>

        <div className="flex justify-start">
          <Button
            type="submit"
            texto="Enviar elogio"
            icon="material-symbols:send-rounded"
            iconPosition="right"
          />
        </div>
      </form>
    </div>
  )
}

export default Elogio
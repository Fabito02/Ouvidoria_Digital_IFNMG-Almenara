import { useEffect, useRef, useState } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import { Input } from "../../components/ui/input"
import { Checkbox } from "../../components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import Button from "../../components/buttons/Button"

const Sugestao = () => {
  const [anonimo, setAnonimo] = useState(false)
  const editorRef = useRef<Quill | null>(null)

  useEffect(() => {
    document.title = "Enviar sugestão"

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
        <h1 className="text-4xl font-semibold mb-10">Sugestão</h1>

        <div>
          <h3 className="mb-1">Deseja fazer a sugestão de forma anônima?</h3>
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
          <h3 className="mb-1">Tipo de Sugestão</h3>
          <Select name="tipoSugestao">
            <SelectTrigger className="custom-select">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent className="custom-select-content">
              <SelectItem value="melhoria-infraestrutura">Melhoria na Infraestrutura</SelectItem>
              <SelectItem value="novos-servicos">Novos Serviços</SelectItem>
              <SelectItem value="processos-burocraticos">Otimização de Processos</SelectItem>
              <SelectItem value="eventos-atividades">Sugestão de Eventos e Atividades</SelectItem>
              <SelectItem value="tecnologia-sistemas">Aprimoramento Tecnológico</SelectItem>
              <SelectItem value="alimentacao">Sugestões para Alimentação</SelectItem>
              <SelectItem value="espacos-estudo">Melhoria nos Espaços de Estudo</SelectItem>
              <SelectItem value="sustentabilidade">Ações de Sustentabilidade</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="mb-1">Título</h3>
          <Input id="titulo" type="text" placeholder="Digite o título da sugestão" required />
        </div>

        <div>
          <h3 className="mb-1">Descreva sua sugestão</h3>
          <div
            id="editor"
            className="inputSugestao border border-border bg-background quill-textarea"
          ></div>
        </div>

        <div className="flex justify-start">
          <Button
            type="submit"
            texto="Enviar sugestão"
            icon="material-symbols:send-rounded"
            iconPosition="right"
          />
        </div>
      </form>
    </div>
  )
}

export default Sugestao
import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import Button from "../../components/buttons/Button";

const Denuncia = () => {
  const [anonimo, setAnonimo] = useState(false);
  const editorRef = useRef<Quill | null>(null);

  useEffect(() => {
    document.title = "Enviar denúncia";

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
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const editor = document.querySelector("#editor") as HTMLElement;
    const content = editor.innerHTML;
    console.log(content);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-6 mt-10 mb-5">
        <h1 className="text-4xl font-semibold mb-10">Denúncia</h1>

        <div>
          <h3 className="mb-1">Deseja fazer a denúncia de forma anônima?</h3>
          <Checkbox
            id="anonimo"
            checked={anonimo}
            className="data-[state=checked]:bg-[#16aa51] data-[state=checked]:border-[#16aa51]"
            onCheckedChange={(checked: boolean) => setAnonimo(checked)}
          />
        </div>

        {!anonimo && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="mb-1">Nome</h3>
              <Input
                id="nome"
                type="text"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div>
              <h3 className="mb-1">E-mail</h3>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="md:col-span-1">
              <h3 className="mb-1">Telefone</h3>
              <Input id="telefone" type="tel" placeholder="(00) 00000-0000" />
            </div>
          </div>
        )}

        <div>
          <h3 className="mb-1">Tipo de Denúncia</h3>
          <Select name="tipoDenuncia">
            <SelectTrigger className="custom-select">
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent className="custom-select-content">
              <SelectItem value="assedio-moral">Assédio Moral</SelectItem>
              <SelectItem value="assedio-sexual">Assédio Sexual</SelectItem>
              <SelectItem value="discriminacao">
                Discriminação (Racial, de Gênero, etc.)
              </SelectItem>
              <SelectItem value="violencia">
                Violência ou Agressão Física
              </SelectItem>
              <SelectItem value="ameaça">Ameaça ou Intimidação</SelectItem>
              <SelectItem value="bullying">
                Bullying ou Cyberbullying
              </SelectItem>
              <SelectItem value="negligencia">
                Negligência ou Abuso de Autoridade
              </SelectItem>
              <SelectItem value="corrupcao">
                Corrupção, Fraude ou Irregularidades
              </SelectItem>
              <SelectItem value="abuso-poder">Abuso de Poder</SelectItem>
              <SelectItem value="desvios-eticos">
                Desvios de Conduta ou Ética
              </SelectItem>
              <SelectItem value="infraestrutura-perigosa">
                Infraestrutura Perigosa ou Insegura
              </SelectItem>
              <SelectItem value="conduta-inadequada">
                Conduta Inadequada de Docentes ou Servidores
              </SelectItem>
              <SelectItem value="higiene">
                Falta de Higiene em Ambientes Críticos
              </SelectItem>
              <SelectItem value="descarte-irregular">
                Descarte Irregular de Resíduos
              </SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="mb-1">Título</h3>
          <Input
            id="titulo"
            type="text"
            placeholder="Digite o título da denúncia"
            required
          />
        </div>

        <div>
          <h3 className="mb-1">Descreva sua denúncia</h3>
          <div
            id="editor"
            className="inputDenuncia border border-border bg-background quill-textarea"
          ></div>
        </div>

        <div className="flex justify-start">
          <Button
            type="submit"
            texto="Enviar Denúncia"
            icon="material-symbols:send-rounded"
            iconPosition="right"
          />
        </div>
      </form>
    </div>
  );
};

export default Denuncia;

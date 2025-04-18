import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { BlankLayout } from "../../components/BlankLayout/BlankLayout";
import { Input } from "../..//components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import  Button from "../../components/buttons/Button";
import "./Perfil.css";

const Perfil = () => {
  useEffect(() => {
    document.title = "Perfil";
  }, []);

  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [name, setName] = useState("Seu Nome");
  const [email, setEmail] = useState("email@exemplo.com");
  const [phone, setPhone] = useState("(00) 00000-0000");

  const navigate = useNavigate();

  const handlePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, profilePic });
  };

  return (
    <BlankLayout showFooter={false} showHeader={true} showNavbar={true}>
      <div className="py-10 px-4 max-w-3xl mx-auto">
        <Card className="p-2 border-0 card-configuracoes shadow-none">
          <CardContent className="flex flex-col gap-6">
            <div className="flex justify-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden">
              <img
                src={profilePic || "/user_placeholder.png"}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
              <label
                htmlFor="profilePicInput"
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
              >
                <Icon icon="mdi:pencil" width={32} className="text-white" />
              </label>
              <input
                id="profilePicInput"
                type="file"
                accept="image/*"
                onChange={handlePicChange}
                className="hidden"
              />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <h3 className="mb-1">Nome</h3>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <h3 className="mb-1">Perfil</h3>
                <Select onValueChange={(value) => console.log(value)}>
                  <SelectTrigger className="custom-select">
                    <SelectValue placeholder="Selecione seu perfil" />
                  </SelectTrigger>
                  <SelectContent className="custom-select-content">
                    <SelectItem value="servidor">Servidor</SelectItem>
                    <SelectItem value="discente">Discente</SelectItem>
                    <SelectItem value="docente">Docente</SelectItem>
                    <SelectItem value="direcao">Direção</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="mb-1">Email</h3>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@exemplo.com"
                />
              </div>

              <div>
                <h3 className="mb-1">Telefone</h3>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  type="button"
                  color="secondary"
                  onClick={() => navigate("/alterar-senha")}
                  className="w-[100%] md:w-[50%]"
                  texto="Alterar Senha"
                >
                  <Icon icon="mdi:lock-reset" className="mr-2" />
                </Button>

                <Button type="submit" className="w-[100%] md:w-[50%]" texto="Salvar Alterações">
                  <Icon icon="material-symbols-light:save" className="mr-2" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </BlankLayout>
  );
};

export default Perfil;
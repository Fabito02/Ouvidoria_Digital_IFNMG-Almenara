import Button from "@/components/buttons/Button"
import { Input } from "@/components/ui/input"
import { Icon } from "@iconify-icon/react"
import { BlankLayout } from '../components/BlankLayout/BlankLayout'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import './LoginERegistrar.css'

const Login = () => {
  useEffect(() => {
    document.title = "Login"
  })

  return (
    <BlankLayout showFooter={false} showHeader={false} showNavbar={false} removeBodyPadding>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="col-lg-5 box">
            <h1 className="title">Bem Vindo!</h1>
            <p className="subtitle mt-4">
              Caso você não possua uma conta,<br />
              crie com o botão abaixo
            </p>
            <Link to="/registrar" className="mt-2">
              <Button 
                outline
                full_rounded
                color="white"
                className="mt-2"
              >
                REGISTRAR
              </Button>
            </Link>
          </div>

          <div className="col-lg-7 formulario">
            <div className="max-w-md mx-auto w-full">
              <h1 className="title2 mb-4">LOGIN</h1>
              
              <div className="mb-5">
                <img 
                  src="/google-icon.svg" 
                  alt="Google logo" 
                  className="w-10 h-10 cursor-pointer mx-auto" 
                />
              </div>

              <p className="mb-4">ou use seu e-mail para entrar</p>

              <form className="px-15">

                <div className="relative mb-3">
                  <Icon className="iconeForm" icon="material-symbols:stacked-email-rounded" />
                  <Input
                    className="custom-input"
                    type="email"
                    placeholder="E-mail"
                  />
                </div>

                <div className="relative mb-3">
                  <Icon className="iconeForm" icon="material-symbols:password-rounded" />
                  <Input
                    className="custom-input"
                    type="password"
                    placeholder="Senha"
                  />
                </div>

                <div className="w-full flex justify-center">
                  <Button full_rounded style={{ width: "220px" }}>
                    ENTRAR
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BlankLayout>
  )
}

export default Login
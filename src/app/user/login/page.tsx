import LoginImg from '@/assets/Imagem.png'
import { Button } from '@/components/Button'
import * as Input from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Lock, LogIn, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex w-85 flex-1 flex-col items-center justify-center">
        <Logo className="w-full" />
        <div className="flex flex-col gap-6">
          <strong className="mt-20 text-center text-2xl font-medium">
            Faça seu login
          </strong>
          <form className="flex flex-col gap-2">
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-gray_hard" />
              </Input.Prefix>
              <Input.Control placeholder="E-mail" type="email" />
            </Input.Root>
            <Input.Root>
              <Input.Prefix>
                <Lock className="h-5 w-5 text-gray_hard" />
              </Input.Prefix>
              <Input.Control placeholder="Senha" type="password" />
            </Input.Root>
            <Button className="mt-2">Entrar</Button>
          </form>
          <Link
            href="/user/resetPassword"
            className="cursor-pointer text-center"
          >
            Esqueci minha senha
          </Link>
        </div>
        <Link
          href="/user/create"
          className="mt-20 flex items-center gap-2 text-orange"
        >
          <LogIn className="h-5 w-5" />
          Criar conta
        </Link>
      </div>
      <Image
        src={LoginImg}
        alt="Foto de um barbeiro cortando o cabelo de um cliente "
        width="0"
        height="0"
        className="flex-1"
      />
    </div>
  )
}

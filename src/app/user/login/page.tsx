import LoginImg from '@/assets/Imagem.png'
import * as Input from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Lock, Mail } from 'lucide-react'
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
          <form className="flex flex-col gap-4">
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-gray_hard" />
              </Input.Prefix>
              <Input.Control placeholder="E-mail" />
            </Input.Root>
            <Input.Root>
              <Input.Prefix>
                <Lock className="h-5 w-5 text-gray_hard" />
              </Input.Prefix>
              <Input.Control placeholder="Senha" />
            </Input.Root>
            <button>Entrar</button>
          </form>
          <span>Esqueci minha senha</span>
        </div>
        <Link href="/user/create">Criar conta</Link>
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

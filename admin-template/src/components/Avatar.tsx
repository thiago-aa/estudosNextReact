import Link from "next/link";
import useAuth from "../data/hook/useAuth";
import genericAvatar from '../../public/images/genericAvatar.webp'

interface AvatarProps {
  className?: string;
}

export default function Avatar(props: AvatarProps) {
  const {user} = useAuth();

  return (
    <Link href="/perfil">
      <img 
        src={user?.urlImage ?? `images/genericAvatar.webp`} 
        alt="Imagem do avatar do usuário" 
        className={`h-10 w-10 rounded-full justify-end ${props.className}`}
      />
    </Link>
  )
}

import { useRouter } from 'next/router'
import Link from 'next/link';

export default function BuscarNome() {

    const router = useRouter()
    const codigo = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h1>Rotas / {codigo} / {nome}</h1>
            <Link href="/rotas ">
                <button>Voltar</button>
            </Link>
        </div>
    )
}
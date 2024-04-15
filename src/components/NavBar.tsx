import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "tarefas" | "movimentacoes"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-blue-800 border-b-4 pb-2"

    return (
        <nav className="flex justify-between items-center px-4 py-2 bg-teal-500 w-full">
            <h1 className="text-4xl font-bold">Tá Pago</h1>
            <ul className="flex gap-14">
                <li className={active == "dashboard"? classActive : ""}>
                    <Link href="/">dashboard</Link>
                </li>
                <li className={active == "movimentacoes"? classActive : ""}>
                    <Link href="/movimentacoes">movimentações</Link>
                </li>
                <li className={active == "tarefas"? classActive : ""}>
                    <Link href="/tarefas">tarefas</Link>
                </li>
            </ul>
            <div className="w-16 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}
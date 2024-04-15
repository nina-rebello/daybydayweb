import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { TarefaItem } from "./TarefaItem";
import Link from "next/link";
import { getTarefas } from "../actions/tarefas/get";

interface Tarefa {
  id: number,
  nome: string,
  icone: string
}

export default async function Tarefas() {

  const tarefas: Tarefa[] = await getTarefas()

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <NavBar active="tarefas" />
      
      <section className="bg-slate-900 rounded min-w-[500px] p-6 m-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold" >Tarefas Cadastradas</h2>
          <Link href="/tarefas/new">
            <Button startContent={<Plus />} color="primary">nova tarefa</Button>
          </Link>
        </div>
        <div id="data">
          {tarefas.map(tarefa => <TarefaItem tarefa={tarefa} />)}
        </div>
      </section>

    </main>
  );
}

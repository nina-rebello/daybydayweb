"use client"

import { DropDownActions } from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/tarefas/destroy";
interface TarefasItemProps {
    tarefa: {
        id: number,
        nome: string,
        icone: string
    }
}

export function TarefaItem(props: TarefasItemProps){
    const { tarefa } = props

    function handleDelete(){
        toast.promise(
            destroy(tarefa.id),
             {
               loading: 'excluindo...',
               success: "Excluída com sucesso!",
               error: "Erro ao excluir.",
             }
           );
    }

    return (
        <div key={tarefa.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center">
                <Icon name={tarefa.icone} />
                <span>{tarefa.nome}</span>
            </div>
           
            <DropDownActions onDelete={handleDelete} />
        </div>
    )
}
"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 1000))
    
    const data = {
      nome: formData.get("nome"),
      icone: "cigarette"
    }

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/tarefa`, options)
    
    if (resp.ok){
      redirect("/tarefas")
    }

    if (resp.status == 400){
      return {
        messageNome: "Validação falhou"
      }
    }
    
  }

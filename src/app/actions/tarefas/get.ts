export async function getTarefas() {
    const resp = await fetch(`${process.env.API_BASE_URL}/tarefa`, { next: { revalidate: 0 } })
    return await resp.json()
}
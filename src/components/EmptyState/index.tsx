import "./empty-state.style.css";

export function EmptyState() {
    return (
        <section className='empty-state'>
            <p>Ainda não há tarefas cadastradas. Adicione para começar.</p>
            <img src="/favicon.png" alt="empt image" />
        </section>
    )
}
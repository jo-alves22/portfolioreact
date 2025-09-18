import './BlogPosts.css'

function BlogPosts() {
    // Posts de exemplo - você pode substituir por dados de uma API ou estado
    const posts = [
        {
            id: 3,
            title: "React Hooks: useState e useEffect na Prática",
            excerpt: "Aprenda como utilizar os hooks mais importantes do React com exemplos práticos e casos de uso reais.",
            date: "2024-01-15",
            tags: ["React", "JavaScript", "Hooks"],
            readTime: "5 min"
        },
        {
            id: 2,
            title: "CSS Grid vs Flexbox: Quando usar cada um?",
            excerpt: "Uma comparação detalhada entre CSS Grid e Flexbox, com exemplos práticos para cada situação.",
            date: "2024-01-10",
            tags: ["CSS", "Layout", "Frontend"],
            readTime: "8 min"
        },
        {
            id: 1,
            title: "Apresentação",
            excerpt: "Olá! Este é o meu espaço onde quero compartilhar minhas experiências e conhecimentos, tanto no âmbito profissional, quanto pessoal, dentro dos limites razoáveis m. A bagagem emocional pode ser de grande valia, nestes tempos conturbados. O tempo de liderança de equipe em uma empresa de tecnologia, me faz questionar métodos, atitudes de forma constante. Por ser um ambiente predominantemente jovem, me faz refletir sobre o papel do líder, que não é apenas cobrar resultados, mas sim, ser um facilitador, um mentor. Espero que gostem dos conteúdos que irei postar aqui.",
            date: "2024-01-05",
            tags: ["Node.js", "API", "Backend"],
            readTime: "12 min"
        }
    ]

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('pt-BR')
    }

    return (
        <section className="blog-posts">
            <div className="posts-grid">
                {posts.map(post => (
                    <article key={post.id} className="post-card">
                        <div className="post-header">
                            <h2 className="post-title">{post.title}</h2>
                            <div className="post-meta">
                                <span className="post-date">{formatDate(post.date)}</span>
                                <span className="post-read-time">{post.readTime} de leitura</span>
                            </div>
                        </div>
                        
                        <p className="post-excerpt">{post.excerpt}</p>
                        
                        <div className="post-footer">
                            <div className="post-tags">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <button className="read-more-btn">
                                Ler mais
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default BlogPosts
import "./PP1.css"

const PP1 = () => {
    return (
        <section className="pp1-section">
        <div className="pp1-e1" />
        <div className="pp1-e2" />
        <div className="pp1-e3" />
        <div className="pp1-e4" />
        
        <div className="pp1-here">
            <div className="pp1-text">
            <h1>Domine o método do Baby Shaggy e entregue cortes com estrutura</h1>
            <h2>Assista o vídeo e conheça o pensamento do Grifty para a criação cortes autênticos</h2>
            </div>

            <div className="pp1-video-container">
            <video controls width="100%" height="100%">
                <source src="" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
            </div>

            <p className="pp1-subtext">
            Dominar essas técnicas fez com que eu nunca mais me sentisse inseguro na hora de entregar cortes estruturados e com volume.
            </p>

            <button className="pp1-cta-button">
            Quero adquirir o curso
            </button>
        </div>
        </section>
    );
}

export default PP1
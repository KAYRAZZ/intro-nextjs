const Lesson = () => {

    return (
        <div className="py-5">
            <h1>Qu'est-ce que Next.js ?</h1>
            <div>
                <h2></h2>
                <p>
                    <mark>Next.js</mark> est un framework JavaScript open-source basé sur <mark>React</mark> utilisé pour le développement d'applications web côté client et côté serveur. Il permet de construire des applications web modernes et performantes avec des fonctionnalités telles que le rendu côté serveur {"(SSR)"}, le rendu statique, le pré-rendu des pages, le routage automatique, et bien plus encore.
                    <br /><br />
                    Le rendu côté serveur, signifie que les pages sont générées sur le serveur avant d'être envoyées au client, améliorant ainsi la performance et l'indexation des moteurs de recherche <mark>{"(SEO)"}</mark>. Next.js est livré avec un système de mise en <mark>cache automatique</mark>, ce qui signifie que les pages HTML générées par le serveur, sont mises en cache pour une utilisation ultérieure, afin d'éviter de générer à chaque fois les pages.
                </p>
            </div>
        </div>
    );
}

export default Lesson;
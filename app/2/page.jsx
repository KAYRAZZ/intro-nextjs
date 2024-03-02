const Lesson = () => {

    return (
        <div className="py-5">
            <h1>Pourquoi utiliser Next.js ?</h1>
            <div>
                <h2></h2>
                <p>
                    Next.js permet le rendu côté serveur {"(SSR)"}, ce qui signifie que les pages sont générées sur le serveur avant d'être envoyées au client, améliorant ainsi la performance et l'indexation des moteurs de recherche <mark>{"(SEO)"}</mark>. Next.js est livré avec un système de mise en <mark>cache automatique</mark>, ce qui signifie que les pages HTML générées par le serveur, sont mises en cache pour une utilisation ultérieure, afin d'éviter de générer à chaque fois les pages.
                </p>
            </div>
        </div>
    );
}

export default Lesson;
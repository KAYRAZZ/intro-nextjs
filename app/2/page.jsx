const Lesson = () => {

    return (
        <div className="py-5">
            <h1>Pourquoi utiliser Next.js ?</h1>
            <div>
                <h2></h2>
                <p>
                    Next.js permet le rendu côté serveur {`(SSR)`}, ce qui signifie que les pages sont générées sur le serveur avant d'être envoyées au client, améliorant ainsi la performance et l'indexation des moteurs de recherche {`(SEO)`}. En effet, Next.js est livré avec un système de mise en cache automatique, ce qui signifie que les pages HTML générées par le serveur, sont mises en cache pour une utilisation ultérieure, afin d'éviter de générer à chaque fois les pages.
                    <br /><br />
                    Next.js offre également un système de routage automatique basé sur la structure des dossiers et des fichiers, facilitant la création et la gestion des routes dans l'application.
                    Il est construit sur React, offrant ainsi toutes les fonctionnalités de React tout en ajoutant des fonctionnalités supplémentaires pour le développement web.
                </p>
            </div>
        </div>
    );
}

export default Lesson;
import FormatToCode from '../components/FormatToCode';

const Lesson = () => {

    return (
        <div id="1" className="py-5">
            <h1>Les extensions</h1>
            <div>
                <h2>JavaScript</h2>
                <p>
                    JavaScript {"(JS)"} est un langage de programmation standard utilisé pour créer du contenu dynamique sur les sites web. Il est largement utilisé pour manipuler le Document Object Model {"(DOM)"}, gérer les événements, créer des animations, effectuer des requêtes HTTP, et bien plus encore. JavaScript est interprété par le navigateur.
                    <br /><br />
                    Voici un exemple simple de JavaScript qui crée un élément h1, lui ajoute du texte, puis l'ajoute au corps de la page.
                </p>
                <FormatToCode language="js">
                    {`const h1 = document.createElement('h1');
h1.textContent = 'Hello World!';
document.body.appendChild(h1);`}
                </FormatToCode>
            </div>
            <div id="2">
                <h2>JSX</h2>
                <p>
                    JSX {"(JavaScript XML)"}, quant à lui, est une extension de syntaxe pour JavaScript. Il est principalement utilisé avec React, une bibliothèque JavaScript pour la construction d'interfaces utilisateur. JSX ressemble à HTML, mais il est intégré dans du JavaScript. Cela permet aux développeurs d'écrire des balises et des composants HTML-like directement dans leur code JavaScript.
                    <br /><br />
                    Voici un exemple de JSX qui crée un élément h1 avec du texte et le rend dans un composant / une page.
                </p>
                <FormatToCode language="jsx">
                    {"return <h1>Hello World!</h1>;"}
                </FormatToCode>
            </div>
            <div>
                <h2 id="3">La différence entre JS et JSX</h2>
                <p>
                    La différence entre les extensions de fichiers <mark>.js</mark> et <mark>.jsx</mark> réside principalement dans la façon dont le code est traité par les outils de développement.
                    <br /><br />
                    En général, les fichiers avec l'extension <mark>.jsx</mark> sont utilisés lorsque vous écrivez du code qui utilise la syntaxe JSX. Cependant, avec des outils modernes de développement JavaScript comme Babel et Webpack, vous pouvez également utiliser la syntaxe JSX dans des fichiers avec l'extension <mark>.js</mark>. Ces outils transpileront alors le code en JavaScript ordinaire que le navigateur peut comprendre.
                    <br /><br />
                    L'utilisation de l'extension <mark>.jsx</mark> peut aider à indiquer clairement que le fichier contient du JSX, ce qui peut rendre votre code plus facile à comprendre pour d'autres développeurs.
                    <br /><br />
                    Bien qu'il soit préférable de nommer vos fichiers contenant du JSX avec l'extension <mark>.jsx</mark> pour éviter les erreurs potentielles, le choix entre les deux extensions devient une question de préférence personnelle et des conventions de votre équipe de développement.
                </p>
            </div>
        </div>
    );
}

export default Lesson;
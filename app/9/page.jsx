import FormatToCode from "../components/FormatToCode";
import { GrStatusGood } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";

const Lesson = () => {

    return (
        <div id="1" className="py-5">
            <h1>Les server/client components</h1>
            <div>
                <h2>Server components</h2>
                <p>
                    Les Server Components sont des éléments d'interface utilisateur {"(UI)"} qui sont rendus côté serveur et envoyés au client sous forme de HTML. Les Server Components sont exécutés sur le serveur et peuvent interagir avec des ressources telles que des bases de données, des API externes, ou d'autres services back-end. <u>Par défault, les composants sont rendus côté serveur.</u>
                    <br /><br />
                    <span className="font-semibold">Le rendu côté serveur offre plusieurs avantages :</span>
                </p>

                <ol className="list-[circle] space-y-2 pt-2">
                    <li>Amélioration des performances en rapprochant la récupération des données du serveur.
                    </li>
                    <li>Sécurisation des données sensibles en les gardant du côté serveur.
                    </li>
                    <li>Mise en cache des résultats pour des performances améliorées.
                    </li>
                    <li>Affichage immédiat de la page et du contenu significatif sans attendre le JavaScript.
                    </li>
                </ol>

            </div>

            <div id="2">
                <h2>Client components</h2>
                <p>
                    Les Client Componants sont des composants qui sont rendus côté client. Ils sont utilisés pour les pages qui changent souvent. Les Client Componants vous permettent de faire des interfaces utilisateur interactive.
                </p>
                <FormatToCode language="jsx">
                    {`"use client"
export default function Page() {
  return <div onClick={alert("Je clique")}>Ma page</div>
};`}
                </FormatToCode>
                <p>
                    Dans cet exemple, le composant <mark>Page</mark> est rendu côté client. Lorsque l'utilisateur clique sur la page, une alerte s'affiche. Pour cela, il faut ajouter <mark>"use client"</mark> <u> tout en haut de la page</u> pour indiquer que ce composant doit être rendu côté client afin de pouvoir utiliser l'écouteur d'événement <mark>onClick</mark> ou les <mark>Hooks</mark> que l'on verra plus tard.
                    <br /><br />

                    Maintenant, si vous avez un composant qui est rendu côté client, tous les composants enfants de ce composant seront également rendus côté client.
                    <br /><br />

                    <span className="font-semibold">Il y a plusieurs avantages à effectuer le rendu côté client, notamment :
                    </span>
                </p>
                <ol className="list-[circle] space-y-2 pt-2">
                    <li>Permet d'utiliser useState {'(Hook)'}, useEffect {'(Hook)'} et les écouteurs d'événements, ce qui leur permet de fournir un retour immédiat à l'utilisateur et de mettre à jour l'interface utilisateur.
                    </li>
                    <li>Accès aux APIs du navigateur, comme la géolocalisation ou localStorage, ce qui vous permet de construire des interfaces utilisateur pour des cas d'utilisation spécifiques.
                    </li>
                </ol>
            </div>

            <div id="3">
                <h2>Résumé</h2>
                <p>
                    Voici un tableau qui résume les différences entre les deux types de composants.
                </p>
                <table className="tab">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Server Component</th>
                            <th>Client Component</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Récupérer des données serveur</td>
                            <td><GrStatusGood className="good" /></td>
                            <td><RxCrossCircled className="bad" /></td>
                        </tr>
                        <tr>
                            <td>Accéder aux ressources du backend {"(directement)"}</td>
                            <td><GrStatusGood className="good" /></td>
                            <td><RxCrossCircled className="bad" /></td>
                        </tr>
                        <tr>
                            <td>Conserver les informations sensibles sur le serveur {"(jetons d'accès, clés API, etc.)"}</td>
                            <td><GrStatusGood className="good" /></td>
                            <td><RxCrossCircled className="bad" /></td>
                        </tr>
                        <tr>
                            <td>Conserver les dépendances volumineuses sur le serveur / Réduire le JavaScript côté client</td>
                            <td><GrStatusGood className="good" /></td>
                            <td><RxCrossCircled className="bad" /></td>
                        </tr>
                        <tr>
                            <td>Ajouter de l'interactivité et des écouteurs d'événements {"(onClick(), onChange(), etc.)"}</td>
                            <td><RxCrossCircled className="bad" /></td>
                            <td><GrStatusGood className="good" /></td>
                        </tr>
                        <tr>
                            <td>Utiliser State et Lifecycle Effects {"(useState(), useReducer(), useEffect(), etc.)"}</td>
                            <td><RxCrossCircled className="bad" /></td>
                            <td><GrStatusGood className="good" /></td>
                        </tr>
                        <tr>
                            <td>Utiliser les API du navigateur uniquement</td>
                            <td><RxCrossCircled className="bad" /></td>
                            <td><GrStatusGood className="good" /></td>
                        </tr>
                        <tr>
                            <td>Utiliser des hooks personnalisés qui dépendent de l'état, des effets ou des API du navigateur uniquement</td>
                            <td><RxCrossCircled className="bad" /></td>
                            <td><GrStatusGood className="good" /></td>
                        </tr>
                        <tr>
                            <td>Utiliser les composants React Class</td>
                            <td><RxCrossCircled className="bad" /></td>
                            <td><GrStatusGood className="good" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Lesson;
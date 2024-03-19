import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

  return (
    <div id="1" className="py-5">
      <h1>Les composants</h1>
      <div>
        <h2>Qu'est-ce qu'un composant</h2>
        <p>
          Les composants vous permettent de découper l’interface utilisateur en éléments indépendants et réutilisables, vous permettant ainsi de considérer chaque élément de manière isolée. Il possède sa propre logique et sa propre apparence. Un composant peut être aussi petit qu'une balise bouton ou aussi grand qu'une page entière. L'un des principaux avantages des composants est leur réutilisabilité. Une fois défini, un composant peut être réutilisé n'importe où dans votre application, ce qui favorise la cohérence et la maintenabilité du code. Par convention, ils sont placés dans le dossier <mark>components</mark> à l'intérieur du dossier <mark>app</mark>. <u>Ils doivent obligatoirement commencer par une majuscule.</u>
        </p>
        <FormatToCode language="jsx">
          {`function MonBouton() {
  return (
    <button>Voici un bouton</button>
  );
}`}
        </FormatToCode>
      </div>
      <div id="2">
        <h2>Comment utiliser les composants</h2>
        <p>
          Les composants peuvent être utilisés dans d'autres composants ou dans d'autres pages. Voici une exemple, à partir du composant <mark>MonBouton</mark>.
        </p>
        <FormatToCode language="jsx">
          {`export default function Page() {
  return (
    <div>
      <h1>Bienvenue sur la page</h1>
      <MonBouton />
    </div>
  );
}`}
        </FormatToCode>

        <p>
          Noter également que <mark>{'<MonBouton />'}</mark> est <u>auto-fermante</u>, c'est-à-dire qu'il n'a pas de balise de fermeture.
          <br /><br />
          Il faut également exporter le composant pour pouvoir l'utiliser. Pour ce faire, il existe deux facon de le faire. La première est de déclarer une fonction et de l'exporter à la fin du fichier. La deuxième est de déclarer une fonction et de l'exporter directement.
        </p>

        <FormatToCode language="jsx">
          {`function MonBouton() {
  return (
    <button>Voici un bouton</button>
  );
};
export default MonBouton;

// -------- Autre façon de déclarer un composant --------
export default function MonBouton() ...`}
        </FormatToCode>

        <p>
          Pour utiliser le composant <mark>MonBouton</mark> dans un autre fichier, vous devez également l'importer. Pour ce faire, la ligne de l'importation doit être en haut du fichier où <mark>MonBoutonComponent</mark> est le nom du fichier qui contient le composant et <mark>MonBouton</mark> qui est le nom de la fonction. <u>Attention à ne pas écrire l'extension du fichier dans l'import.</u>
        </p>

        <FormatToCode language="jsx">
          {`import MonBouton from './components/MonBoutonComponent'
export default function Page() {
  return (
    <div>
      <h1>Bienvenue sur la page</h1>
      <MonBouton />
    </div>
  );
}`}
        </FormatToCode>
      </div>
      <p>
        Par contre, si votre composant/fonction n'est pas exporté par défaut, <u>vous devez l'importer avec des accolades</u>.
      </p>
      <FormatToCode language="jsx">
        {`export function MonBouton() ...
// ----------------
import { MonBouton } from './components/MonBoutonComponent'`}
      </FormatToCode>
    </div>
  );
}

export default Lesson;
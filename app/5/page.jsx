import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

  return (
    <div id="5-1" className="py-5">
      <h1>Utiliser le JSX</h1>
      <div>
        <h2>Les différentes façon d'utiliser le JSX</h2>
        <p>
          Il existe plusieurs manières d'écrire avec du JSX. Par exemple :
        </p>
        <FormatToCode language="jsx">
          {`export default function Page() {
  return <h1>Hello World!</h1>;
}`}
        </FormatToCode>

        <p>
          Dans cet exemple, <mark>{"<h1>Hello World!</h1>"}</mark> est une expression JSX qui représente un élément HTML h1.
          <br /><br />

          Vous pouvez insérer des expressions JavaScript dans votre JSX en les mettant entre accolades {"{ }"}. Par exemple :
        </p>
        <FormatToCode language="jsx">
          {`export default function Page() {
  const name = 'Moi';
  return <h1>Bonjour, {name}!</h1>;
}`}
        </FormatToCode>

        <p>
          Dans cet exemple, <mark>{"{name}"}</mark> est une expression JavaScript qui est évaluée et insérée dans le JSX.
          <br /><br />

          Vous pouvez également écrire plusieurs lignes. Pour cela, vous devez les imbriquer entre parenthèses <mark>{"( )"}</mark>. Quand il n'y a qu'une seule ligne, les parenthèses ne sont pas nécessaires mais peuvent être utilisées pour améliorer la lisibilité.
        </p>
        <FormatToCode language="jsx">
          {`export default function Page() {
  const name = 'Moi';
  const lastName = 'EncoreMoi';

  return (
    <>
      <h1>Bonjour et bienvenue!</h1>
      <h2>Prénom, {name}</h2>
      <h2>Nom de famille, {lastName}</h2>
    </>
  );
}`}
        </FormatToCode>
        <p>
          Noter que dans cet exemple, nous avons utilisé <mark>{"<>"}</mark> pour englober les éléments. C'est une syntaxe raccourcie pour éviter d'avoir à créer un élément parent. Vous pouvez également utiliser <mark>{"<div>"}</mark> ou tout autre élément HTML. <u>En effet, il est obligatoire d'avoir un seul élément parent dans le JSX.</u>
        </p>
      </div>

      <div id="5-2">
        <h2>Opérateur ternaire en JSX</h2>
        <p>
          L'opérateur ternaire vous permet d'afficher différents éléments en fonction de certaines conditions. Si vous souhaitez utiliser des conditions dans le JSX, il faut utiliser <u>la méthode ternaire</u>. Les opérateurs JavaScript tels que <mark>{"if else"}</mark> ne fonctionneront pas. L'opérateur <mark>if</mark> est remplacé par <mark>?</mark> et l'opérateur <mark>else</mark> est remplacé par <mark>:</mark>.
          <br /><br />
          Voici un exemple en utilisant l'opérateur ternaire :
        </p>
        <FormatToCode language="jsx">
          {`export default function Page() {
  const lastName = 'EncoreMoi';
  let message = "Vous n'existez pas!";
  return (
    <>
      <h1>Bonjour et bienvenue!</h1>
      {
        lastName || lastName == "EncoreMoi" ? 
        <h2>Nom de famille, {lastName}</h2>
        :
        (<div>
          <h2>Non de famille non renseigné</h2>
          <span>{message}</span>
        </div>)
      }
    </>
  );
}`}
        </FormatToCode>

        <p>
          Dans cet exemple, l'expression JSX affiche le nom de famille si la constante <mark>lastName</mark> est définie ou si <mark>lastName</mark> est égale  à <mark>"EncoreMoi"</mark>, sinon elle affiche le contenu du <mark>else</mark>. Remarquer que nous avons utilisé <mark>{"{ }"}</mark> pour englober notre condition. Cela permet de spécifier que nous voulons utiliser du JavaScript. De plus, dans le <mark>else</mark> nous avons utilisé <mark>{"( )"}</mark> pour englober les éléments à afficher car il y en a plusieurs et utilisé <mark>{"{ }"}</mark> pour insérer notre variable <mark>JS</mark>. <u>L'élement parent est également obligatoire si vous utilisez plusieurs balises.</u>
          <br /><br />

          Dans exemple suivant, l'expression JSX affiche le nom de famille si la constante <mark>lastName</mark> est définie, dans las, dans le cas contraire elle ne fera rien d'autre. Cela fonctionne si <mark>lastName</mark> est une chaîne de caractères non vide, un nombre différent de 0, un objet, etc.

        </p>

        <FormatToCode language="jsx">
          {`export default function Page() {
  const name = 'Moi';
  const lastName = 'EncoreMoi';

  return (
    <>
      <h1>Bonjour et bienvenue!</h1>
      <h2>Prénom, {name}</h2>
      {lastName && <h2>Nom de famille, {lastName}</h2>}
    </>
  );
}`}
        </FormatToCode>

      </div>
    </div >
  );
}

export default Lesson;
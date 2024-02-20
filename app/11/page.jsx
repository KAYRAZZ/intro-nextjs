import FormatToCode from "../components/FormatToCode";
import RequireNotion from "../components/RequireNotion";
import Solution from "../components/Solution";

const Exercice = () => {
  return (
    <div id="0" className="py-5">
      <h1>Exercices</h1>
      <div>
        <h2>Exercice N°0</h2>
        <RequireNotion notion={[1, 2, 3]} />
        Le principe est simple, il faut se renseigner sur les notions requises avant de réaliser l'exercice.
        <p>
        </p>
      </div>

      <div id="1">
        <h2>Exercice n°1</h2>
        <RequireNotion notion={[4, 5]} />
        <p>
          L'objectif est d'afficher <mark>un article</mark> dans une balise <mark>{"<h2>"}</mark> avec comme texte <mark>"Panier : {'<nom de l\'article>'}"</mark> si la variable <mark>article</mark> est <mark>définie/non null</mark>, sinon afficher <mark>"Le panier est vide"</mark>. Ensuite, afficher un <mark>{"<span>"}</mark> avec le texte <mark>"Le produit a été fabriqué en France"</mark> si la variable <mark>fabrication</mark> est égale à <mark>"France"</mark>.
          <br /><br />
          A partir du fichier Exo1.jsx recréer ce code écrit en JavaScript en JSX :
        </p>
      </div>

      <FormatToCode language="jsx">
        {`let article = 'Table';
let fabrication = 'France';
const h2 = document.querySelector('h2');
const span = document.querySelector('span');

if (article) {
  h2.innerText = 'Panier : ' + article;
} else {
  h2.innerText = 'Le panier est vide';
}
if (fabrication == "France") {
  span.innerText = 'Le produit a été fabriqué en France';
}`}
      </FormatToCode>

      <Solution>
        <FormatToCode language="jsx">
          {`export default function Exo1() {
  let article = 'Table';
  let fabrication = 'France';

  return (
    <>
      <h1>Mon panier</h1>
      {article ? (<h2>Panier : {article}</h2>) : <h2>Le panier est vide</h2>}
      {fabrication == "France" && <span>Le produit a été fabriqué en France</span>}
    </>
  );
}`}
        </FormatToCode>
      </Solution>


      <div id="2">
        <h2>Projet : Création d'un site</h2>
        <p>
          Vous allez créer 3 pages. Deux pages en statique, une pour <mark>accueil</mark> et une autre pour <mark>à propos</mark>. Puis en dynamique une page <mark>article</mark>
          <br />
        </p>
      </div>
    </div>
  );
}
export default Exercice;
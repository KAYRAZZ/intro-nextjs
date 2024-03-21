"use client"
import FormatToCode from "../components/FormatToCode";
import RequireNotion from "../components/RequireNotion";
import Solution from "../components/Solution";

const Exercice = () => {
  const handleClick = (event) => {
    navigator.clipboard.writeText(event.target.innerText)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  }
  return (
    <div id="0" className="py-5">
      <h1>Exercices</h1>
      <h2></h2>
      <p>
        Le principe est simple, il faut se renseigner sur les notions pré-requises avant de réaliser l'exercice. Certaines notions sont de nouveau nécessaires pour certains exercices, mais ne sont pas indiquées dans les pré-requis. Il faut donc faire les exercices dans l'ordre.
      </p>
      <div>
        <h2>Exercice N°0</h2>
        <RequireNotion notion={[1, 2]} />
      </div>

      <div id="1">
        <h2>Exercice n°1</h2>
        <RequireNotion notion={[3, 4]} />
        <p>
          L'objectif est d'afficher <mark>un article</mark> dans une balise <mark>{"<h2>"}</mark> avec comme texte "Panier : {'<nom de l\'article>'}" si la variable <mark>article</mark> est définie/non null, sinon afficher "Le panier est vide". Ensuite, afficher le texte "Le produit a été fabriqué en France" si la variable <mark>fabrication</mark> est égale à <mark>"France"</mark>.
          <br /><br />
          A partir du fichier dans le dossier <mark>exo1</mark> recréer ce code JavaScript en JSX :
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

      {/* <Solution>
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
      </Solution> */}

      <div id="2">
        <h2>Projet : Création d'un site</h2>
        <p>
          Le but est de créer un site d'affiche de personnage de la série <mark>Final Space</mark>. La page d'accueil devra afficher une liste des personnages. Lorsque l'on clique sur un personnage, on est redirigé vers une page qui affichera les détails de ce dernier. Pour cela, on utilisera une API qui nous renverra les données des personnages.
          {/* <br /><br />
          Vous n'avez pas besoin de vous renseigner sur l'API mais pour ceux qui veulent aller jeter un oeil : <a href="https://finalspaceapi.com/docs/endpoints/character/" target="_blank" rel="noreferrer" className="underline text-blue-300">Final Space API</a> */}
        </p>
        <div>
          <h3>Etape 1</h3>
          <RequireNotion notion={[6]} />
          <p>
            Vous allez créer/contruire 3 pages distinctes. Deux pages en statique, dont une pour <mark>Accueil</mark> et une autre pour <mark>A propos</mark>. Puis une page dynamique pour le <mark>personnage</mark> qui sera sélectionné. La page d'accueil étant la page par défaut <mark>page.js</mark>, il n'y a pas besoin de la créer. Dans la page <mark>A propos</mark>, vous pouvez afficher un texte de votre choix, comme l'explication du site par exemple.
          </p>
        </div>
        <div>
          <h3>Etape 2</h3>
          <RequireNotion notion={[5, 7, 12]} />
          <p>
            Créer un composant <mark>Header</mark> et <mark>Footer</mark> qui sera présent sur toutes les pages <u>en les insérant que dans un seul fichier</u>. Le composant <mark>Header</mark> devra contenir les liens des pages <mark>Accueil</mark> et <mark>A propos</mark>. Le composant <mark>Footer</mark> devra contenir le texte <mark>"Site réalisé par : {'<votre nom>'}"</mark>.
            <br /><br />
            Pour manipuler le CSS avec les modules, faites en sorte que ces deux composants, ont un fond de couleur noir avec une police de couleur blanche.
          </p>
        </div>

        <div>
          <h3>Etape 3</h3>
          <RequireNotion notion={[8, 9, 11]} />
          <p>
            Afficher la liste des personnages dans la page <mark>Accueil</mark> à l'aide d'une API dans un <mark>useEffect</mark>. Chaque objet que l'API retournera, contient les propriétés suivantes : <mark className='cursor-copy' onClick={handleClick}>id</mark>, <mark className='cursor-copy' onClick={handleClick}>name</mark> pour son nom et <mark className='cursor-copy' onClick={handleClick}>img_url</mark> pour l'url de l'image.
            <br />
            Vous pouvez faire un <mark>console.log</mark> pour voir les données que l'API retourne.
            <br />
            Voici l'url pour la rêquete : <mark className='cursor-copy' onClick={handleClick}>https://finalspaceapi.com/api/v0/character/
            </mark>
          </p>
        </div>

        <div>
          <h3>Etape 4</h3>
          <p>
            Créer une redirection pour chaque personnages vers la page dynamique <mark>personnage</mark>, avec son id dans l'url. Utiliser la méthode des routes dynamique pour faire la redirection.
            <br />
            Ensuite, dans la page <mark>personnage</mark> vous devez afficher :
          </p>
          <ul className="list-[circle]">
            <li>Nom : <mark className='cursor-copy' onClick={handleClick}>name</mark></li>
            <li>Image : <mark className='cursor-copy' onClick={handleClick}>img_url</mark></li>
            <li>Origine : <mark className='cursor-copy' onClick={handleClick}>origin</mark></li>
            <li>Habilitées : <mark className='cursor-copy' onClick={handleClick}>abilities</mark></li>
          </ul>
          <p>
            <br />
            <u>Attention : Habilitées est un tableau, il peut contenir plusieurs valeurs comme il peut en avoir aucune.</u>
            <br />
            Voici l'url pour la rêquete : <mark className='cursor-copy' onClick={handleClick}>https://finalspaceapi.com/api/v0/character/id</mark>
            <br />
            Remplacer <mark>id</mark> par l'id du personnage lorsque de la requête.
          </p>
        </div>

        <div>
          <h3>Etape 5</h3>
          <RequireNotion notion={[10]} />
          <p>
            Maintenant l'objectif est de limiter le nombre de personnages qui s'affichera dans la page <mark>accueil</mark>. L'API propose cette fonctionnalité grâce au paramètre <mark>?limit={'{number}'}</mark>.
            <br />
            Pour cela, vous devez utiliser un <mark>input</mark>. Lorsque l'on écrit dedans, on doit appuyer sur un bouton pour valider la saisie afin de mettre la page à jour avec le nombre de personnages demandé, et cela sans recharger la page.
            <br /><br />
            Vous devez utiliser :
          </p>
          <ul className="list-[circle]">
            <li><mark>useState</mark> pour stocker la valeur de l'input.</li>
            <li><mark>useEffect</mark> pour faire la requête à l'API.</li>
            <li><mark>onChange</mark> pour enregistrer la saisie.</li>
            <li><mark>onClick</mark> pour valider la saisie.</li>
          </ul>
          <p>
            <br />
            Voici l'url : <mark className='cursor-copy' onClick={handleClick}>https://finalspaceapi.com/api/v0/character/?limit={'{number}'}</mark>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Exercice;
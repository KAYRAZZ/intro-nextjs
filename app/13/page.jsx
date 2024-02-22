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
        Le principe est simple, il faut se renseigner sur les notions prérequises avant de réaliser l'exercice. Certaines notions sont de nouveau nécéssaires pour certains exercices, mais ne sont pas indiqués dans les prérequis. Il faut donc faire les exercices dans l'ordre.
      </p>
      <div>
        <h2>Exercice N°0</h2>
        <RequireNotion notion={[1, 2, 3]} />
      </div>

      <div id="1">
        <h2>Exercice n°1</h2>
        <RequireNotion notion={[4, 5]} />
        <p>
          L'objectif est d'afficher <mark>un article</mark> dans une balise <mark>{"<h2>"}</mark> avec comme texte <mark>"Panier : {'<nom de l\'article>'}"</mark> si la variable <mark>article</mark> est <mark>définie/non null</mark>, sinon afficher <mark>"Le panier est vide"</mark>. Ensuite, afficher un <mark>{"<span>"}</mark> avec le texte <mark>"Le produit a été fabriqué en France"</mark> si la variable <mark>fabrication</mark> est égale à <mark>"France"</mark>.
          <br /><br />
          A partir du fichier Exo1.jsx recréer ce JavaScript en JSX :
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
          Le but est de créer un site d'affiche de personnage de la série <mark>Final Space</mark>. La page d'accueil devra afficher une liste des personnages. Lorsque l'on clique sur un personnage, on est redirigé vers une page qui affiche les détails de ce dernier. Puis, il y aura une page à propos pour présenter le site.
        </p>
        <div>
          <h3>Etape 1</h3>
          <RequireNotion notion={[7]} />
          <p>
            Vous allez créer/contruire 3 pages distinctes. Deux pages en statique, dont une pour <mark>accueil</mark> et une autre pour <mark>à propos</mark>. Puis une page dynamique pour le <mark>personnage</mark> qui sera sélectionné. La page d'accueil étant la page par défaut <mark>page.js</mark>, il n'y a pas besoin de la créer.
          </p>
        </div>
        <div>
          <h3>Etape 2</h3>
          <RequireNotion notion={[6, 8]} />
          <p>
            Créer un composant <mark>Header</mark> qui sera présent sur toutes les pages en l'insérant que dans un seul fichier. Ce composant devra contenir les liens des pages <mark>Accueil</mark> et <mark>A propos</mark>.
          </p>
        </div>

        <div>
          <h3>Etape 3</h3>
          <RequireNotion notion={[9, 11]} />
          <p>
            Afficher la liste des personnages sur la page <mark>Accueil</mark> à l'aide d'une API dans un <mark>useEffect</mark>. Chaque objet contient les propriétés suivantes : <mark className='cursor-copy' onClick={handleClick}>id</mark>, <mark className='cursor-copy' onClick={handleClick}>name</mark> pour son nom et <mark className='cursor-copy' onClick={handleClick}>img_url</mark> pour l'url de l'image.
            <br />
            Voici l'url : <mark className='cursor-copy' onClick={handleClick}>https://finalspaceapi.com/api/v0/character/
            </mark>
          </p>
        </div>

        <div>
          <h3>Etape 4</h3>
          <RequireNotion notion={[12]} />
          <p>
            Créer un lien sur personnage pour rediriger vers la page dynamique <mark>personnage</mark>, avec son id dans l'url. Utiliser la méthode des routes dynamique et non pas <mark>#</mark> pour faire la redirection. La page <mark>personnage</mark> devra afficher :
          </p>
          <ul className="list-[circle]">
            <li>Nom : <mark className='cursor-copy' onClick={handleClick}>name</mark></li>
            <li>Image : <mark className='cursor-copy' onClick={handleClick}>img_url</mark></li>
            <li>Origine : <mark className='cursor-copy' onClick={handleClick}>origin</mark></li>
            <li>Abilitées : <mark className='cursor-copy' onClick={handleClick}>abilities</mark></li>
          </ul>
          <p>
            <br />
            <u>Attention : Abilitées est un tableau, il peut contenir plusieurs valeurs comme il peut en avoir aucune.</u>
            <br />
            Voici l'url : <mark className='cursor-copy' onClick={handleClick}>https://finalspaceapi.com/api/v0/character/id</mark>
            <br />
            Remplacer <mark>id</mark> par l'id du personnage lors que de la requête.
          </p>
        </div>

        <div>
          <h3>Etape 5</h3>
          <RequireNotion notion={[10]} />
          <p>
            Vous allez devoir créer un mode sombre pour le site. Pour cela, vous allez créer un composant <mark>Theme</mark> qui contiendra un bouton pour changer le thème. Ce composant devra être présent sur toutes les pages. <u>Vous allez devoir utiliser useState, useEffect et un gestionnaire d'événement pour changer le thème.</u> Evidemment l'état ne devra pas être stocké dans le composant <mark>Theme</mark>. 
          </p>
        </div>
      </div>
    </div>
  );
}
export default Exercice;
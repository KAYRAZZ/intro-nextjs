import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

  return (
    <div id="1" className="py-5">
      <h1>Les gestionnaires d'événements</h1>
      <div>
        <h2>Qu'est-ce qu'un gestionnaire d'événement</h2>
        <p>
          Les gestionnaires d'événements sont des fonctions qui sont appelées en réponse à des événements spécifiques dans le navigateur, comme des clics de souris, des pressions de touches, des changements de formulaire, etc.
        </p>
      </div>

      <div id="2">
        <h2>onClick</h2>
        <p>
          <mark>onClick</mark> est un gestionnaire d'événement qui est appelé lorsque l'utilisateur clique sur un élément. Voici un exemple d'utilisation avec une fonction fléchée :
        </p>
        <FormatToCode language="jsx">
          {`export default function Page() {
  return (
    <button onClick={() => alert('Bouton cliqué!')}>
      Clique sur moi
    </button>
  );
};`}
        </FormatToCode>
        <p>
          Dans cet exemple, <mark>onClick</mark> est appelé lorsque le bouton est cliqué. Cela permet d'afficher une boîte de dialogue avec le message <mark>Bouton cliqué!</mark>.
          <br /><br />
          Il est possible de passer une fonction à <mark>onClick</mark> qui sera appelée lorsque l'événement se produit.
        </p>
        <FormatToCode language="jsx">
          {`"use client"
export default function Page() {
  const handleClick = () => {
    alert('Bouton cliqué!');
  }

  return (
    <button onClick={handleClick}>
      Aller clique ici
    </button>
  );
};`}
        </FormatToCode>
        <p>
          Ici, <mark>handleClick</mark> est une fonction qui est appelée lorsque le bouton est cliqué. La convention veut que les noms des fonctions appelées lors d'un événement, commencent par <mark>handle</mark>.
          <br /><br />
          De plus, il est possible de passer des paramètres à la fonction appelée. Pour envoyer une information, <u>une fonction fléchée est obligatoire dans ce cas-là</u>, à l'intérieur du onClick, sinon le code sera directement exécuté au chargement de la page. Voici un exemple :
        </p>
        <FormatToCode language="jsx">
          {`"use client"
export default function Page() {
  const handleClick = (text) => {
    alert(text);
  }

  return (
    <button onClick={() => handleClick("Salut!")}>
      Clique et je te dirai quelque chose
    </button>
  );
};`}
        </FormatToCode>
      </div>

      <div id="3">
        <h2>onChange</h2>
        <p>
          <mark>onChange</mark> est un gestionnaire d'événement qui est appelé lorsque la valeur d'un élément change. Très utile lorsqu'on doit récupérer du texte remplis par un utilisateur afin de la placer dans une variable. Voici un exemple d'utilisation avec une fonction fléchée :
        </p>
        <FormatToCode language="jsx">
          {`"use client"
export default function Page() {
  return (
    <input 
    type="text" 
    onChange={(event) => console.log(event.target.value)} />
  );
};`}
        </FormatToCode>


      </div>
    </div >
  );
}

export default Lesson;
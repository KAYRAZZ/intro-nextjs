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
          {`"use client"
export default function Page() {
  return (
    <button onClick={() => alert('Bouton cliqué!')}>
      Clique sur moi
    </button>
  );
};`}
        </FormatToCode>
        <p>
          Il est possible de passer une fonction à <mark>onClick</mark> qui sera appelée lorsque l'événement se produit.
        </p>
        <FormatToCode language="jsx">
          {`"use client"
export default function Page() {
  function handleClick() {
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
          De plus, il est possible de passer des paramètres à la fonction appelée. Pour envoyer une information, <u>une fonction fléchée est obligatoire dans ce cas-là</u>, à l'intérieur du onClick, sinon le code sera directement exécuté au chargement de la page.
        </p>
        <FormatToCode language="jsx">
          {`"use client"
export default function Page() {
  function handleClick(text) {
    alert(text);
  }

  return (
    <div>
      // Quand on clique
      <button onClick={() => handleClick("Salut!")}>
        Clique et je te dirai quelque chose
      </button>

      // Quand la page se lance
      <button onClick={handleClick("Salut!")}>
        Clique et je te le dirai avant l'autre là
      </button>
    </div>
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
import { useState } from 'react';
export default function Page() {
  const [value, setValue] = useState('');
  return (
    <input 
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)} 
    />
  );
};`}
        </FormatToCode>
        <p>
          Dans cet exemple, nous avons utilisé le hook <mark>useState</mark> pour créer une variable d'état <mark>value</mark> et une fonction pour la modifier <mark>setValue</mark>. Lorsque l'utilisateur change la valeur de l'élément <mark>input</mark>, la fonction fléchée est appelée et la valeur de l'élément est stockée dans la variable <mark>value</mark>. Les Hooks sont abordés dans la leçon suivante.
        </p>
      </div>
    </div>
  );
}

export default Lesson;
"use client"
import { useState } from "react";
import FormatToCode from "../components/FormatToCode";
import { ImLoop2 } from "react-icons/im";

let letCount = 0;

const lesson = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const [useStateCount, setUseStateCount] = useState(0);

  const handleClickCount2 = () => {
    setCount2(count2 + 1);
    setCount2(count2 + 1);
    setCount2(count2 + 1);
  }
  const handleClickCount3 = () => {
    setCount3(prevCount => prevCount + 1);
    setCount3(prevCount => prevCount + 1);
    setCount3(prevCount => prevCount + 1);
  }
  const handleClickUseState = () => {
    setUseStateCount(count4 + 1);
  }
  const handleClickLet = () => {
    letCount = letCount + 1;
  }

  return (
    <div id="10-1" className="py-5">
      <h1>Les hooks</h1>
      <div>
        <h2>Qu'est-ce qu'un hook</h2>
        <p>
          Un Hook est une fonction spéciale qui vous permet d'utiliser les fonctionnalités de React à partir de composants fonctionnels. Les Hooks permettent aux développeurs d'utiliser <mark>useState</mark> et d'autres fonctionnalités de React sans avoir à écrire une classe.
          <br /><br />
          Les Hooks ne fonctionnent que dans les fonctions, ils ne fonctionnent pas dans les classes. Ils offrent une alternative plus simple. Il existe plusieurs hooks, parmis les plus utilisés, il y a <mark>useState</mark>, <mark>useEffect</mark> et <mark>useRef</mark>.

          <br /><br />
          Mais il y a un élément à prendre, le <mark>render</mark>. Le rendu {`(ou "render" en anglais)`} est un concept central en React. Il s'agit du processus par lequel React met à jour le DOM {`(Document Object Model)`} de la page web avec le contenu de vos composants. Le rendu est déclenché par des changements d'état ou de propriétés, et il est ce qui permet à votre application de réagir aux interactions de l'utilisateur. React appelle la méthode render à chaque fois qu'il doit mettre à jour le DOM pour ce composant. Cela peut se produire pour plusieurs raisons, par exemple si les props du composant changent, si l'état du composant change {`(avec useState dans un composant fonctionnel)`}, ou si le composant est rendu pour la première fois.


        </p>
      </div>
      <div id="10-2">
        <h2>useState</h2>
        <p>
          <mark>useState</mark> est un Hook dans React qui vous permet d'ajouter un état local à un composant fonctionnel. L'état est une valeur que le composant peut maintenir, modifier et utiliser pour rendre son interface utilisateur.

          <br /><br />
          <mark>useState</mark> doit est importé depuis la bibliothèque <mark>react</mark>. Voici un exemple d'utilisation de <mark>useState</mark> :
        </p>
        <FormatToCode language="jsx">
          {`import { useState } from 'react';
export default function Page() {
  // getter => count
  // setter => setCount
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez moi
      </button>
    </div>
  );
};`}
        </FormatToCode>

        <div className="sandBox">
          <ImLoop2 onClick={() => setCount1(0)} className="absolute right-0 top-[20px] cursor-pointer -translate-y-2/4 -translate-x-2/4 rotate-0 hover:rotate-180 transition-all duration-[350ms]" />

          <p>Vous avez cliqué {count1} fois</p>
          <button onClick={() => setCount1(count1 + 1)}>
            Cliquez moi
          </button>
        </div>

        <p>
          Pour l'utiliser, il faut mettre un <mark>getter</mark> et un <mark>setter</mark>. Le getter est la valeur de l'état, et le setter est la fonction qui permet de modifier l'état. La convention est de mettre le mot <mark>set</mark> suivi du nom de la variable d'état.
          <br /><br />

          Dans cet exemple, <mark>useState{`(0)`}</mark> déclare une nouvelle variable d'état <mark>{`(count)`}</mark> initialisée à 0. <mark>useState{`(0)`}</mark> renvoie un tableau contenant deux éléments : la valeur actuelle de l'état <mark>{`(count)`}</mark> et une fonction pour le mettre à jour <mark>{`(setCount)`}</mark>.

          Lorsque vous cliquez sur le bouton, la fonction <mark>setCount</mark> est appelée avec la nouvelle valeur de count <mark>{`(count + 1)`}</mark>. Cela déclenche une nouveau render du composant avec la nouvelle valeur de count afin d'actualiser l'interface utilisateur.
          <br /><br />

          Vous pouvez utiliser useState plusieurs fois dans un même composant pour déclarer plusieurs variables d'état.
        </p>
        <FormatToCode language="jsx">
          {`const [age, setAge] = useState(20);
const [fruit, setFruit] = useState('banane');
const [todos, setTodos] = useState(['Apprendre Hooks']);`}
        </FormatToCode>

        <p>
          Nouveau cas d'utilisation de <mark>useState</mark> :
        </p>

        <FormatToCode language="jsx">
          {`import { useState } from 'react';
export default function Page() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={handleClick}>
        Cliquez moi
      </button>
    </div>
  );
};`}
        </FormatToCode>
        <div className="sandBox">
          <ImLoop2 onClick={() => setCount2(0)} className="absolute right-0 top-[20px] cursor-pointer -translate-y-2/4 -translate-x-2/4 rotate-0 hover:rotate-180 transition-all duration-[350ms]" />

          <p>Vous avez cliqué {count2} fois</p>
          <button onClick={handleClickCount2}>
            Cliquez moi
          </button>
        </div>

        <p>
          Dans cet exemple, nous avons une fonction <mark>handleClick</mark> qui est appelée lorsqu'on clique sur le bouton. Cette fonction appelle trois fois la fonction <mark>setCount</mark> pour incrémenter la valeur de <mark>count</mark> de 1. Mais cela ne s'incrémente pas de <mark>3</mark> mais <mark>1</mark>. Cela est dû au fait que <mark>setCount</mark> est asynchrone. Lorsqu'on appelle <mark>setCount</mark>, React ne met pas à jour immédiatement la valeur de <mark>count</mark>.
          <br /><br />
          Donc, si vous appelez <mark>setCount{`(count + 1)`}</mark> plusieurs fois dans le même rendu, <u>chaque appel utilise la même valeur de count, qui est la valeur de count au début de ce rendu.</u> C'est pour cela que la valeur de <mark>count</mark> est incrémentée de <mark>1</mark> et non de <mark>3</mark>.
          <br /><br />
          Si vous voulez augmenter count de plus de 1, vous pouvez soit appeler setCount avec la valeur finale que vous voulez, soit utiliser la forme de fonction de setCount, qui reçoit l'état précédent comme argument et renvoie le nouvel état. Voici comment vous pouvez l'utiliser :
        </p>
        <FormatToCode language="jsx">
          {`const handleClick = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
}`}
        </FormatToCode>
        <div className="sandBox">
          <ImLoop2 onClick={() => setCount3(0)} className="absolute right-0 top-[20px] cursor-pointer -translate-y-2/4 -translate-x-2/4 rotate-0 hover:rotate-180 transition-all duration-[350ms]" />
          <p>Vous avez cliqué {count3} fois</p>
          <button onClick={handleClickCount3}>
            Cliquez moi
          </button>
        </div>

        <p>
          Avec cette modification, la valeur de <mark>count</mark> sera incrémentée de <mark>3</mark> et non de <mark>1</mark> car chaque appel utilise la valeur la plus récente de <mark>count</mark>. De même, la convention est de mettre le mot <mark>prev</mark> suivi du nom de la variable d'état.
          <br /><br />

          Pourquoi ne pas utiliser <mark>let, var ou const</mark> pour gérer l'état ? Parce que React ne mettra pas à jour l'interface utilisateur. Voici un exemple :
        </p>

        <FormatToCode language="jsx">
          {`var varCount = 0;
export default function Page() {
  const [count, setCount] = useState(0);
  const handleUseState = () => {
    setCount(count + 1);
  }
  const handleVar = () => {
    varCount = varCount + 1;
  }
}`}
        </FormatToCode>
        <div className="sandBox">
          <ImLoop2 onClick={() => setCount3(0)} className="absolute right-0 top-[20px] cursor-pointer -translate-y-2/4 -translate-x-2/4 rotate-0 hover:rotate-180 transition-all duration-[350ms]" />
          <p>Variable : {letCount}</p>
          <p>useState : {useStateCount}</p>
          <button onClick={handleClickLet}>Incrémente la variable</button>
          <button onClick={handleClickUseState}>Incrémente useState</button>
        </div>

        <p>
          Vous pouvez voir que la valeur de <mark>varCount</mark> ne s'incrémente pas lorsqu'on clique sur son bouton. Cela est dû au fait que React ne mettra pas à jour l'interface utilisateur pour gérer l'état. Mais dès que vous utilisez le bouton du <mark>useState</mark>, React mettra à jour l'interface utilisateur pour gérer l'état. C'est grâce au <mark>render</mark> qui est déclenché par le changement d'état du <mark>useState</mark>.
        </p>
      </div>

      <div id="10-3">
        <h2>useEffect</h2>
        <p>
          <mark>useEffect</mark> est un hook qui permet d'effectuer des effets de bord dans un composant fonctionnel. Il est importé depuis la bibliothèque <mark>react</mark>. Voici un exemple d'utilisation de <mark>useEffect</mark> :

        </p>


      </div>
    </div >
  );
}

export default lesson;
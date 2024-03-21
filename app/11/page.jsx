"use client"
import { useState } from "react";
import FormatToCode from "../components/FormatToCode";
import { ImLoop2 } from "react-icons/im";

let letCount = 0;

const Lesson = () => {
  const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);

  const [useStateCount, setUseStateCount] = useState(0);

  // const handleClickCount2 = () => {
  //   setCount2(count2 + 1);
  //   setCount2(count2 + 1);
  //   setCount2(count2 + 1);
  // }
  // const handleClickCount3 = () => {
  //   setCount3(prevCount => prevCount + 1);
  //   setCount3(prevCount => prevCount + 1);
  //   setCount3(prevCount => prevCount + 1);
  // }
  const handleClickUseState = () => {
    setUseStateCount(useStateCount + 1);
  }
  const handleClickLet = () => {
    letCount = letCount + 1;
  }

  const handleReset4 = () => {
    setUseStateCount(0);
    letCount = 0;
  }

  return (
    <div id="1" className="py-5">
      <h1>Les hooks</h1>
      <div>
        <h2>Qu'est-ce qu'un hook</h2>
        <p>
          Un Hook est une fonction spéciale qui vous permet d'utiliser les fonctionnalités de React à partir de composants fonctionnels. Il existe plusieurs Hooks, parmi les plus utilisés, il y a <mark>useState</mark> et <mark>useEffect</mark>.

          <br /><br />
          Mais il y a un élément à prendre en compte, le <mark>render</mark>. Le render {"(ou 'rendu' en français)"} est un concept central en React. Il s'agit du processus par lequel React met à jour le DOM de la page web avec le contenu de vos composants.
          <br /><br />
          <u>Le rendu est déclenché par des changements d'état ou de propriétés</u>, et il permet à votre application de réagir aux interactions de l'utilisateur. React appelle la méthode render à chaque fois qu'il doit mettre à jour le DOM pour ce composant. Cela peut se produire pour plusieurs raisons, par exemple si l'état du composant change {"(avec useState)"}, ou si le composant est rendu pour la première fois.


        </p>
      </div>
      <div id="2">
        <h2>useState</h2>
        <p>
          <mark>useState</mark> est un Hook dans React qui vous permet d'ajouter un état local à un composant fonctionnel. L'état est une valeur que le composant peut maintenir, modifier et utiliser pour interface utilisateur.

          <br /><br />
          <mark>useState</mark> doit est importé depuis la bibliothèque <mark>react</mark>. Voici un exemple d'utilisation de <mark>useState</mark> :
        </p>
        <FormatToCode language="jsx">
          {`import { useState } from 'react';
export default function Page() {
  // get => count
  // set => setCount
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
          Pour l'utiliser, il faut mettre un <mark>getter</mark> et un <mark>setter</mark>. <u>Le getter est la valeur de l'état, et le setter est la fonction qui permet de modifier l'état</u>. La convention est de mettre le mot <mark>set</mark> suivi du nom de la variable d'état : <mark>{"setCount"}</mark>.
          <br /><br />

          Dans cet exemple, <mark>useState{"(0)"}</mark> déclare une nouvelle variable d'état <mark>{"(count)"}</mark> initialisée à 0.

          Lorsque vous cliquez sur le bouton, la fonction <mark>setCount</mark> est appelée avec la nouvelle valeur de count <mark>{"(count + 1)"}</mark>. Cela déclenche une nouveau render du composant avec la nouvelle valeur de <mark>count</mark> afin d'actualiser l'interface utilisateur.
          <br /><br />
        </p>


        <p>
          Pourquoi ne pas utiliser <mark>let, var ou const</mark> pour gérer l'état ? Parce que React ne mettra pas à jour l'interface utilisateur. Voici un exemple :
        </p>

        <FormatToCode language="jsx">
          {`var varCount = 0;
export default function Page() {
  const [count, setCount] = useState(0);
  function handleClickUseState() {
    setCount(count + 1);
  }

  function handleClickVar() {
    varCount = varCount + 1;
  }
  return (
    <div>
      <button onClick={handleClickVar}>Incrémente la variable</button>
      <button onClick={handleClickUseState}>Incrémente useState</button>
    </div>
  );
  )
}`}
        </FormatToCode>
        <div className="sandBox">
          <ImLoop2 onClick={handleReset4} className="absolute right-0 top-[20px] cursor-pointer -translate-y-2/4 -translate-x-2/4 rotate-0 hover:rotate-180 transition-all duration-[350ms]" />
          <p>Variable : {letCount}</p>
          <p>useState : {useStateCount}</p>
          <button onClick={handleClickLet}>Incrémente la variable</button>
          <button onClick={handleClickUseState}>Incrémente useState</button>
        </div>

        <p>
          Vous pouvez voir que la valeur de <mark>varCount</mark> ne s'incrémente pas lorsqu'on clique sur son bouton. Cela est dû au fait que React ne mettra pas à jour l'interface utilisateur pour gérer l'état. Mais dès que vous utilisez le bouton du <mark>useState</mark>, React mettra à jour l'interface utilisateur. C'est grâce au <mark>render</mark> qui est déclenché par le changement d'état du <mark>useState</mark>.
        </p>
      </div>


      <div id="3">
        <h2>useEffect</h2>
        <p>
          <mark>useEffect</mark> est un hook qui permet d'effectuer des effets de bord dans un composant fonctionnel. Il est importé depuis la bibliothèque <mark>react</mark>.
        </p>
        <FormatToCode language="jsx">
          {`import { useEffect } from 'react';`}
        </FormatToCode>
        <p>
          Il existe plusieurs cas d'utilisation de <mark>useEffect</mark>.
          <br />
          <span className="font-semibold">Cas n°1 :</span><br />
          Dans cet exemple, <mark>useEffect</mark> est <u>appelé qu'une seule fois</u>, lors du le premier rendu du composant. Cela peut être utile pour effectuer de la récupération de données.
        </p>
        <FormatToCode language="jsx">
          {`useEffect(() => {
  console.log("Je suis exécuté qu'une seule fois (Mount)") 
}, [])`}
        </FormatToCode>
        <p>
          <span className="font-semibold">Cas n°2 :</span><br />
          Dans cet exemple, <mark>useEffect</mark> est <u>appelé à chaque fois</u> que la valeur <mark>count</mark> change mais aussi au premier rendu du composant. C'est une syntaxe qui permet d'écouteur les changements d'état.
        </p>
        <FormatToCode language="jsx">
          {`const [count, setCount] = useState(0);

useEffect(() => {
  console.log('Je suis exécuté à chaque fois que la valeur Count change')
}, [count])`}
        </FormatToCode>
        <p>
          <br />
          Si l'on souhaite récupérer des données depuis une API, on peut utiliser <mark>useEffect</mark>. Voici un exemple :
        </p>
        <FormatToCode language="jsx">
          {`import { useState, useEffect } from 'react';
function Example() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://api.example.com/posts');
      const data = await request.json();
      setPosts(data);
    };
    console.log(data);
  // Output posts => [
  //   {id: 1, title: 'post1'}, 
  //   {id: 2, title: 'post2'}, 
  //   {id: 3, title: 'post3'}
  // ]
    fetchData();
  }, []);

  return (
    <div>
        {posts && posts.map((post, index) => (
          <div key={post.id}>
            <span>{post.title}</span>
          </div>
        ))}
    </div>
  );
}`}
        </FormatToCode>
        <p>
          Dans cet exemple, <mark>useEffect</mark> effectue une requête et met à jour l'état local <mark>posts</mark> avec les données reçues. Le tableau vide dans <mark>useEffect</mark> signifie que l'effet ne s'exécute qu'au montage du composant.

          <br /><br />
          <mark>Async</mark> et <mark>await</mark> sont utilisés pour attendre que la promesse soit résolue. Les promesses en JavaScript sont un moyen de gérer les opérations asynchrones, qui sont des opérations qui prennent du temps pour se terminer, comme les requêtes réseau. Elles fournissent une manière de dire : "Fais cette tâche et quand tu auras fini, passe à la suite".
          <br /><br />
          Il faut déclarer <mark>async</mark> devant  <u>function</u> pour pouvoir utiliser <mark>await</mark> à l'intérieur.
        </p>

      </div>

      <div>
        {/* 
        <br /><br />
        <span>Bonus</span>
        <p>
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
          Donc, si vous appelez <mark>setCount{"(count + 1)"}</mark> plusieurs fois dans le même rendu, <u>chaque appel utilise la même valeur de count, qui est la valeur de count au début de ce rendu.</u> C'est pour cela que la valeur de <mark>count</mark> est incrémentée de <mark>1</mark> et non de <mark>3</mark>.
          <br /><br />
          Si vous voulez augmenter count de plus de 1, vous pouvez soit appeler <mark>setCount</mark> avec la valeur finale que vous voulez, soit utiliser la forme de fonction de setCount, <u>qui reçoit l'état précédent comme argument</u> et renvoie le nouvel état. Voici comment vous pouvez l'utiliser :
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
        </p> */}
      </div>
    </div>
  );
}

export default Lesson;
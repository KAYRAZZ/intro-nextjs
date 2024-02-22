import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

  return (
    <div id="1" className="py-5">
      <h1>Fonction {'map()'}</h1>
      <h2></h2>
      <p>
        La méthode <mark>{'map()'}</mark> en JavaScript est souvent utilisée dans les applications Next.js pour afficher des listes d'éléments. Elle est particulièrement utile lorsque vous travaillez avec des données dynamiques, par exemple des données provenant d'une API.
      </p>

      <FormatToCode language="jsx">
        {`export default function Home() {
  let posts = [ 'post1', 'post2', 'post3' ];
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <span>{post}</span>
        </div>
      ))}
    </div>
  );
}`}
      </FormatToCode>
      <p>
        Dans cet exemple, nous avons une liste de posts. Nous utilisons la méthode <mark>{'map()'}</mark> pour parcourir chaque élément de la liste et afficher un élément {'<div>'} pour chaque post. Nous utilisons également la propriété <mark>key</mark> pour chaque élément {'<div>'}. La propriété {'key'} est utilisée par React pour identifier chaque élément de la liste. <u>Elle doit être unique pour chaque élément de la liste, elle est obligatoire et doit être placer dans l'élément parent.</u>
      </p>

    </div>
  );
}

export default Lesson;
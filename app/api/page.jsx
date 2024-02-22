import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

  return (
    <div id="1" className="py-5">
      <h1>Les API avec Next.js</h1>
      <h2></h2>
      <p>
        Les API {'(Application Programming Interface)'} sont des interfaces qui permettent à des applications de communiquer entre elles. Les API sont utilisées pour récupérer des données depuis un serveur. Les données sont généralement retournées au format JSON. Les API sont utilisées pour récupérer des données depuis un serveur. Les données sont généralement retournées au format JSON.


      </p>

      <FormatToCode language="jsx">
        {`async function getPosts() {
  const res = await fetch('https://.../posts');
  const data = await res.json();
  return data;
}
        
export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  // Output posts => [
  //   {id: 1, title: 'post1'}, 
  //   {id: 2, title: 'post2'}, 
  //   {id: 3, title: 'post3'}
  // ]

  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id}>
          <span>{post.title}</span>
        </div>
      ))}
    </div>
  );
}`}
      </FormatToCode>
      <p>
        Dans l'exemple ci-dessus, nous utilisons la fonction <mark>fetch</mark> pour récupérer les données depuis l'API. Nous utilisons ensuite la méthode json pour extraire les données au format JSON. Async et await sont utilisés pour attendre que la promesse soit résolue.
        <br />
        Les promesses en JavaScript sont un moyen de gérer les opérations asynchrones, qui sont des opérations qui prennent du temps pour se terminer, comme les requêtes réseau. Elles fournissent une manière de dire : "Fais cette tâche et quand tu auras fini, fais ceci".
        <br /><br />
        Il faut déclarer <mark>async</mark> devant  <u>function</u> pour pouvoir utiliser <mark>await</mark> à l'intérieur.
      </p>

    </div>
  );
}

export default Lesson;
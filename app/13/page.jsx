import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

  return (
    <div id="1" className="py-5">
      <h1>CSS en Next.js</h1>
      <h2></h2>
      <p>
        Pour ajouter du CSS dans un fichier Next.js, vous pouvez utiliser des fichiers CSS ou l'écrire directement dans la balise <mark>style</mark>.
      </p>

      <FormatToCode language="jsx">
        {`import './styles.css'
// ou l'écrire directement dans la balise
<div style={{width: "50px"}}></div>`}
      </FormatToCode>


      <p>
        Comme vous pouvez le voir, le CSS est entre deux accolades <mark>{'{{}}'}</mark>.

        <br /><br />
        En Next.js, l'attribut <mark>class</mark> est remplacé par <mark>className</mark> :
      </p>

      <FormatToCode language="jsx">
        {`<div className="container"></div>`}
      </FormatToCode>

      <p>
        Vous pouvez aussi mettre du JavaScript dans le CSS en spécifiant des classes :
      </p>

      <FormatToCode language="jsx">
        {`<div className={\`\${isOpen ? "open" : "close"} monBloc\`}></div>`}
      </FormatToCode>

    </div>
  );
}

export default Lesson;
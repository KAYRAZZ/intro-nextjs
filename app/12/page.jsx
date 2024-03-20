import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

  return (
    <div id="1" className="py-5">
      <h1>CSS en Next.js</h1>
      <h2></h2>
      <p>
        Pour ajouter du CSS dans un fichier Next.js, vous pouvez soit importer votre feuille de style en le plaçant votre classe ou id, soit l'écrire directement dans la balise <mark>style</mark>.
      </p>

      <FormatToCode language="jsx">
        {`import './styles.css'
// ou l'écrire directement dans la balise
<div id="monTexte">Text</div>
<div style={{width: "50px"}}>Text</div>`}
      </FormatToCode>


      <p>
        Comme vous pouvez le voir, le CSS est entre deux accolades <mark>{'{{}}'}</mark>.
        <br /><br />
        Mais en important un fichier CSS, il peut avoir des conflits avec les autres fichiers CSS. C'est-à-dire que, si vous avez deux fichiers CSS avec le même nom de classe, il y aura un conflit, même s'ils ne sont pas importer dans le même fichier. Pour éviter cela, vous pouvez utiliser des modules CSS en ajoutant à votre fichier CSS <mark>.module</mark> {'=>'} <mark>monFichier.module.css</mark>.
      </p>

      <FormatToCode language="jsx">
        {`import styles from './monFichier.module.css'
<div className={styles.container}></div>

// monFichier.module.css
.container {
  width: 50px;
}`}
      </FormatToCode>

      <p>
        Comme vous pouvez le voir, en Next.js, l'attribut <mark>class</mark> est remplacé par <mark>className</mark>

        <br /><br />
        Vous pouvez aussi mettre du JavaScript dans le CSS en spécifiant des classes :
      </p>

      <FormatToCode language="jsx">
        {`<div className={\`\${isOpen ? "open" : "close"} monBloc\`}></div>`}
      </FormatToCode>

    </div>
  );
}

export default Lesson;
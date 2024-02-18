import FormatToCode from "../components/FormatToCode";

const Lesson = () => {

    return (
        <div id="7-1" className="py-5">
            <h1>Créer une page / route</h1>
            <div>
                <h2>Créer une page statique</h2>
                <p>
                    Dans Next.js, la création de pages suit une approche particulière. Les pages sont créées dans le répertoire <mark>app</mark>. Pour ce faire, il faut créer un dossier qui portera le nom de la route dans l'URL, et à l'intérieur de ce dossier, créer un fichier nommé <mark>page.jsx</mark> ou <mark>page.js</mark>, c'est ce fichier qui rendrera le contenu de la page. Nommer ce fichier différemment, fera que cette page sera inatteignable.
                    <br /><br />
                    Noter que les fichiers <mark>page.jsx</mark> ou <mark>page.js</mark> doivent être exportés par défaut. Voici un exemple de fichier <mark>page.jsx</mark> :
                </p>
                <FormatToCode language="jsx">
                    {`export default function Page() {
  return <div>Ma page</div>
};`}
                </FormatToCode>
            </div>
            <div id="7-2">
                <h2>Créer une route dynamique</h2>
                <p>
                    Les routes dynamiques sont utilisées pour créer des pages qui ont des paramètres variables dans leur URL. C'est utile lorsque vous voulez créer plusieurs URL qui partagent la même structure de page.


                    Dans le dossier <mark>app</mark>, il est nécessaire de créer un dossier avec des crochets <mark>{"[ ]"}</mark> dont le nom sera le paramètre à récupérer. Par exemple, <mark>app/posts/{"[post]"}/page.js</mark>, les crochets indiquent que cette partie de l'URL est dynamique. C'est-à-dire qu'on va pouvoir accéder à cette route avec plusieurs valeurs pour <mark>post</mark>.
                </p>

                <table className="tracking-wider">
                    <thead>
                        <tr>
                            <th>Route</th>
                            <th>Exemple URL</th>
                            <th>params</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>app/posts/{"[post]"}/page.js</td>
                            <td>/posts/a</td>
                            <td>{'{ post: "a" }'}</td>
                        </tr>
                        <tr>
                            <td>app/posts/{"[post]"}/page.js	</td>
                            <td>/posts/b	</td>
                            <td>{'{ post: "b" }'}</td>
                        </tr>
                        <tr>
                            <td>app/posts/{"[post]"}/page.js</td>
                            <td>/posts/c</td>
                            <td>{'{ post: "c" }'}</td>
                        </tr>
                    </tbody>
                </table>

                <FormatToCode language="jsx">
                    {`export default function Page({ params }) {
  return <div>My Post: {params.post}</div>
}`}
                </FormatToCode>

                <p className="py-6">
                    Dans le fichier <mark>page.js</mark>, vous pouvez accéder aux paramètres dynamiques avec <mark>params</mark> qui est un objet. Par exemple, si vous accédez à <mark>/posts/a</mark>, <mark>params</mark> sera <mark>{'{ post: "a" }'}</mark>. Vous pouvez ensuite utiliser cette valeur pour récupérer et afficher du contenu spécifique à cette page, par exemple en effectuant une requête à une base de données.
                </p>
            </div>
        </div >
    );
}

export default Lesson;
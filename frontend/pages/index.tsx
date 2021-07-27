import Layout from '../src/components/Layout/Layout'
import { CoverPage, Technologies } from '../src/styles/coverPage'

const IndexPage = () => {
  return (
    <Layout title="Inicio - David Díaz Alvarez">
      <CoverPage>
        <h1>Selector de monstruos</h1>
        <h2>¿Qué es?</h2>
        <p>
          Es una app donde aparecerá una lista de monstruos del juego de Monster
          Hunter World y podrás utilizar varios filtros para buscar el que
          quieras seleccionar. Una vez elegido podrás ver los datos de dicho
          monstruo.
        </p>
        <h3>Información adicional</h3>
        <p>
          Me gustaría destacar que hay sobreingeniería, pero en este caso al ser
          un ejercicio de repaso me gusta realizar esta mala práctica para poder
          trastear varías tecnologías y aprender lo máximo posible. Además de
          otro tipo de malas prácticas como subir a .gitignore un fichero .env,
          utilizar una cuenta de root para realizar consultas a la base de
          datos. Soy consciente pero en este ejercicio lo hago por si alguien
          necesita trastear.
        </p>
        <h2>Base de datos:</h2>
        <p>
          La BDD se genera dentro de un contenedor de <strong>Docker</strong>{' '}
          utilizando <strong>MariaDB</strong>. Este contenedor ejecuta un script
          creado por mi mismo donde al ejecutar docker-compose creará
          automáticamente la base de datos, las tablas necesarias y además
          importará a dichas tablas los datos necesarios desde un archivo .csv.
          Cabe destacar que el contenedor dispone de un volumen para la
          persistencia de datos ya que para este ejercicio nos interesa mantener
          la información de los monstruos.
        </p>
        <p>
          Esta desplegada en un servidor de <strong>Heroku</strong>, mientras
          que en desarrollo utilizamos <strong>docker</strong>.
        </p>
        <h2>Backend:</h2>
        <p>
          Es una app muy simple donde sirve varios endpoints para atacar desde
          el Front-end. Esta app esta configurada para ser
          &quot;dockerizada&quot; junto al contenedor de la base de datos, para
          así utilizarla como entorno de desarrollo ya que en mi caso este
          ejercicio está más centrado en el Frontend.
        </p>
        <p>
          Está desplegada en un servidor de <strong>Heroku</strong>, si no se ha
          utilizado recientemente tardará un poco en cargar lo datos ya que el
          servidor estará inactivo hasta que alguien lo solicite.
        </p>
        <h2>Frontend:</h2>
        <p>
          Utilizando tecnologías como <strong>Next.js</strong> representa el
          listado de monstruos atacando a la API creada en el Backend. Esta
          desplegado en Vercel para aprovechar la compatibilidad con Next.js.
          Recordar que puede tardar un poco en cargar el contenido ya que ataca
          a una API hosteada en Heroku y si no se ha solicitado en cierto tiempo
          el servidor tendrá que iniciarse.
        </p>
        <h2>Tecnologías:</h2>
        <Technologies>
          <ul>
            <h3>Compartido</h3>
            <li>
              🌐 <a href="https://www.typescriptlang.org/">Typescript</a>
            </li>
            <li>
              👀 <a href="https://eslint.org/">Eslint</a>
            </li>
            <li>
              🦋 <a href="https://prettier.io/">Prettier </a>
            </li>
            <li>
              🧪 <a href="https://jestjs.io/">Jest</a>
            </li>
          </ul>
          <ul>
            <h3>Backend</h3>
            <li>
              💻 <a href="https://nodejs.org/en/">Node.js</a>
            </li>
            <li>
              🔨 <a href="http://expressjs.com/">Express</a>
            </li>
            <li>
              👻 <a href="https://www.npmjs.com/package/dotenv">DotEnv</a>
            </li>
            <li>
              👻 <a href="https://www.npmjs.com/package/cross-env">Cross-env</a>
            </li>
            <li>
              ⚗️ <a href="https://www.npmjs.com/package/supertest">Supertest</a>
            </li>
            <li>
              👿 <a href="https://www.npmjs.com/package/nodemon">Nodemon</a>
            </li>
            <li>
              💽 <a href="https://www.npmjs.com/package/mysql">Mysql</a>
            </li>
          </ul>
          <ul>
            <h3>Frontend</h3>
            <li>
              📦 <a href="https://webpack.js.org/">Webpack</a>
            </li>
            <li>
              ⚛️ <a href="https://es.reactjs.org/">React</a>
            </li>
            <li>
              ⏭️ <a href="https://nextjs.org/">Next</a>
            </li>
            <li>
              💅 <a href="https://emotion.sh/">Emotion</a>
            </li>
            <li>
              🐐{' '}
              <a href="https://testing-library.com/">Testing-library-react</a>
            </li>
            <li>
              🌲 <a href="https://www.cypress.io/">Cypress</a>
            </li>
            <li>
              <a href="https://www.hygen.io/">🧾 Hygen</a>
            </li>
            <li>
              📕 <a href="https://storybook.js.org/">Storybook</a>
            </li>
            <li>
              🐺 <a href="https://www.npmjs.com/package/husky">Husky</a>
            </li>
            <li>
              🚫 <a href="https://github.com/okonet/lint-staged">Lint-staged</a>
            </li>
            <li>
              🐏 <a href="https://es.wikipedia.org/wiki/Make">Makefile</a>
            </li>
          </ul>
        </Technologies>
      </CoverPage>
    </Layout>
  )
}

export default IndexPage

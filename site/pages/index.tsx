import Head from "next/head";
import { useEffect } from "react";
import { setupTwoslashHovers } from "shiki-twoslash/dist/dom";

export default function Home(props: ReturnType<typeof getStaticProps>["props"]) {
  useEffect(setupTwoslashHovers, []);
  console.log(props.stats)
  return (
    <>
      <Head>
        <title>Shiki Twoslash: Static Code Samples for JS Projects</title>
        <meta name="description" content="You take some Shiki, add a hint of the TypeScript compiler, and 🎉! Incredible static code samples" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <meta name="msapplication-TileColor" content="#fcf3d9" />
      </Head>

      <main className="main">
        <article className="container border-red">
          <div className="intro">
            <p>
              The documentation concerning
              <br />
              the npm modules of
            </p>
            <h1 className="title">Shiki-Twoslash</h1>
            <p>
              In which markdown code samples are powered by
              <br />
              the syntax engine of Visual Studio Code
              <br />
              mixed with the TypeScript compiler’s information.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}>
            <img src={"./svgs/squiggle.svg"} alt="Decoration" width={70} height={25.5} />
          </div>

          <div className="intro">
            <p className="by">By orta therox</p>
            <p>
              Purveyor of renowned open source code
              <br />
              and TypeScript compiler team member
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <img src="./svgs/logo.svg" alt="Shiki Logo" width={167} height={238} />
          </div>
        </article>

        <Split num={0} />    


        <article className="container border-yellow" id="shiki">
          <div style={{ textAlign: "center" }}>
            <img className="old" src="./svgs/shiki.svg" alt="The word 'shiki'" width={309} height={95} />
          </div>

          <div className="split-50-50">
            <div className="left-margin-1">
              <p>
                <span className="eu">V</span>isual Studio Code’s syntax highlighter packaged for running in a web browser and statically via Node.js.
              </p>
              <p>
                Supports all possible languages available on the VS Code extension marketplace. That’s over 200 languages. All you need is a
                <code> .tmlangauge</code> file for anything not shipped with Shiki.
              </p>
              <p>Shiki colours your code with any VS Code theme. That’s {Math.round(props.stats.themeCount/100) * 100}+ last time we checked.</p>
            </div>

            <div className="left-margin-1">
              <p>Fig 1.</p>
              <p className="center-small">
                <img src="./svgs/fig-1-code.svg" alt="A diagram showing syntax tokens" width="246" height="284" />
              </p>
            </div>
          </div>
        </article>

        <article className="container border-blue" id="twoslash">
          <div style={{ textAlign: "center" }}>
            <img className="old" src="./svgs/twoslash.svg" alt="The word 'twoslash'" width={501} height={92} />
          </div>

          <div className="split-50-50">
            <div className="left-margin-1 ">
              <p>
                <span className="eu">T</span>hink of twoslash as a pre-processor for your code-samples.
              </p>
              <p>Twoslash is a JavaScript and TypeScript markup language. You can write a single code sample which describes an entire JavaScript project</p>
              <p>Twoslash uses the same compiler APIs as your text editors to provide type-driven hover information, accurate errors and</p>
              <p>
                Each code sample is compiled in isolation, so you can be certain all your examples still compile and work right a few major versions down the
                line.
              </p>
            </div>

            <div className="left-margin-1">
              <p>Fig 2.</p>
              <p className="center-small">
                <img src="./svgs/fig-2-code.svg" alt="A diagram showing a twoslash code sample being converted to HTML" width="331" height="270" />
              </p>
            </div>
          </div>
        </article>



        <article className="container border-red" id="twoslash">
          <div style={{ textAlign: "center" }}>
            <img className="old" src="./svgs/shiki.svg" alt="The word 'shiki'" width={309} height={95} /><br />
            <img className="old" src="./svgs/twoslash.svg" alt="The word 'twoslash'" width={501} height={92} />
          </div>

          <div className="split-50-50">
            <div className="left-margin-1 ">
              <p>
                <span className="eu">M</span>ixing these two ideas is Shiki Twoslash. The goal being that you can write ergonomic code samples which are backed by the TypeScript compiler.
              </p>
              <p>All code sample use Shiki, then you can opt-in to have Twoslash markup inside specific code blocks.</p>
              <p>Shiki Twoslash is built to generate completely server-side syntax highlighted code samples with no relience that the user can run JavaScript.</p>
              
            </div>

            <div className="left-margin-1">
              <p>Fig 3.</p>
              <p className="center-small">
                <img src="./svgs/fig-3-code.svg" alt="A diagram of markdown -> HTML with Shiki Twoslash" width="331" height="421" />
              </p>
            </div>
          </div>
        </article>

        <Split num={1} />    

        <article className="container border-yellow" id="markup">
          <h2><a href="#markup">#</a>Chapter 1:<br className="small-only"/> Twoslash Markup</h2>

          <Point msg="By default all codeblocks in Shiki Twoslash act like traditional static code samples, making Shiki Twoslash backwards compatible with existing codebases." />

          <Code code={props.html.basic.replace("twoslash", "").replace("twoslash", "").replace("lsp", "")} />

          <Point msg="However, on JavaScript-y code samples, you can opt-in each code sample to use Twoslash." />

          <Code code={props.html.basic} />

          <Point msg="The name Twoslash refers to specially formatted comments which can be used to set up your environment, like compiler flags or separate input files. For example, here is a code sample showing export/importing a function:" />

          <TwoCode source={props.html.multiFileSrc} output={props.html.multiFileHTML} />

          <Point msg="You can write comment queries to have the twoslash powered code-samples highlight types without user interaction." />

          <TwoCode source={props.html.multiFileHighSrc} output={props.html.multiFileHighHTML} />

          <Point msg="And if a code sample becomes un-focused, you can snip it down to just the bit that matters. The compiler still verifies everything ahead of time." />

          <TwoCode source={props.html.multiFileSnipSrc} output={props.html.multiFileSnipHTML} />

          <Point msg="To some extent, anything your editor can show you about code, Twoslash can show. For example, here is the real auto-complete for an express app in JS:" />

          <TwoCode source={props.html.expressSrc} output={props.html.expressHTML} />

          <Point msg="Are you wondering where the types come from? Express is a JavaScript library, it does not ship types. During the build process Shiki-Twoslash can use types from your app’s node_modules folder. I just had to run: <code>yarn add @types/express</code>.<br/><br/>You probably don't want to only show golden-path code too, showing <em>how</em> code goes wrong is also a critical way to understand code. Shiki Twoslash has native support for TypeScript compiler errors." />

          <TwoCode source={props.html.errorSrc} output={props.html.errorHTML} />

          <Point msg="You see how we declared which errors were expected in the source? That means if this code sample errors with something else, Shiki Twoslash will fail to render.<br /><br />Failing rocks because your CI will tell you that your code samples are out of date." />
        </article>

        <article className="container border-blue" id="shiki">
          <h2><a href="#shiki">#</a>Chapter 2:<br className="small-only"/> Shiki Twoslash</h2>

          <Point msg="Twoslash Shiki is a polite but hard fork of the Shiki code rendering engine. Let's look at a few of the Shiki Twoslash features.<br/><br/><strong>Multi-theme rendering</strong> gives you the chance to set up your own custom color themes ahead of time. Shiki Twoslash will render each codeblock multiple times. For example, these settings uses the site theme and every shipped Shiki theme." />

          <Code code={shikiWrap(`{ "themes": ${themes()}}`)} />

          <MicroPoint>Turns into:</MicroPoint>

          <div className="show-lots-of-code mid-10" dangerouslySetInnerHTML={{ __html: props.html.theme }} />

          <MicroPoint>Each code sample has the theme name as a class:</MicroPoint>

          <Code code={shikiWrap(`&lt;pre class="shiki dark-plus" style="..."`)} />

          <MicroPoint>Giving you the chance to use CSS to hide the ones which should not be seen.</MicroPoint>

          <Code code={shikiWrap(cssForHiding())} />

          <Point msg="Highlighting code in your sample can be done via codefence comments:" />

          <TwoCode source={fakeCodeFence(props.html.highlightSrc, "{1, 3-4}")} output={props.html.highlightHTML.replace("// codefence: {1, 3-4}", "")} />

          <MicroPoint>Shiki Twoslash uses CSS classes to set up the highlighting, so style-wise, it's all up to you.</MicroPoint>
        </article>

        <article className="container border-red" id="integrations">
          <h2><a href="#integrations">#</a>Chapter 3:<br className="small-only"/> Integrations</h2>

          <Point msg="I built plugins for most of the big static site generators in the JavaScript ecosystem. These are production ready, but aside from Gatsby, haven't had a true stress test yet." />
          <MicroPoint>The goal of these plugins is to get the markdown parsing set up, the CSS and JS support is left to you to make decisions on.</MicroPoint>

          <Library top="Gatsby plugin" body="Add the package, edit your <code>gatsby-config.js</code>, add CSS and JS." npm="gatsby-remark-shiki-twoslash" />
          <Library right top="Docusaurus preset" body="Add the pacakge, edit your <code>docusaurus.config</code>, add CSS and JS." npm="docusaurus-preset-shiki-twoslash" />
          <Library top="VuePress plugin" body="Add the package, edit your <code>./vuepress/config.ts</code>, add CSS and JS." npm="vuepress-plugin-shiki-twoslash" />
          <Library right top="Hexo plugin" body="Add the package, edit your <code>./config.yml</code> add CSS and JS" npm="hexo-shiki-twoslash" />
          <Library top="11ty plugin" body="Add the package, edit your <code>.eleventy.js</code>, add CSS and JS." npm="eleventy-plugin-shiki-twoslash" />

          <Point msg="These generator plugins are powered by two markdown engine plugins. Of those, <code>remark-shiki-twoslash</code> does most of the work." />
          <a className="mid-6 lib" href="https://www.npmjs.com/package/remark-shiki-twoslash">remark-shiki-twoslash</a>
          <a className="mid-6 lib" href="https://www.npmjs.com/package/markdown-it-shiki-twoslash">markdown-it-shiki-twoslash</a>
          <MicroPoint>You can use these libraries to set up in almost any JavaScript tool. There are examples in the <a href="https://github.com/shikijs/twoslash/tree/main/examples">Shiki Twoslash monorepo</a> of working with Next.js, Elder.js and MDX. I'm open to adding more examples.</MicroPoint>
        </article>

        <article className="container border-yellow" id="tooling">
          <h2><a href="#tooling">#</a>Chapter 4:<br className="small-only"/> Tooling</h2>
          <Point msg="No markdown document is an island. To build out a corpus of markdown documents which rely on Twoslash there are some additional tools which might come in handy."/>
          
          <Library top="Twoslash CLI" body="Render documents via the terminal and verify the code samples all pass." npm="twoslash-cli" />
          <Library right top="Twoslash VS Code" body="Adds twoslash markdup auto-complete to code samples, and offers a one-click link to a Twoslash repl." npm="vscode-twoslash" url="https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash" />
        </article>

        <Split num={2} />    

        <article className="container border-blue" id="vision">
          <h2><a href="#vision">#</a>Vision</h2>

          <Point msg="I intend for Shiki Twoslash to be a very long term project. Initially created to power the TypeScript website and handbook, Shiki Twoslash has the potential for being a solid foundation for almost any website which describes JavaScript-y code."/>
          <MicroPoint>Extracting Shiki Twoslash, documenting, improving and abstracting into generator plugins is work I do on my own time and if that is the sort of work you want to see more of, consider sponsoring me on GitHub Sponsors</MicroPoint>

          <a className="mid-6 lib" href="https://github.com/sponsors/orta/">github.com/sponsors/orta/</a>

          <MicroPoint>Have a good one!</MicroPoint>

          <img src="./orta-dm.jpg" />
        </article>
      </main>
    </>
  );
}

function shikiWrap(code: string) {
  return `<pre class="shiki " style="background-color: #FCF3D9; color: #111111; "><div class="language-id">ts</div><div class='code-container'><code style='white-space: pre-wrap'>${code}</code></div></pre>`
}

function themes() {
  const themes = ["../shiki-twoslash", 'dark-plus',  'github-dark',  'github-light',  'light-plus',  'material-theme-darker',  'material-theme-default',  'material-theme-lighter',  'material-theme-ocean',  'material-theme-palenight',  'min-dark',  'min-light',  'monokai',  'nord',  'slack-theme-dark-mode',  'slack-theme-ochin',  'solarized-dark',  'solarized-light' ] 
  return themes.map(t => '"' + t + '"').join(", ")
}

function fakeCodeFence(str: string, fence: string) {
  return str.replace("// codefence: {1, 3-4}", `\`\`\`ts twoslash ${fence}`).replace("<div class='line'></div></code", '<div class="line" style="color: #BB8700">```</div></code')
}

function cssForHiding(){
return `@media (prefers-color-scheme: light) {
  .shiki.dark-plus {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {

  .shiki.light-plus {
    display: none;
  }
}
`
}

const Point = (props: { msg: string }) => {
  const msg = `<span class="eu">${props.msg[0]}</span>${props.msg.substring(1)}`
  return <p className="mid-6 has-funny-opening-letter" dangerouslySetInnerHTML={{__html: msg }} />
}

const MicroPoint = (props: { children: any }) => {
  return <p className="mid-6">{props.children}</p>
}


const Library = (props: { top: string, body: string, npm: string, right?: true, url?: string }) => {
  return (
  <div className="mid-6 lib">
    <div className={"lib-content " + ( props.right? "right" : "")} >
      <img src="./img/logo.png" />
      <div>
        <h4>{props.top}</h4>
        <p dangerouslySetInnerHTML={{ __html: props.body}} />
      </div>
    </div>
    <a href={props.url || `https://www.npmjs.com/package/${props.npm}`}>{props.npm}</a>
  </div>
  )
}

const Code = (props: { code: string }) => <div className="mid-8" dangerouslySetInnerHTML={{ __html: props.code }} />;

const TwoCode = (props: { source: string; output: string }) => (
  <div className="mid-10 code-split">
    <div style={{ paddingRight: "5px" }}>
      <span className="source">Source</span>
      <div dangerouslySetInnerHTML={{ __html: props.source }} />
    </div>
    <div style={{ marginLeft: "5px" }}>
      <span className="output">Output</span>
      <div dangerouslySetInnerHTML={{ __html: props.output }} />
    </div>
  </div>
);

const Split = (props: { num: number }) => <div className="split"><img src={`./svgs/split-${props.num}.svg`} /></div>

// Grabs the code samples
export function getStaticProps() {
  const fs = require("fs");

  const get = (path: string) => fs.readFileSync(`examples/render/${path}.html`, "utf8")

  return {
    props: {
      stats: JSON.parse(fs.readFileSync("script/stats.json", "utf8")),
      html: {
        basic: get("basic.ts"),
        multiFileSrc: get("multi-file.ts_src"),
        multiFileHTML: get("multi-file.ts"),
        multiFileHighSrc: get("multi-file-highlight.ts_src"),
        multiFileHighHTML: get("multi-file-highlight.ts"),
        multiFileSnipSrc: get("multi-file-snip.ts_src"),
        multiFileSnipHTML: get("multi-file-snip.ts"),
        expressSrc: get("express.js_src"),
        expressHTML: get("express.js"),
        errorSrc: get("errors.ts_src"),
        errorHTML: get("errors.ts"),
        highlightSrc: get("highlight-1.ts_src"),
        highlightHTML: get("highlight-1.ts"),
        theme: get("theme.ts"),
      },
    },
  };
}

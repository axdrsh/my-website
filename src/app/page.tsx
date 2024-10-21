export default function MinimalPersonalWebsite() {
  return (
    <div className="max-w-2xl mx-auto p-4 font-mono">
      <article>
        <br />
        <header>
          <h2>
            <samp>hi, i'm adarsh! (18M, he/him)</samp>
          </h2>
          <aside>
            <samp>
              a first-year college student who likes building and creating
              things with code and technology. my interests span a wide range of
              fields, and i appreciate a minimalist approach in both design and
              life. when i'm not coding, you'll often find me producing{" "}
              <a
                href="https://www.youtube.com/@catcupcate"
                className="underline"
              >
                music
              </a>{" "}
              - another one of my creative passions. :)
            </samp>
          </aside>
        </header>
        <br />
        <h2>
          <samp>my projects</samp>
        </h2>
        <p>
          <samp>you can checkout my projects on my </samp>
          <a href="https://github.com/axdrsh" className="underline">
            <samp>github</samp>
          </a>
          :
        </p>
        <ul className="list-disc pl-5">
          <li id="project">
            <a href="https://github.com/axdrsh/pulse" className="underline">
              <samp>pulse</samp>
            </a>
          </li>
          <li id="project">
            <a href="https://github.com/axdrsh/cusswatchbot" className="underline">
              <samp>cusswatchbot</samp>
            </a>
          </li>
          <li id="project">
            <a href="https://github.com/axdrsh/seekster" className="underline">
              <samp>seekster</samp>
            </a>
          </li>
          <li id="project">
            <a href="https://github.com/axdrsh/solvetosurf" className="underline">
              <samp>solvetosurf</samp>
            </a>
          </li>
        </ul>
        <br />
        <h2>
          <samp>blogs</samp>
        </h2>
        <ul className="list-disc pl-5">
          <li id="blog">
            <a href="#" className="underline">
              <samp>why i gave up on using linux as a desktop os?</samp>
            </a>
          </li>
        </ul>
        <br />
        <h2>
          <samp>contact me</samp>
        </h2>
        <p>
          <samp>
            if you wanna talk, DM me on{" "}
            <a href="https://x.com/axdrsh" className="underline">
              <samp>X</samp>
            </a>{" "}
            or write me an{" "}
            <a href="mailto:axdrsh@gmail.com" className="underline">
              <samp>email</samp>
            </a>{" "}
            ~
          </samp>
        </p>
      </article>
    </div>
  );
}

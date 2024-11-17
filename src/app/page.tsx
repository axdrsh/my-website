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
              first-year college student. interested in cybersecurity and building things with code and technology. minimalist in design and life. 
            also sometimes producing{" "}
            <a href="https://www.youtube.com/@catcupcate" className="underline hover:text-gray-600">
              music.
              </a>{" "}
            :)
            </samp>
          </aside>
        </header>
        <br />
        <h2>
          <samp>(some of) my projects</samp>
        </h2>
        <p>
          <samp>you can checkout all of my projects on my </samp>
          <a href="https://github.com/axdrsh" className="underline">
            <samp>github</samp>
          </a>
          :
        </p>
        <ul className="list-disc pl-5">
          <li id="project">
            <a href="https://github.com/axdrsh/thoughtss" className="underline">
              <samp>thoughts.</samp>
            </a> <samp> - a place to let your thoughts out anonymously.</samp>
          </li>
          <li id="project">
            <a href="https://github.com/axdrsh/pulse" className="underline">
              <samp>pulse</samp>
            </a> <samp> - a chatbot that continously checks on you if you're studying.</samp>
          </li>
          <li id="project">
            <a href="https://github.com/axdrsh/cusswatchbot" className="underline">
              <samp>cusswatchbot</samp>
            </a> <samp> - a discord bot that tracks the profanity usage of a user.</samp>
          </li>
          <li id="project">
            <a href="https://github.com/axdrsh/seekster" className="underline">
              <samp>seekster</samp>
            </a> <samp> - a google search clone.</samp>
          </li>
          <li id="project">
            <a href="https://github.com/axdrsh/solvetosurf" className="underline">
              <samp>solvetosurf</samp>
            </a> <samp> - a website blocker that requires you to solve math problems.</samp>
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

import moleIcon from "./icons/icon-mole.png";
import quoteIcon from "./icons/icon-quote.png";
import ironmanIcon from "./icons/icon-ironman.png";
import markdownIcon from "./icons/icon-markdown.png";
import jsCalculatorIcon from "./icons/icon-calculator.png";
import blackJackIcon from "./icons/icon-blackjack.png";

function Projects() {

  const whackAMole = "https://alicedowntherabbithole7.github.io/Whack-a-mole/";
  const quoteMachine = "https://alicedowntherabbithole7.github.io/quote_machine/";
  const stanLeeTribute = "https://alicedowntherabbithole7.github.io/tribute_page/";
  const markdownPreviewer ="https://alicedowntherabbithole7.github.io/markdown_previewer/";
  const jsCalculator = "https://alicedowntherabbithole7.github.io/JS_Calculator/";
  const blackJack = "https://alicedowntherabbithole7.github.io/Black_jack/";

  const projectsArray = [
    {
      icon: moleIcon,
      link: whackAMole,
      id: "whack-a-mole",
      ref: 'whackAMole',
      head: 'Whack-A-Mole!'
    },
    {
      icon: quoteIcon,
      link: quoteMachine,
      id: "quote-generator",
      ref: 'quoteMachine',
      head: 'Quote Generator'
    },
    {
      icon: ironmanIcon,
      link: stanLeeTribute,
      id: 'stan-lee',
      ref: 'stanLee',
      head: 'Stan Lee Tribute'
    },
    {
      icon: markdownIcon,
      link: markdownPreviewer,
      id: 'markdown-previewer',
      ref: 'markdown',
      head: 'Markdown Previewer'
    },
    {
      icon: jsCalculatorIcon,
      link: jsCalculator,
      id: 'js-calc',
      ref: 'jsCalc',
      head: 'JS Calculator'
    },
    {
      icon: blackJackIcon,
      link: blackJack,
      id: 'black-jack',
      ref: 'blackJack',
      head: 'Black Jack'
    }
  ]

  const iconList = projectsArray.map((project) => <img src={project.icon} key={project.id} />);

  const linkList = projectsArray.map((site) => (
    <a href={site.link} key={site.ref} className="project" target='_blank'>
      {iconList}
    </a>
  ));

  return (
    <div>
      <h1 id="projects-head">Projects</h1>
      {linkList}
    </div>
  );
}

export default Projects;
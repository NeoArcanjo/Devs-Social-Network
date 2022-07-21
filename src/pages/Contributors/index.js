import styles from './styles.module.scss';
import Header from "../../components/Header";

import contributorOne from '../../assets/joao.png';
import contributorTwo from '../../assets/rafa.jpg';
import contributorThree from '../../assets/matheus.png';
import contributorFour from '../../assets/marcus.jpeg';

import { BsBookmarkStarFill } from 'react-icons/bs';

import ContributorsBox from '../../components/ContributorsBox';

export default function Contributors() {

   let contributors = [contributorOne, contributorTwo, contributorThree, contributorFour];

   return (
      <>
         <Header />

         <div className={styles.container}>
            <header>
               <h1>Desenvolvedores que estão fazendo esse projeto se tornar realidade</h1>
               <BsBookmarkStarFill className={styles.gold} size={175} color="gold" />
            </header>

            <ContributorsBox
               img={contributors[0]}
               name="João Guilherme Souza Lima"
               role="Desenvolvedor Front End | JavaScript | VueJS | TypeScript | NextJS | ReactJS | NodeJS"
               linkGH="https://github.com/jguilhermesl"
               linkIn="https://www.linkedin.com/in/jguilhermesl/"
            />


            <ContributorsBox
               img={contributors[1]}
               name="Rafael Yokoyama 👋"
               role="Desenvolvedor Front End ReactJS | JavaScript | Typescript"
               linkGH="https://github.com/Rafael-Yokoyama"
               linkIn="https://www.linkedin.com/in/rafael-yokoyama/"
            />

            <ContributorsBox
               img={contributors[2]}
               name="Matheus Santos"
               role="Front End Developer | JavaScript | ReactJS | Git "
               linkGH="https://github.com/devMatheus20"
               linkIn="https://www.linkedin.com/in/matheus-santos-souza/"
            />

            <ContributorsBox
               img={contributors[3]}
               name="Marcus Vinícius Begheli Santos"
               role="Desenvolvedor Front-end • NextJS | ReactJS | JavaScript"
               linkGH="https://github.com/marcusvinicius0"
               linkIn="https://www.linkedin.com/in/marcusviniciusbeghelisantos/"
            />

         </div>
      </>
   )
}
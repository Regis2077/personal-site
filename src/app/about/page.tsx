import About from "@/components/About"
import LongText from "@/components/LongText"
import PageHeader from "@/components/PageHeader"
import mam from "@/assets/images/mam.jpg"
import Image from "next/image"
import styles from "./page.module.scss"

const AboutPage = () => {
  return (
    <div data-container-home>
      <PageHeader title="Sobre mim" />
      <LongText>
        {`
Quase todo mundo me conhece apenas por "Regis", afinal, Gabriel quase sempre tem muito em todo lugar. Sou de Salvador, Bahia. Se você não for do Brasil, é uma cidade litorânea repleta de praias, cultura e muito calor.
 `}
      </LongText>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={mam.src} alt="Foto de perfil de Gabriel Regis" width={800} height={500} />
        <span className={styles.imageLabel}>Praia do MAM - salvador, Bahia, Brasil. Fonte: eu mesmo que tirei</span>
      </div>

      <LongText>
        {`
Minha trajetória na tecnologia começou há cerca de 5 anos. No início, eu pensava em ser advogado, jornalista ou engenheiro civil, áreas pelas quais eu tinha certa afinidade e me via atuando profissionalmente. Enquanto tentava decidir, quis encontrar algo para fazer no tempo livre e que também me rendesse algum dinheiro. Pensando em problemas que eu poderia resolver ou ideias que pudesse vender, me veio à mente fazer sites mas não tinha ideia como isso funcionava

Não fui o tipo de pessoa que descobriu a programação pq editava o HTML e o CSS no Tumblr ou que decidiu criar um servidor no minecraft ou qualquer outro jogo para jogar com os amigos (que pena), quando fui entender o que significava fazer um simples site e programar, me deparei com um universo inteiro, e no fim foi isso o que mais me instigou.

Academicamente, iniciei uma graduação em Ciência e Tecnologia na Universidade Federal da Bahia, mas logo migrei para Engenharia de Software. Pretendo ainda fazer mais algumas coisas nesse meio, é algo que gosto, mas vamos ver como a vida anda.

Aprecio muito por chegar aqui, vamos trocar uma ideia!
        `}
      </LongText>

      <About hobbiesTitle="Quando não estou codando estou..." />
    </div>
  )
}
export default AboutPage
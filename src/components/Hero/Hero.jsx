import { Container } from "components/Container/Container"
import img from "../../images/pexels-kampus-8353782.jpg"
import { BgImg, HeroContainer, HeroTextContainer } from "./Hero.styled"


export const Hero = ({onOpenModal}) =>{

    return<>
    <HeroContainer>
    <BgImg img={img} />
        <Container>
        <HeroTextContainer>
        <h1>Ваші контакти завжди під рукою</h1>
        <p>Зберігайте всі номери в одному місці та додавайте нові у два кліки</p>
        <button onClick={onOpenModal} type="button">Додати</button>
        </HeroTextContainer>
        </Container>
    </HeroContainer>
    </>
}
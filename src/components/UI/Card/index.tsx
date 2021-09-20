import Image from 'next/image'

import * as S from './styles'

type CardProps = {
  image: string
  imageAlt: string
  link: string
  title: string
}

const Card = ({ image, imageAlt, link, title }: CardProps) => {
  return (
    <S.CardWrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <S.CardBackground>
          <Image
            src={image}
            alt={imageAlt}
            blurDataURL={image}
            placeholder="blur"
            layout="fill"
          />
        </S.CardBackground>
        <S.CardCaption>
          <h3 className="title">{title}</h3>
        </S.CardCaption>
      </a>
    </S.CardWrapper>
  )
}

export default Card

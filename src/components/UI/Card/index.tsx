import Image from 'next/image'

import * as S from './styles'

type CardProps = {
  image: string
  imageAlt: string
}

const Card = ({ image, imageAlt }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.CardBackground>
        <Image
          src={image}
          alt={imageAlt}
          blurDataURL={image}
          placeholder="blur"
          layout="fill"
        />
      </S.CardBackground>
    </S.CardWrapper>
  )
}

export default Card

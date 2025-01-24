import Image from 'next/image'

import * as S from './styles'

type CardProps = {
  image: string
  imageAlt: string
  link: string
  title: string
  technologies: string[]
  categories: string[]
}

const Card = ({
  image,
  imageAlt,
  link,
  title,
  technologies,
  categories
}: CardProps) => {
  return (
    <S.CardWrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <S.CardBackground>
          <Image
            src={image}
            alt={imageAlt}
            width={500}
            height={500}
            blurDataURL={image}
            placeholder="blur"
          />
        </S.CardBackground>

        <S.CardCaption>
          <div className="tags">
            {technologies.map((item) => (
              <span key={item} className="tag-item">
                {item}
              </span>
            ))}
          </div>
          {/* <h3 className="title">{title}</h3> */}
        </S.CardCaption>
      </a>
    </S.CardWrapper>
  )
}

export default Card

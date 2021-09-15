import * as S from './styles'

type MainHeaderProps = {
  ico: JSX.Element
  title: string
  subtitle: string
  description: string
}

const MainHeader = ({ ico, title, subtitle, description }: MainHeaderProps) => {
  return (
    <S.MainHeaderWrapper>
      <S.MainHeaderContent>
        <S.MainHeaderTop>
          <div className="ico">{ico}</div>
          <div className="content">
            <S.MainHeaderTitle>{title}</S.MainHeaderTitle>
            <S.MainHeaderSubTitle>{subtitle}</S.MainHeaderSubTitle>
          </div>
        </S.MainHeaderTop>
        <S.MainHeaderParagraph>{description}</S.MainHeaderParagraph>
      </S.MainHeaderContent>
    </S.MainHeaderWrapper>
  )
}

export default MainHeader

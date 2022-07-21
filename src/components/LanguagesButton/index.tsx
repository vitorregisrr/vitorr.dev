import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { World as Global } from '@styled-icons/boxicons-regular'

import * as S from './styles'

type LanguagesButtonProps = {
  hasContainer?: boolean
  disabled?: boolean
  isWhite?: boolean
}

const LanguagesButton = ({
  hasContainer = false,
  disabled = false
}: LanguagesButtonProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  return (
    <>
      <S.LanguagesButtonWrapper
        isDisabled={disabled}
        hasContainer={hasContainer}
      >
        <S.Button onClick={() => setIsExpanded((old) => !old)}>
          <Global size={38} />
          <span>{router.locale?.includes('pt') ? 'pt' : 'en'}</span>
        </S.Button>

        <S.Popup isVisible={isExpanded} onClick={() => setIsExpanded(false)}>
          <Link passHref={true} href="" locale="pt">
            <S.LanguageOption
              className={router.locale?.includes('pt') ? 'active' : ''}
              aria-label="Selecionar idioma português"
              name="Selecionar idioma português"
            >
              <div className="flag">🇧🇷</div>
              <span>Português</span>
            </S.LanguageOption>
          </Link>
          <Link passHref={true} href="" locale="en">
            <S.LanguageOption
              className={router.locale?.includes('en') ? 'active' : ''}
              aria-label="Selecionar idioma inglês"
              name="Selecionar idioma inglês"
            >
              <div className="flag">🇺🇸</div>
              <span>English</span>
            </S.LanguageOption>
          </Link>
        </S.Popup>
      </S.LanguagesButtonWrapper>
    </>
  )
}

export default LanguagesButton

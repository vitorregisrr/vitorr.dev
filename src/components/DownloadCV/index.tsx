import { SimCardDownload } from '@styled-icons/material'

import * as S from './styles'

const DownloadCV = () => {
  return (
    <S.DownloadCVWrapper
      href="/Resume - Vitor Régis de Ramos.pdf"
      target="_blank"
      aria-label="Download CV"
    >
      <S.DownloadCVIcon>
        <SimCardDownload />
      </S.DownloadCVIcon>
    </S.DownloadCVWrapper>
  )
}

export default DownloadCV

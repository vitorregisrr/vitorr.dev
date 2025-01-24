import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

import * as animations from './animations'
import * as S from './styles'

type NavTogglerProps = {
  toggleOpen: () => void
  isOpen?: boolean
}

const NavToggler = ({ toggleOpen, isOpen }: NavTogglerProps) => {
  const CloseIcon = () => (
    <Image
      src="/img/ico/close.svg"
      blurDataURL="/img/ico/close.svg"
      alt="close icon"
      placeholder="blur"
      height={60}
      width={60}
    />
  )
  const OpenIcon = () => (
    <Image
      src="/img/ico/open.svg"
      blurDataURL="/img/ico/open.svg"
      placeholder="blur"
      alt="Open icon"
      height={60}
      width={60}
    />
  )

  return (
    <S.NavTogglerWrapper onClick={toggleOpen} aria-label="Toggle navbar">
      <S.NavTogglerIcon>
        <AnimatePresence>
          {isOpen ? (
            <motion.div className="ico close" key="close" {...animations.icon}>
              <CloseIcon />
            </motion.div>
          ) : (
            <motion.div className="ico open" key="open" {...animations.icon}>
              <OpenIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </S.NavTogglerIcon>
    </S.NavTogglerWrapper>
  )
}

export default NavToggler

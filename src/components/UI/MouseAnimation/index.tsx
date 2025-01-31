import styled from 'styled-components'
import { useRouter } from 'next/router'

const MouseAnimationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  opacity: 0.5;

  @media screen and (max-width: 992px) {
    display: none;
  }

  .label {
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.colors.background_opos};
    margin-left: 10px;
    text-transform: uppercase;
    opacity: 0.8;
    min-width: 200px;
    transition: color 0.3s ease;
  }

  .mousey {
    width: 2px;
    padding: 10px 12px;
    height: 28px;
    border: 2px solid ${(props) => props.theme.colors.background_opos};
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
  }
  .scroller {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: ${(props) => props.theme.colors.background_opos};
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`

const MouseAnimation = () => {
  const router = useRouter()

  return (
    <MouseAnimationWrapper>
      <div className="mousey">
        <div className="scroller"></div>
      </div>
      <div className="label">
        {router.locale?.includes('en')
          ? 'Scroll to navigate'
          : 'Deslize para navegar'}
      </div>
    </MouseAnimationWrapper>
  )
}

export default MouseAnimation

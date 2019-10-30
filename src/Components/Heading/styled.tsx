import styled, { css, AnyStyledComponent } from 'styled-components'
import { Typography } from '@material-ui/core'

export const Title: AnyStyledComponent = styled(({ front, back, ...props }) => <Typography {...props} />)`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  text-align: center;

  ${(props: any) => props.back && css`
    color: rgba(255, 255, 255, 0.15);
    font-size: 140px;
    font-weight: 800;
    line-height: 86px;

    @media only screen and (max-width: 991px) {
      font-size: 75px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 50px;
    }
  `}
  
  ${(props: any) => props.front && css`
    color: #ffffff;
    font-size: 80px;
    font-weight: 500;
    position: absolute;

    @media only screen and (max-width: 991px) {
      font-size: 32px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 21px;
    }

    @media only screen and (max-width: 575px) {
      font-size: 40px !important;
    }
  `}
`

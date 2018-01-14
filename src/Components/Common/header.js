import styled from 'styled-components';
import { media } from '../../Library/breakpoints';
import colors from '../../Library/colors';

const Header = styled.p`
  font-family: ${props => props.italic ? 'CardoItalic' : 'ATSackersGothicMedium'};
  font-size: ${props => props.italic ? '2em' : '1.4em'};
  color: ${props => props.italic ? colors.green : colors.red};
  margin: 50px 0px 50px 0px;
  letter-spacing: 3px;
  ${media.phone`
    margin: 25px 0px 25px 0px;
  `}   
`

export default Header

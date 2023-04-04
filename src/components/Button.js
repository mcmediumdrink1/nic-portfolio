import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
background: ${({primary}) => (primary ? '#CD4A00' : '#154495')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 30px' : '10px 32px')};
color: #fff
font-size: ${({big}) => (big ? '20px' : '16px')};
outline: none;
border: none;
min-width: 100px;
cursor: pointer;
text-decoration: none;
transition: 0.3s !important;
border-radius: ${({round}) => (round ? '40px': 'none')};
align-text:center;


&:hover {
    background: ${({primary}) => (primary ? '#154495' : '#CD4A00')};
    transform: translateY(-2px);
}
`
import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    transition: all 0.2s ease-in-out;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    border-radius: 50px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`

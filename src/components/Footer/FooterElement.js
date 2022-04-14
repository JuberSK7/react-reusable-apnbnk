import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const FooterContainer = styled.div`
background: #101522;
`

export const FooterWrap = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 48px 24px;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`

export const  FooterLinkTitle = styled.div`
font-size: 18px;
margin-bottom: 12px;`

export const FooterLinkWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px) {
   flex-direction: column;
}
`

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
alingn-items: flex-start;
text-alig: left;
margin: 16px;
width: 160px;
box-sizing: border-box;
color: #fff;


@media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
 }
`

export const FooterLink = styled(Link)`
font-size: 14px;
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;

&:hover{
    transition: 0.3s ease-out;
    color: #01bf71;
}
`

export const SocialMedia = styled.div`
width: 100%;
max-width: 1000px;
`

export const SocialMediaWrap = styled.div`
display: flex;
align-items: center;
justify-content: flex-between;
max-width: 1200px;
margin: 40px auto;


@media screen and (max-width: 820px) {
    flex-direction: column;

}
`

export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursore: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;

`
export const WebsiteRight  = styled.small`
color: #fff;
margin-left: 12px;
margin-bottom: 16px;`

export const SocialIcon = styled.div`
display: flex;
justify-content: space-between;
width: 340px;
align-items: center;

`


export const SocialIconLink = styled.a`
font-size: 24px;
color: #fff;


}
`

import { css } from 'styled-components';


export default css`
    margin: 40px 10px 40px 20px;
    @media ${props => props.theme.desktopMediaQuery} {
        margin:40px 30px;
    }
    .error{
        color:${props => props.theme.colorRed};
        border:1px solid ${props => props.theme.colorRed};
        padding:10px 15px;
        border-radius: ${props => props.theme.borderRadius};
        width: 50%;
        margin: 20px 0;
    }
    .tag-wrapper{
        ul{
            list-style: none;
            display: flex;
            color:${props => props.theme.colorWhite};
            padding: 0 15px;
            li{
                background: ${props => props.theme.colorGrey};
                margin: 5px 20px 0 0;
                padding: 8px 15px;
                border-radius: ${props => props.theme.borderRadius};
                color:${props => props.theme.colorWhite};
            }
        }
    }
`;
    

import { css } from 'styled-components';


export default css`
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.colorBlack};
    padding: 10px;
    margin-bottom:20px;
    .imageWrapper{
        position:relative;
        img{
            width:100%; 
        }
        .opaqueOverlay{
            position:absolute;
            bottom:0;
            background:${props => props.theme.colorOpaque};
            color:${props => props.theme.colorWhite};
            padding:8px;
            width:100%;
        }
    }
    .desc-wrapper{
        background:${props => props.theme.colorGrey};
        padding:10px 8px;
        .info-table{
            width:100%;
        }
        .info-table-row {
            padding:5px;
            border-bottom:1px solid ${props => props.theme.colorLightGrey};
            td{
                &:nth-child(even) {color: ${props => props.theme.colorYellow}}
                &:nth-child(odd) {color: ${props => props.theme.colorOffwhite}}
            }
            &:last-child{
                border-bottom:none;
            }
        }
    }
`;
    
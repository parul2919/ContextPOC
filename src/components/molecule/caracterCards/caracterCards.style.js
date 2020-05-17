
import { css } from 'styled-components';


export default css`
    border-radius: 6px;
    background: black;
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
            background:rgba(0,0,0,0.6);
            color:#fff;
            padding:8px;
            width:100%;
        }
    }
    .desc-wrapper{
        background:#666;
        padding:10px 8px;
        .info-table{
            width:100%;
        }
        .info-table-row {
            padding:5px;
            border-bottom:1px solid #999;
            td{
                &:nth-child(even) {color: #f2f2f2}
                &:nth-child(odd) {color: #F80}
            }
            &:last-child{
                border-bottom:none;
            }
        }
    }
`;
    
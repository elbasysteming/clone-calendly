import styled from "styled-components";

export const ModalSandbox = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
    border-radius: 10px;
`

export const ModalDiv = styled.div`
    display: block; 
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgb(0,0,0);
    background: rgba(0,0,0,.6);
    overflow: auto;
`

export const ModalBox = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #FFFFFF;
    position: relative;
    width: 500px;
    max-width: 920px;
    margin: 200px auto;
    animation-name: modalbox;
    animation-duration: .4s;
    animation-timing-function: cubic-bezier(0,0,.3,1.6);
`
export const ModalHeader = styled.div`
    font-weight: 600;
    height: 50px;
    padding: 15px;
    color: #222222;
    border-bottom: solid 1px #E6E9F0;
`

export const ModalBody = styled.div`
    padding: 15px;
`
export const ModalClose = styled.span`
    color: #999999;
    float: right;
    font-weight: bold;
    padding: 3px;
    border-radius: 3px;
    &:hover {
        background: #e5e7eb;
        color: #333333;
    }     
`
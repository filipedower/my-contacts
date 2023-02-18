import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LeftContent = styled.section`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    padding: 1.9375rem 8.125rem 7.18rem 8rem;
`;

export const RightContent = styled.section`
    display: flex;
    width: 50%;
    height: 100%;
    padding: 1.3125rem 1.375rem 1.25rem 0;
`;

export const LeftHeader = styled.header`
    display: flex;
`;

export const Text = styled.p``;

export const LeftBody = styled.div`
    margin-top: 5.5625rem;
    margin-left: 5rem;
`;

export const GeneralContent = styled.article`
    margin-top: 1.375rem;
`;

export const FormContent = styled.div`
    margin-top: 3.25rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .ant-form {
        width: 100%;
    
        .ant-form-item {
            width: 100%;
            height: 0.5rem;
        }
    }
`;

export const RightBody = styled.div`
    display: flex;
    background: #000842;
    width: 45.9375rem;
    border-radius: 15px;
    align-items: center;
    flex-direction: column;
`;
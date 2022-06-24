// create and export styled components along with the animation and theming
import styled from "@emotion/styled";

export const CardWrapper = styled.div`
    width: 250px;
    height: 325;
    background: #fff;
    border-radius: 15px;
    padding-bottom: 5px;
    @media (max-width: 900px) {
        width: 400px;
    }
`;

export const ImageWrapper = styled.img`
    object-fit: cover;
    width: 100%;
    height: 60%;
    border-radius: 15px 15px 0 0;
`;

export const TextWrapper = styled.div`
    padding: 10px;
    height: 50px;
`;

export const TitleWrapper = styled.h2`
    margin: 0;
    font-size: 20px;
`;

export const DescriptionWrapper = styled.h3`
    martin-top: 5px;
    font-size: 14px;
    color: #023e8a;
`;

export const ActionWrapper = styled.div`
    margin-left: 10px;
    padding: 10px 0;
    display: flex;
`;
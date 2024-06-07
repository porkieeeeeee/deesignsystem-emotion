import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "styles/ColorPalette";

export enum EButtonColorType {
    GRAY = "gray",
    WHITE = "white",
    PRIMARY = "primary",
}

interface IStyledButtonProps {
    color: EButtonColorType;
    icon?: string;
    isDisabled?: boolean;
    label?: string;
}

interface IButtonProps extends IStyledButtonProps {
    onClick?: () => void;
}

const Button = ({ color, icon = "", isDisabled = false, label = "", onClick }: IButtonProps) => {
    return (
        <Container color={color} icon={icon} isDisabled={isDisabled} label={label} onClick={onClick}>
            {label}
        </Container>
    );
};

const Container = styled.button<IStyledButtonProps>`
    height: 42px;
    padding: ${({ label }) => (label ? "6px 12px 8px" : "8px")};
    border-radius: 7px;
    font-size: 18px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.2px;

    ${({ color }) => {
        switch (color) {
            case EButtonColorType.GRAY:
                return css`
                    background-color: ${theme.gray800};
                    color: ${theme.grayWhite};
                    :hover {
                        background-color: ${theme.gray900};
                    }
                `;
            case EButtonColorType.WHITE:
                return css`
                    border: 1px solid ${theme.gray400};
                    background-color: ${theme.grayWhite};
                    color: ${theme.grayBlack};
                    :hover {
                        background-color: ${theme.gray50};
                    }
                `;
            case EButtonColorType.PRIMARY:
                return css`
                    background-color: ${theme.secondary300};
                    color: ${theme.grayWhite};
                    :hover {
                        background-color: ${theme.secondary400};
                    }
                `;
        }
    }}

    ${({ icon, label }) =>
        icon &&
        css`
            ::before {
                content: "";
                display: inline-block;
                vertical-align: -6px;
                width: 26px;
                height: 26px;
                margin-right: ${label ? "5px" : "0"};
                background: url(${icon}) center / contain no-repeat;
            }
        `}

        ${({ isDisabled }) =>
        isDisabled &&
        css`
            opacity: 0.4;
            pointer-events: none;
        `}
`;

export default Button;

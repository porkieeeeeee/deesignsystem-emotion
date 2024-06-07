import Button, { EButtonColorType } from "components/Button";
import edit from "assets/imgs/edit.svg";
import addBlack from "assets/imgs/add-black.svg";
import addWhite from "assets/imgs/add-white.svg";
import arrowBlack from "assets/imgs/arrow-black.svg";
import arrowWhite from "assets/imgs/arrow-white.svg";
import styled from "@emotion/styled";

function App() {
    return (
        <div className='App'>
            <Wrapper>
                <Button color={EButtonColorType.GRAY} icon={edit} label='Asset 등록하기' />
                <Button color={EButtonColorType.WHITE} icon={addBlack} label='Asset 등록하기' />
                <Button color={EButtonColorType.PRIMARY} icon={addWhite} label='Asset 등록하기' />
                <Button color={EButtonColorType.GRAY} label='Asset 등록하기' />
                <Button color={EButtonColorType.WHITE} label='Asset 등록하기' />
                <Button color={EButtonColorType.PRIMARY} label='Asset 등록하기' />
                <Button color={EButtonColorType.WHITE} icon={arrowBlack} />
                <Button color={EButtonColorType.GRAY} icon={arrowWhite} />
            </Wrapper>
            <br />
            <Wrapper>
                <Button color={EButtonColorType.GRAY} icon={edit} label='Asset 등록하기' isDisabled />
                <Button color={EButtonColorType.WHITE} icon={addBlack} label='Asset 등록하기' isDisabled />
                <Button color={EButtonColorType.PRIMARY} icon={addWhite} label='Asset 등록하기' isDisabled />
                <Button color={EButtonColorType.GRAY} label='Asset 등록하기' isDisabled />
                <Button color={EButtonColorType.WHITE} label='Asset 등록하기' isDisabled />
                <Button color={EButtonColorType.PRIMARY} label='Asset 등록하기' isDisabled />
                <Button color={EButtonColorType.WHITE} icon={arrowBlack} isDisabled />
                <Button color={EButtonColorType.GRAY} icon={arrowWhite} isDisabled />
            </Wrapper>
        </div>
    );
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`;

export default App;

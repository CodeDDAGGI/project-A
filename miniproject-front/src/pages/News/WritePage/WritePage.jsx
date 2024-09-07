/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useMemo, useRef, useState } from 'react';
import Header from '../../../components/Header/Header';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from "quill-image-resize";
import 'react-quill/dist/quill.snow.css';

Quill.register('modules/imageResize', ImageResize);

const layout = css`
    display: flex;
    flex-direction: column;
    padding: 0 0 20px 0;
    height: 100%;
`;
const editorLayout = css`
    margin: 15px 0 0 0;
    box-sizing: border-box;
    margin-bottom: 42px;
    min-height: 400px;
    flex-grow: 1;
    width: 100%;
`;
const editorTitle = css`
    box-sizing: border-box;
    margin: 0 0 15px 0;
    & > input {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        font-size: 20px;
        font-weight: 600;
    }

`;
const mainImgUpLoadBox = css`
    display: flex;
    width: 100%;
    & > div> button {
        width: fit-content;
        margin: 0 10px 0 0;
    }
    & > :nth-last-of-type(1){
        /* width: 100%; */
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
    }
`;
const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
function WritePage(props) {

    const quillRef = useRef(null);
    const [board, setBoard] = useState({
        title: "",
        content: "",
        img: "",
    });
    const [fileName, setFileName] = useState("");
    console.log(fileName);

    const handleImgOnClick = () => {
        const fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("accept", "image/*");
        fileInput.click();
        fileInput.onchange = (e) => {
            const uploadFile = e.target.files[0];
            console.log(uploadFile);
            setBoard(board => ({
                ...board,
                img: uploadFile.name,
            }))
        }
    }
    const handleInputOnChange = (e) => {
        setBoard(board => ({
            ...board,
            [e.target.name]: e.target.value,
        }))
        console.log(board);
    }

    const handleQuillValueOnChange = (value) => {
        setBoard(board => ({
            ...board,
            content: quillRef.current.getEditor().getText().trim() === "" ? "" : value,
        }));
    }
    const handleSubmitOnClick = () => {
        console.log(board);
        
    }
    const toolbarOptions = useMemo(() => [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video', 'formula'],
        ['blockquote', 'code-block'],
    ], []);

    return (
        <div>
            <Header />
            <div css={layout}>
                <div>
                    <h2>작성페이지</h2>
                </div>
                <div css={mainImgUpLoadBox}>
                    <div>
                        <button onClick={handleImgOnClick}>메인사진업로드</button>
                        <span>{fileName}</span>
                    </div>
                    <div>
                        <button onClick={handleSubmitOnClick}>등록하기</button>
                    </div>
                </div>

                <div css={editorLayout}>
                    <div css={editorTitle}>
                        <input type="text" name='title' onChange={handleInputOnChange} value={board.title} placeholder='제목을 입력하세요' />
                    </div>
                    <ReactQuill
                        ref={quillRef}
                        style={{
                            boxSizing: "border-box",
                            width: "100%",
                            height: "100%"
                        }}
                        onChange={handleQuillValueOnChange}
                        modules={{
                            toolbar: {
                                container: toolbarOptions,
                                // handlers: {
                                //     // image: handleImageLoad,
                                // }
                            },
                            imageResize: {
                                parchment: Quill.import("parchment")
                            },

                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default WritePage;
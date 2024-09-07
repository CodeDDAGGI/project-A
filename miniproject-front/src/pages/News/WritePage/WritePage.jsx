import React, { useMemo, useRef } from 'react';
import Header from '../../../components/Header/Header';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
// import ImageResize from "quill-image-resize";
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

// Quill.register("modules/imageResize", ImageResize);

const editorLayout = css`
    margin: 15px 0 0 0;
    box-sizing: border-box;
    margin-bottom: 42px;
    width: 100%;
    height: 700px;  
`;
const editorTitle = css`
    box-sizing: border-box;
    & > input {
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        font-size: 20px;
        font-weight: 600;
    }

`;
function WritePage(props) {
    const quillRef = useRef(null);
    const handleImgOnClick = () => {
        const fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("accept", "image/*");
        fileInput.click();
        


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
        <>
            <Header />
            <div>
                <div>
                    <h2>작성페이지</h2>
                </div>
                <div>
                    <button onClick={handleImgOnClick}>메인사진업로드</button>
                </div>

                <div css={editorLayout}>
                    <div css={editorTitle}>
                        <input type="text" placeholder='제목을 입력하세요' />
                    </div>
                    <ReactQuill
                        ref={quillRef}
                        style={{
                            boxSizing: "border-box",
                            width: "100%",
                            height: "100%"
                        }}
                        modules={
                            {
                                toolbar: {
                                    container: toolbarOptions,
                                },

                            }
                        }
                    />
                </div>
            </div>
        </>
    );
}

export default WritePage;
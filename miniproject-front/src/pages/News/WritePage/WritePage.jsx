/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useMemo, useRef, useState } from 'react';
import Header from '../../../components/Header/Header';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from "quill-image-resize";
import 'react-quill/dist/quill.snow.css';
import { instance } from '../../../apis/util/instance';
import { useNavigate } from 'react-router-dom';
import { ref, deleteObject, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from 'uuid';

Quill.register('modules/imageResize', ImageResize);

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 20px 0;
    width: 100%;
    height: 100%;
`;
const editorLayout = css`
    margin: 15px 0 0 0;
    box-sizing: border-box;
    margin-bottom: 42px;
    min-height: 400px;
    /* flex-grow: 1; */
    width: 80%;

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
    width: 80%;
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
    const navigate = useNavigate();

    const quillRef = useRef(null);
    const [board, setBoard] = useState({
        title: "",
        content: "",
        img: "",
    });
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
                img: uploadFile
            }))
        }
    }
    const handleInputOnChange = (e) => {
        setBoard(board => ({
            ...board,
            [e.target.name]: e.target.value,
        }))
    }

    const handleQuillValueOnChange = (value) => {
        setBoard(board => ({
            ...board,
            content: quillRef.current.getEditor().getText().trim() === "" ? "" : value,
        }));
    }
    const handleSubmitOnClick = async () => {
        let response = null;
        const storageRef = ref(storage, `news/write/${uuid()}_${board.img.name}`);
        console.log(board.img);
        const task = uploadBytesResumable(storageRef, board.img);
        task.on(
            "state_changed",
            (snapshot) => {
                console.log("업로드중");
            },
            (e) => {
                console.log("파이어베이스 업로드 중 에러발생");
                console.error(e);
            },
            async (success) => {
                const url = await getDownloadURL(storageRef);
                let data = board;
                data.img = url;
                console.log("바뀐 데이터");
                console.log(data);
                try {
                    response = await instance.post("/news", data);
                    if (response.status !== 200) {
                        deleteObject(storageRef);
                    }
                } catch (e) {
                    console.error(e);
                    return;
                }
                alert("등록하였습니다");
                navigate("/");
            }
        );

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
            <div css={layout}>
                <div>
                    <h2>작성페이지</h2>
                </div>
                <div css={mainImgUpLoadBox}>
                    <div>
                        <button onClick={handleImgOnClick}>메인사진업로드</button>
                        <span>{board.img.name}</span>
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
                            height: "100%",
                        }}
                        onChange={handleQuillValueOnChange}
                        modules={{
                            toolbar: {
                                container: toolbarOptions,
                                // handlers: {
                                //     image: handleImageLoad,
                                // }
                            },
                            imageResize: {
                                parchment: Quill.import("parchment")
                            },

                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default WritePage;
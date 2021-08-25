import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})
import Styled from "styled-components";
import { createArticle, updateArticle } from "../../components/api/Article";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CreateArticleAction } from "../../reducers/board";

const StyledContainer = Styled.div`

 min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = Styled.h1`
margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-size">
    <option value="small">작은글씨</option>
    <option value="large">중간 글씨</option>
    <option value="huge">큰글씨</option>
    </select>
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
    </select>
    <select className="ql-align"></select>
    <button className="ql-indent" value="-1"></button>
    <button className="ql-indent" value="+1"></button>
    <select className="ql-direction"></select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <select className="ql-color"></select>
    <select className="ql-background"></select>
    <button className="ql-blockquote"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-video"></button>
    <button className="ql-formula"></button>
    <button className="ql-script" value="super"></button>
    <button className="ql-script" value="sub"></button>
    <button className="ql-clean"></button>
  </div>
 
);



export default function Home() {
  const router = useRouter();
  const article = useSelector((state) => state.article);
  const { editor } = router.query;
  const dispatch = useDispatch();
  const [body, setBody] = useState(""); 
  const [subject, setSubject] = useState("");


  const onClickImageBtn = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const imageURI = await imageUpload(file);

      const location = `<img src="http://localhost:3002/${imageURI}" alt='' />`
      setBody(body+location)
      
      
    };
  };

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers:{
        // 'image':onClickImageBtn,
      }
    },
  }









  const formats = [
    'font',
    'size',"small", "large", "huge",
    'header','direction',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'ordered',
    'link', 'image','script',"formula","video",
    'align', 'color', 'background', 'clean'    
  ]








  useEffect(() => {
    if (editor === "modify") {
      //여기서 유저확인 필요.

      //맞으면?
      setBody(article.content);
      setSubject(article.subject);
      ///틀리면 back
    }
  }, [editor, article]);



  const handleSubject = (e) => {
    const { value } = { ...e.target };
    setSubject(value);
  };

  const handleBody = (value) => {
    setTimeout(setBody(value))

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      subject: subject,
      body: body,
      writer: article.writer,
      board_id: article.board_id,
    };
    // setBody("");

    if (editor === "write") {
      delete data.board_id;
      delete data.writer;
      //==write
      const result = await createArticle(data);
      dispatch(CreateArticleAction());
      Router.push(`/board/view/${result.insertId}`);
    } else {
      //==modify
      const result = await updateArticle(data);
      if (result.success) {
        Router.push(`/board/view/${article.board_id}`);
      } else {
        alert(result.error);
        Router.back();
      }
    }
  };

  return (
    <StyledContainer>
      <Head>
        {/* 관련된 리소스 로드
        <link rel="stylesheet" src="../../style/style.css" />
        <link
          href="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css"
          rel="stylesheet"
        />
        <script src="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js"></script>
        <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/highlight.min.js"></script>
        <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/styles/default.min.css"
        />
        <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css" /> */}
      </Head>

      {editor === "write" ? (
        <StyledTitle>글쓰기</StyledTitle>
      ) : (
        <StyledTitle>수정하기</StyledTitle>
      )}

      <div style={{ width: "80%", marginTop: "40px" }}>
        <div>
          제목:
          <input
            type="text"
            onChange={handleSubject}
            value={subject}
            placeholder="제목을 입력해주세요"
          />
        </div>
        {/* <QuillEditor body={body} handleQuillChange={setBody} /> */}
        <CustomToolbar/>
        <ReactQuill modules={modules} formats={formats} value={body} onChange={handleBody}/>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: "center", margin: "2rem" }}>
          <button size="large" type="submit" className="">
            {editor === "write" ? (
              <span>작성 완료</span>
            ) : (
              <span>수정 완료</span>
            )}
          </button>
        </div>
      </form>
    </StyledContainer>
  );
}

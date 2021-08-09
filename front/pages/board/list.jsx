import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const { loadding, IsLogin } = useSelector((state) => state.user);
  const list = [
    {
      num: 1,
      subject: "안녕",
      nickname: "김동철",
      createAt: "2021-07-07",
      hit: 0,
      like: 0,
    },
    {
      num: 2,
      subject: "안녕",
      nickname: "김동철",
      createAt: "2021-07-07",
      hit: 0,
      like: 0,
    },
    {
      num: 3,
      subject: "안녕",
      nickname: "김동철",
      createAt: "2021-07-07",
      hit: 0,
      like: 0,
    },
    {
      num: 4,
      subject: "안녕",
      nickname: "김동철",
      createAt: "2021-07-07",
      hit: 0,
      like: 0,
    },
    {
      num: 5,
      subject: "안녕",
      nickname: "김동철",
      createAt: "2021-07-07",
      hit: 0,
      like: 0,
    },
  ];

  useEffect(async () => {});

  const renderList = (list) => {
    return list.map((v) => {
      console.log(v);
      return (
        <tr key={v.num}>
          <td>{v.num}</td>
          <td>{v.subject}</td>
          <td>{v.nickname}</td>
          <td>{v.createAt}</td>
          <td>{v.hit}</td>
          <td>{v.like}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div>
        <Link href="/board/editor">
          <a>글쓰기</a>
        </Link>
        <Link href="/board/write">
          <a>글쓰기</a>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>닉네임</th>
            <th>작성일</th>
            <th>조회수</th>
            <th>추천수</th>
          </tr>
        </thead>
        <tbody>{renderList(list)}</tbody>
      </table>
    </div>
  );
};

export default List;

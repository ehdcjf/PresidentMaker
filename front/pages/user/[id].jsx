import { useRouter } from "next/router";
import { showUser } from "../../components/api/user";
import { useEffect, useState } from "react";
import { korea } from "../../public/korea";
import { list19 } from "../../public/list19";
import { list20 } from "../../public/list20";

const Info = () => {
  const router = useRouter();
  const {id } = router.query;
  const [loading,setLoagding]= useState(true);
  const [nickname,setNickname] = useState(null)
  const [hometown,setHometown] = useState(null)
  const [residence,setResidence] = useState(null)
  const [birth,setBirth] = useState(null)
  const [gender,setGender] = useState(null)
  const [image,setImage] = useState(null)
  const [vote19iamge,setVote19Image] = useState(null)
  const [vote19name,setVote19Name] = useState(null)
  const [vote20image,setVote20Image] = useState(null)
  const [vote20name,setVote20Name] = useState(null)

  useEffect(async () => {
    if (id !== undefined) {
      const result = await showUser(id);
      setNickname(result.nickname);
      setHometown(result.hometown);
      setResidence(result.residence);
      setBirth(result.birth)
      setGender(result.gender);
      setImage(result.image)
      setVote19Name(list19[result.vote_19th].name);
      setVote19Image(list19[result.vote_19th].src);
      setVote20Name(list20[result.vote_pm].name); 
      setVote20Image(list20[result.vote_pm].src);
      setLoagding(false)
    }
  }, [id]);

  if(loading) return <span>로딩중</span>
  else return (
    <div>
      <h2>회원정보</h2>
      <ul>
        <li>
          <span>프로필사진</span>
          <img src={image} alt="프로필 사진" />
        </li>
        <li>
          <span>닉네임</span>
          <div>{nickname}</div>
        </li>
        <li>
          <span>출생 연도</span>
          <div>{birth}년</div>
        </li>
        <li>
          <span>성별</span>
          {gender ? <div>남자</div> : <div>여자</div>}
        </li>
        <li>
          <span>고향</span>
          <div>{korea[hometown]}</div>
        </li>
        <li>
          <span>거주지</span>
          <div>{korea[residence]}</div>
        </li>
        <li>
          <span>19대 대선 지지 후보</span>
          <img src={vote19iamge} alt="프로필 사진" />
          <div>{vote19name}</div>
          <div></div>
        </li>
        <li>
          <span>20대 대선 지지 후보</span>
          <img src={vote20image} alt="프로필 사진" />
          <div>{vote20name}</div>
          <div></div>
        </li>
        
      </ul>
    </div>
  );
}

export default Info;
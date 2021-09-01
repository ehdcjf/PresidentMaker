import { useRouter } from "next/router";
import { showUser } from "../../components/api/user";
import { useEffect, useState } from "react";
import { korea } from "../../public/korea";
import QuitUser from "../../components/user/QuitUser";
import Nickname from "../../components/user/Nickname";
import ProfilImage from "../../components/user/ProfilImage";
import Gender from "../../components/user/Gender";
import Birth from "../../components/user/Birth";
import Area from "../../components/user/Area";
import Vote from "../../components/user/Vote";
import { list19 } from "../../public/list19";
import { list20 } from "../../public/list20";
import { GrUpdate } from "react-icons/gr";
import useComplete from "../../hooks/useComplete";
import MyVote from "../../components/user/MyVote";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../../components/api/user";
import { UserUpdateAction } from "../../reducers/user";
import SwitchToggle from "../../components/user/SwitchToggle";
import styled from "styled-components";
import Layout from "../../containers/Layout";

const StyledUpdateForm = styled.div`
  width: 60vw;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledInfoContent = styled.div`
  width: 100vw;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  transform-origin: ${(props) =>
    props.rotate === "true" ? "100vw 50vh;" : "100vw "};
  transform: ${(props) =>
    props.rotate === "true"
      ? "perspective(1000px) translate3d(0,0,0) rotate3d(1,0,0,30deg);"
      : "none"};

  & > ul {
    width: 60%;
    height: 100%;
    margin: 0 auto;
  }

  .content {
    display: flex;
  }
`;

const Info = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoagding] = useState(true);

  const nickname = useComplete("");
  const gender = useComplete(null);
  const birth = useComplete(null);
  const hometown = useComplete(null);
  const residence = useComplete(null);
  const vote19 = useComplete(null);
  const vote20 = useComplete(null);
  const profil = useComplete("/defaultProfil.png");
  const [show, setShow] = useState(null);

  const [originNickname, setOriginNickname] = useState(null);
  const [originGender, setOriginGender] = useState(null);
  const [originBirth, setOriginBirth] = useState(null);
  const [originHometown, setOriginHometown] = useState(null);
  const [originResidence, setOriginResidence] = useState(null);
  const [originVote19, setOriginVote19] = useState(null);
  const [originVote20, setOriginVote20] = useState(null);
  const [originProfil, setOriginProfil] = useState(null);

  const [isMine, setIsMine] = useState(null);
  const [quit, setQuit] = useState(false);
  const [update, setUpdate] = useState(0);

  const handleToggle = (data) => {
    if (show & (1 << data)) {
      // true면 공개, flase면 비공개
      setShow(show ^ (1 << data));
    } else {
      setShow(show | (1 << data));
    }
    setTimeout(console.log(show));
  };

  const handleUpdate = (data) => {
    setUpdate(data);
  };

  const handleCancle = (data) => {
    setUpdate(0);
    switch (data) {
      case 1:
        profil.onComplete(originProfil);
        break;
      case 2:
        nickname.onComplete(originNickname);

        break;
      case 3:
        birth.onComplete(originBirth);
        break;
      case 4:
        gender.onComplete(originGender);
        break;
      case 5:
        hometown.onComplete(originHometown);
        break;
      case 6:
        residence.onComplete(originResidence);
        break;
      case 7:
        vote19.onComplete(originVote19);
        break;
      case 8:
        vote20.onComplete(originVote20);
        break;
      default:
        break;
    }
  };

  const handleDelete = async () => {
    if (confirm("회원탈퇴하시겠습니까?")) {
      const result = await deleteUser(id);
      console.log(result);
      if (result.success) {
        alert("회원 탈퇴 처리되었습니다. 그동안 이용해 주셔서 감사합니다.");

        Router.push("/?logout=success");
      } else {
        alert(result.error);
        Router.push("/");
      }
    }
  };

  const handleSave = async () => {
    handleUpdate(0);
    const data = {
      id: id,
      nickname: nickname.value,
      birth: birth.value,
      hometown: hometown.value,
      residence: residence.value,
      gender: gender.value,
      image: profil.value,
      vote19: vote19.value,
      vote20: vote20.value,
      show: show,
    };
    const result = await updateUser(data);
    if (result.success) {
      alert("회원 정보가 저장되었습니다.");
      const data = {
        nickname: nickname.value,
        image: profil.value,
      };
      dispatch(UserUpdateAction(data));
    } else {
      alert(result.error);
    }
  };

  useEffect(async () => {
    if (id !== undefined) {
      const result = await showUser(id);
      console.log(result);
      if (result.success) {
        // 정상적인 경우.
        nickname.onComplete(result.nickname);
        hometown.onComplete(result.hometown);
        residence.onComplete(result.residence);
        birth.onComplete(result.birth);
        gender.onComplete(result.gender);
        profil.onComplete(result.image);
        vote19.onComplete(result.vote_19th);
        vote20.onComplete(result.vote_20th);
        setShow(result.show);

        setOriginNickname(result.nickname);
        setOriginGender(result.gender);
        setOriginBirth(result.birth);
        setOriginHometown(result.hometown);
        setOriginResidence(result.residence);
        setOriginVote19(result.vote_19th);
        setOriginVote20(result.vote_20th);
        setOriginProfil(result.image);

        setIsMine(result.isMine);
        setLoagding(false);
      } else {
        if (result.error == "quit") {
          //탈퇴한 사람 보여주는 화면
          setQuit(true);
          setLoagding(false);
        } else {
          alert(result.error);
        }
      }
    }
  }, [id]);

  if (loading) return <span>로딩중</span>;
  else if (quit) return <QuitUser />;
  else
    return (
      <Layout>
        <StyledUpdateForm>
          {update === 1 && (
            <ProfilImage
              title={"프로필 이미지 수정"}
              {...profil}
              prev={"취소"}
              handlePrev={() => {
                handleCancle(1);
              }}
              next={"수정 완료"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 2 && (
            <Nickname
              title={"닉네임 수정"}
              {...nickname}
              prev={"취소"}
              handlePrev={() => {
                handleCancle(2);
              }}
              next={"수정 완료"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 3 && (
            <Gender
              title={"성별 수정"}
              {...gender}
              prev={"취소"}
              handlePrev={() => {
                handleCancle(3);
              }}
              next={"수정 완료"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 4 && (
            <Birth
              title={"출생 연도 수정"}
              {...birth}
              prev={"취소"}
              handlePrev={() => {
                handleCancle(4);
              }}
              next={"수정 완료"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 5 && (
            <Area
              title={"고향 수정"}
              {...hometown}
              prev={"취소"}
              handlePrev={() => {
                handleCancle(5);
              }}
              next={"수정 완료"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 6 && (
            <Area
              title={"거주지 수정"}
              {...residence}
              prev={"취소"}
              handlePrev={() => {
                handleCancle(6);
              }}
              next={"수정 완료"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 7 && (
            <Vote
              title={"19대 대선 지지 후보 수정"}
              {...vote19}
              list={list19}
              prev={"취소"}
              handlePrev={() => {
                handleCancle(7);
              }}
              next={"수정 완료"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 8 && (
            <Vote
              title={"20대 대선 지지 후보 수정"}
              {...vote20}
              list={list20}
              prev={"취소"}
              handlePrev={() => {
                handleCancle(8);
              }}
              next={"수정 완료"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
        </StyledUpdateForm>

        <StyledInfoContent rotate={update > 0 ? "true" : "false"}>
          <ul className="info_list">
            <li>
              <div>
                <span>프로필사진</span>
                {isMine && (
                  <button
                    onClick={() => {
                      handleUpdate(1);
                    }}
                  >
                    <GrUpdate />
                  </button>
                )}
                <div className="content">
                  <div>
                    <img src={profil.value} alt="프로필 사진" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span>닉네임</span>
              {isMine && (
                <button
                  onClick={() => {
                    handleUpdate(2);
                  }}
                >
                  <GrUpdate />
                </button>
              )}
              <div className="content">
                <div>
                  <span>{nickname.value}</span>
                </div>
              </div>
            </li>

            <li>
              <span>성별</span>
              {isMine && (
                <button
                  onClick={() => {
                    handleUpdate(3);
                  }}
                >
                  <GrUpdate />
                </button>
              )}
              <div className="content">
                {gender.value === null ? (
                  <div>비공개 정보입니다.</div>
                ) : (
                  <>
                    <div>
                      {gender.value === true ? (
                        <span>남자</span>
                      ) : (
                        <span>여자</span>
                      )}
                    </div>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 0)}
                        onToggle={() => {
                          handleToggle(0);
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </li>
            <li>
              <span>출생 연도</span>
              {isMine && (
                <button
                  onClick={() => {
                    handleUpdate(4);
                  }}
                >
                  <GrUpdate />
                </button>
              )}
              <div className="content">
                {birth.value === null ? (
                  <div>비공개 정보입니다.</div>
                ) : (
                  <>
                    <div>
                      <span>{birth.value}</span>
                    </div>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 1)}
                        onToggle={() => {
                          handleToggle(1);
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </li>
            <li>
              <span>고향</span>
              {isMine && (
                <button
                  onClick={() => {
                    handleUpdate(5);
                  }}
                >
                  <GrUpdate />
                </button>
              )}
              <div className="content">
                {hometown.value === null ? (
                  <div>비공개 정보입니다.</div>
                ) : (
                  <>
                    <div>
                      <span>{korea[hometown.value]}</span>
                    </div>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 2)}
                        onToggle={() => {
                          handleToggle(2);
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </li>
            <li>
              <span>거주지</span>
              {isMine && (
                <button
                  onClick={() => {
                    handleUpdate(6);
                  }}
                >
                  <GrUpdate />
                </button>
              )}
              <div className="content">
                {residence.value === null ? (
                  <div>비공개 정보입니다.</div>
                ) : (
                  <>
                    <div>
                      <span>{korea[residence.value]}</span>
                    </div>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 3)}
                        onToggle={() => {
                          handleToggle(3);
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </li>
            <li>
              <span>19대 대선 지지 후보</span>
              {isMine && (
                <button
                  onClick={() => {
                    handleUpdate(7);
                  }}
                >
                  <GrUpdate />
                </button>
              )}
              <div className="content">
                {vote19.value === null ? (
                  <div>비공개 정보입니다.</div>
                ) : (
                  <>
                    <div>
                      <MyVote {...vote19} list={list19} />
                    </div>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 4)}
                        onToggle={() => {
                          handleToggle(4);
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </li>
            <li>
              <span>20대 대선 지지 후보</span>
              {isMine && (
                <button
                  onClick={() => {
                    handleUpdate(8);
                  }}
                >
                  <GrUpdate />
                </button>
              )}
              <div className="content">
                {vote20.value === null ? (
                  <div>비공개 정보입니다.</div>
                ) : (
                  <>
                    <div>
                      <MyVote {...vote20} list={list20} />
                    </div>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 5)}
                        onToggle={() => {
                          handleToggle(5);
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </li>
            {isMine && (
              <li>
                <div>
                  <button onClick={handleDelete}>회원탈퇴</button>
                  <button onClick={handleSave}>저장</button>
                </div>
              </li>
            )}
          </ul>
        </StyledInfoContent>
      </Layout>
    );
};

export default Info;

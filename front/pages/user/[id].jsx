import { useRouter } from "next/router";
import { showUser } from "../../components/api/user";
import { useEffect, useState } from "react";
import { korea } from "../../public/korea";
import QuitUser from "../../components/user/QuitUser";
import Nickname from "../../components/user/Nickname";
import ProfilImage from "../../components/user/ProfilImage";
import Gender from "../../components/user/Gender";
import Area from "../../components/user/Area";
import { list19 } from "../../public/list19";
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
  & > ul {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }

  .content {
    margin: 30px 0 ;
    font-size: 28px;

    &>div:nth-child(1){
      margin-bottom :15px;
    }
  }

  .profil img{
    display: block;
    margin-top: 15px;
    width: 200px;
        height: 200px;
        border-radius: 100px;
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
  const vote_list = useComplete(null);
  const profil = useComplete("/defaultProfil.png");
  const [show, setShow] = useState(null);

  const [originNickname, setOriginNickname] = useState(null);
  const [originGender, setOriginGender] = useState(null);
  const [originResidence, setOriginResidence] = useState(null);
  const [originProfil, setOriginProfil] = useState(null);

  const [isMine, setIsMine] = useState(null);
  const [quit, setQuit] = useState(false);
  const [update, setUpdate] = useState(0);



  const handleToggle = (data) => {
    if (show & (1 << data)) {
      // true??? ??????, flase??? ?????????
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
      case 4:
        gender.onComplete(originGender);
        break;
      case 6:
        residence.onComplete(originResidence);
        break;
      default:
        alert('error: ??????????????? ??????????????????.')
        break;
    }
  };

  const handleDelete = async () => {
    if (confirm("???????????????????????????????")) {
      const result = await deleteUser(id);
      if (result.success) {
        alert("?????? ?????? ?????????????????????. ????????? ????????? ????????? ???????????????.");
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
      residence: residence.value,
      gender: gender.value,
      image: profil.value,
      show: show,
    };
    const result = await updateUser(data);
    if (result.success) {
      alert("?????? ????????? ?????????????????????.");
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
        // ???????????? ??????.
        nickname.onComplete(result.nickname);
        hometown.onComplete(result.hometown);
        residence.onComplete(result.residence);
        birth.onComplete(result.birth);
        gender.onComplete(result.gender);
        profil.onComplete(result.image);
        vote19.onComplete(result.vote_19th);
        vote_list.onComplete(result.vote_list);
        setShow(result.show);
        setOriginNickname(result.nickname);
        setOriginGender(result.gender);
        setOriginResidence(result.residence);
        setOriginProfil(result.image);
        setIsMine(result.isMine);
        setLoagding(false);
      } else {
        if (result.error == "quit") {
          //????????? ?????? ???????????? ??????
          setQuit(true);
          setLoagding(false);
        } else {
          alert(result.error);
        }
      }
    }
  }, [id]);

  if (loading) return <span>?????????</span>;
  else if (quit) return <QuitUser />;
  else
    return (
      <Layout>
        <div>????????????</div>
        <StyledUpdateForm>
          {update === 1 && (
            <ProfilImage
              title={"????????? ????????? ??????"}
              {...profil}
              prev={"??????"}
              handlePrev={() => {
                handleCancle(1);
              }}
              next={"?????? ??????"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 2 && (
            <Nickname
              title={"????????? ??????"}
              {...nickname}
              prev={"??????"}
              handlePrev={() => {
                handleCancle(2);
              }}
              next={"?????? ??????"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 3 && (
            <Gender
              title={"?????? ??????"}
              {...gender}
              prev={"??????"}
              handlePrev={() => {
                handleCancle(3);
              }}
              next={"?????? ??????"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
          {update === 6 && (
            <Area
              title={"????????? ??????"}
              {...residence}
              prev={"??????"}
              handlePrev={() => {
                handleCancle(6);
              }}
              next={"?????? ??????"}
              handleNext={() => {
                handleUpdate(0);
              }}
            />
          )}
        </StyledUpdateForm>

        <StyledInfoContent > 

          <ul className="info_list">
            <li className="content profil">
              <div>
                <span>???????????????</span>
                {isMine && (
                  <span
                  style={{cursor:'pointer', marginLeft:'10px'}}
                    onClick={() => {
                      handleUpdate(1);
                    }}
                  >
                    <GrUpdate size={24}/>
                  </span>
                )}
              <div >
                    <img src={profil.value} alt="????????? ??????" />
                </div>
              </div>
            </li>
            <li className="content nickname">
              <div>
              <span>?????????</span>
              {isMine && (
                <span
                style={{cursor:'pointer', marginLeft:'10px'}}
                onClick={() => {
                  handleUpdate(2);
                }}
                >
                  <GrUpdate size={24}/>
                </span>
              )}
              </div>
              <div >
                  <span>{nickname.value}</span>
              </div>
            </li>

            <li className="content gender">
              <div>
              <span>??????</span>
              {isMine && (
                <span
                style={{cursor:'pointer', marginLeft:'10px'}}
                onClick={() => {
                  handleUpdate(3);
                }}
                >
                  <GrUpdate size={24}/>
                </span>
              )}
              </div>
              
              <div >
                {gender.value === null ? (
                  <div>????????? ???????????????.</div>
                ) : (
                  <div>
                      {gender.value === true ? (
                        <span>??????</span>
                      ) : (
                        <span>??????</span>
                      )}
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 0)}
                        onToggle={() => {
                          handleToggle(0);
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </li>
            <li className="content birth">
              <div>
              <span>?????? ??????</span>
              </div>
              <div >
                {birth.value === null ? (
                  <div>????????? ???????????????.</div>
                ) : (
                  <div>
                      <span>{birth.value}</span>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 1)}
                        onToggle={() => {
                          handleToggle(1);
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </li>
            <li className="content hometown">
              <div>
              <span>??????</span>
              </div>
              <div >
                {hometown.value === null ? (
                  <div>????????? ???????????????.</div>
                ) : (
                  <div>
                      <span>{korea[hometown.value]}</span>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 2)}
                        onToggle={() => {
                          handleToggle(2);
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </li>
            <li className="content residence">
              <div>
              <span>?????????</span>
              {isMine && (
                <span
                style={{cursor:'pointer', marginLeft:'10px'}}
                onClick={() => {
                  handleUpdate(6);
                }}
                >
                  <GrUpdate size={24}/>
                </span>
              )}
              </div>
              <div >
                {residence.value === null ? (
                  <div>????????? ???????????????.</div>
                ) : (
                  <div>
                      <span>{korea[residence.value]}</span>
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 3)}
                        onToggle={() => {
                          handleToggle(3);
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </li>
            <li className="content vote">
              <div>
              <span>????????????</span>
              </div>
              <div >
                {vote19.value === null ? (
                  <div>????????? ???????????????.</div>
                ) : (
                  <div>
                      <MyVote vote19={vote19.value} vote20={vote_list.value} list={list19} />
                    {isMine && (
                      <SwitchToggle
                        isToggled={show & (1 << 4)}
                        onToggle={() => {
                          handleToggle(4);
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </li>
            {isMine && (
              <li className="user_action">
                <div>
                  <button onClick={handleDelete}>????????????</button>
                  <button onClick={handleSave}>??????</button>
                </div>
              </li>
            )}
          </ul>
        </StyledInfoContent>
      </Layout>
    );
};

export default Info;

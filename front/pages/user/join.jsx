import Head from "next/head";
import { useState } from "react";
import Nickname from "../../components/join/Nickname";
import useComplete from "../../hooks/useComplete";
import Gender from "../../components/join/Gender";
import Birth from "../../components/join/Birth";
const Join = () => {
  const nickname = useComplete(null);
  const gender = useComplete(null);
  const birth = useComplete(null);
  const hometown = useComplete(null);
  const residence = useComplete(null);
  const vote19 = useComplete(null);
  const vote = useComplete(null);

  return (
    <>
      <Head>
        <title>Join</title>
      </Head>
      <Nickname {...nickname} />
      <Gender {...gender} />
      <Birth {...birth} />
    </>
  );
};

export default Join;

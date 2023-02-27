import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
        success: function(res) {
            console.log(res);
            setNickName(res.properties.nickname);
        },
        fail: function(error){
            console.log(error);
        }
      });

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
        <h1>Hellos</h1>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
    </div>
  );
};

export default Profile;
import React from 'react';

const About = () => (
  <>
    <h1>About The Application</h1>
    <p>
      This is a Full-Stack MERN App inspired by the File-O-Fax concept and a twitter conversation between friends.
    </p>
    <p>
      Thanks Mary & Pariah.
    </p>
    <div>
      <img src={"img/filofax1961.jpg"} alt={"FiloFax From 1961"}
           style={{width: '30%', height: '500px'}}
      />
    </div>
    <p>
      And to a friend/unofficial tester, Doooneese 😭
    </p>
    <p className={"bg-dark p"}>
      <strong>Version:</strong>{' '}1.0.0
    </p>
  </>
);

export default About;
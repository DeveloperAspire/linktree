import "../index.css";
import React from "react";
import links from "./data";

function Home() {
  return (
    <div className="Wrapper">
      <div id="slack">Franklin Okolie</div>
      <div className="share">
        <img src="/img/share-dsk.svg" alt="" className="share-desktop" />
        <img src="/img/share-mob.svg" alt="" className="share-mobile" />
      </div>
      <div className="AviWrapper">
        <img src="/img/profile.jpg" alt="" id="profile__img" className="avi" />
        <img src="/img/hover-img.svg" alt="upload" className="upload" />
      </div>

      <h3 className="my-name">Franklin Okolie</h3>

      <div className="ButtonsWrapper">
        {links.map((link) => (
          <a href={link.link} id={link.id}>
            {link.anchor}
          </a>
        ))}
      </div>

      <div className="slack-git">
        <img src="/img/slack.svg" alt="" />
        <img src="/img/github.svg" alt="" />
      </div>

      <hr />

      <footer>
        <div>
          <img src="/img/zuri.svg" alt="Zuri" />
        </div>
        <div>
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div>
          <img src="/img/I4G.svg" alt="Ingressive4Good" />
        </div>
      </footer>
    </div>
  );
}

export default Home;

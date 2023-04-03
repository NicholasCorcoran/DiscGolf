import React from "react";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import { UserContext } from "../../context/user-context";
import classes from "./Home.module.css";
import { Card } from "../UI/Cards/Card";

export const Home = () => {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.div}>
          {ctx.formState ? <Login></Login> : <Signup></Signup>}
        </div>
        <div className={classes.about}>
          <h1>Chrono Disc Golf</h1>
          <div className={classes.card1}>
            <p>
              Chrono Disc Golf is an exciting social media platform designed
              specifically for disc golf enthusiasts. It provides a fun and
              engaging way for players to connect with each other, share their
              scores and favorite rounds, and showcase their skills and
              equipment.
            </p>
            <p>
              With Chrono Disc Golf, players can easily create scorecards for
              their rounds with friends and track their progress over time. They
              can also create a personal page to share their achievements,
              upload photos and videos, and connect with other players in the
              community.
            </p>
            <p>
              In addition to scorecards and personal pages, Chrono Disc Golf
              allows players to add their favorite rounds to their profile,
              enabling them to showcase their best performances and compare them
              with others in the community. Players can also share what discs
              are in their bag, helping them to discover new equipment and
              techniques to improve their game.
            </p>
            <p>
              Overall, Chrono Disc Golf is a must-have platform for anyone
              passionate about disc golf. Whether you're a seasoned player or
              just starting out, this platform offers a fun and engaging way to
              connect with others, track your progress, and take your game to
              the next level. So sign up today and start exploring all that
              Chrono Disc Golf has to offer!
            </p>
          </div>
          <h1>Creator</h1>
          <div className={classes.card2}>
            <h2>Nicholas Corcoran</h2>
            <p>
              I'm a skilled foreman with 6 years of experience in the
              landscaping industry. Despite my success in this field, I've
              always had a passion for web app and mobile app development and
              I'm eager to transition into this exciting field. As a landscaping
              foreman, I've honed my leadership and problem-solving skills. I've
              also taken the initiative to pursue self-study and online courses
              to develop my computer science skills further. For example, I've
              been taking react and CSS classes on Udemy. I'm confident that my
              work ethic, problem-solving skills, attention to detail, and
              creativity will translate well into a career in web app or mobile
              app development.
            </p>

            <p>
              I hold a Bachelor's degree in Computer Science from the University
              of Massachusetts Dartmouth. During my time at the university, I
              gained skills in git, react native, node, and agile work theory. I
              was an active member of the ACM club, where we discussed
              developments in the industry and worked through problems that we
              were facing in classes. I also held leadership roles in the
              Ultimate Frisbee club, where I honed my decision-making skills.
            </p>
            <p>
              I'm actively seeking opportunities to break into the web app or
              mobile app development industry, and I'm excited to contribute my
              unique perspective and skill set to a team. I welcome connections
              and conversations with other professionals in the field, and I'm
              committed to developing my coding skills further in react.js,
              TypeScript, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

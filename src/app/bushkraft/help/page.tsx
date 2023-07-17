import Image from "next/image";
import style from "./helpcenter.module.scss";

type questions = { id: number; question: string; content: string };

const questions: questions[] = [{ id: 0, question: "", content: "" }];

const HelpCenter = () => {
  return (
    <div className={style.help}>
      {questions.map((item) => (
        <section>
          <div>{/* <h3>{item.question}</h3> <Image src={} /> */}</div>
          <p>{item.content}</p>
        </section>
      ))}
    </div>
  );
};
export default HelpCenter;

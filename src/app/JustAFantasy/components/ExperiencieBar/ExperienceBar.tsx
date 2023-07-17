import style from "./experienciebar.module.scss";

const ExperienceBar = ({
  experiencie,
  totalExperiencie,
}: {
  experiencie: number;
  totalExperiencie: number;
}) => {
  const calculus = () => {
    return (experiencie / totalExperiencie) * 100;
  };

  return (
    <div className={style.experienciebar}>
      <p>
        {experiencie} / {totalExperiencie} ({calculus()}%)
      </p>
    </div>
  );
};
export default ExperienceBar;

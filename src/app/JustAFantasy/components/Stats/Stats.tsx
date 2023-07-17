const Stats = () => {
  return (
    <div>
      <h3>username</h3>
      <main>
        <p>Level: X</p>
        <p>Renown: X</p>
        <p>Credits: X</p>
        <p>Gold: X</p>
        <p>Mithril: X</p>
      </main>
      <div className="Attributes">
        <p>Health: current / currentMax</p>
        <p>Attack: current / currentMax</p>
        <p>Defense: current / currentMax</p>
        <p>Accuracy: current / currentMax</p>
        <p>Evasion: current / currentMax</p>
      </div>
      <div className="areas">
        <h2>Key areas</h2>
        <a href="#">Town</a>
        <a href="#">Mithril Lab</a>
        <a href="#">Bar</a>
        <a href="#">Blacksmith</a>
        <a href="#">Clan</a>
        <a href="#">???</a>
      </div>
    </div>
  );
};
export default Stats;

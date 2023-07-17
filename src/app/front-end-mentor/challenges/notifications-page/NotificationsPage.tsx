import style from "./notifications_page.module.scss";
type notifications = {
  name: string;
  content: string;
  post?: string;
  group?: string;
  picture?: string;
  img: string;
  read: boolean;
  date: string;
}[];

import avatar__mark_webber from "./assets/images/avatar-mark-webber.webp";
import avatar__angela_gray from "./assets/images/avatar-angela-gray.webp";
import avatar__anna_kim from "./assets/images/avatar-anna-kim.webp";
import avatar__jacob_thompson from "./assets/images/avatar-jacob-thompson.webp";
import avatar__kimberley_smith from "./assets/images/avatar-kimberly-smith.webp";
import avatar__nathan_peterson from "./assets/images/avatar-nathan-peterson.webp";
import avatar__rizky_hasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";

const notifications: notifications = [
  {
    name: "Mark Webber",
    content: "reacted to your recent post",
    post: "My first tournament today",
    img: avatar__mark_webber,
    read: false,
    date: "",
  },
  {
    name: "Angela Gray",
    content: "followed you",
    post: "My first tournament today",
    img: avatar__angela_gray,
    read: false,
    date: "",
  },
  {
    name: "Jacob Thompson",
    content: "has joined your group",
    group: "Chess Club",
    img: avatar__jacob_thompson,
    read: false,
    date: "",
  },
  {
    name: "Angela Gray",
    content: "sent you a private message",
    img: avatar__rizky_hasanuddin,
    read: false,
    date: "",
  },
  {
    name: "Kimberley Smith",
    content: "commented on your picture",
    img: avatar__kimberley_smith,
    read: false,
    date: "",
  },
  {
    name: "Nathan Peterson",
    content: "reacted to your recent post",
    post: "5 end-game strategies to increse your win rate",
    img: avatar__nathan_peterson,
    read: false,
    date: "",
  },
  {
    name: "Nathan Peterson",
    content: "left the group",
    group: "Chess Club",
    img: avatar__anna_kim,
    read: false,
    date: "",
  },
];

const NotificationsPage = () => {
  return (
    <div className={style.notifications_page}>
      <main>
        <div className={style.notifications}>
          <h2>
            Notifications <span>{3}</span>
          </h2>
        </div>
        <button>Mark all as read</button>
        {notifications.map((item, index) => (
          <div key={index} className={style.item}>
            <img src={item.img} />
            <p className={style.name}>{item.name}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
};
export default NotificationsPage;

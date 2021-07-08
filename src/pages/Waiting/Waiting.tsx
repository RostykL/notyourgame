import styles from './waiting.module.scss';

const {
  wrapper,
  participants,
  room_status,
  single_user,
  chat,
  chat_input,
  chat_messages,
} = styles;

function Waiting() {
  return (
    <>
      <div className={wrapper}>
        <header>
          <div className={participants}>
            {['Ростик'].map((user, i) => (
              <span className={single_user} key={i}>
                {user}
              </span>
            ))}
          </div>
          <div className={room_status}>
            <span>Адмін закінчує налаштування кімнати...</span>
          </div>
        </header>
        <div className={chat}>
          <div className={chat_messages}></div>
          <div className={chat_input}>
            <form>
              <input placeholder={'Введіть текст'} />
              <button>надіслати</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Waiting;

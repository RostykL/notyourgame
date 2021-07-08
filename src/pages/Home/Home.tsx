import styles from './home.module.scss';

// wrapper
// form_wrapper
const {
  wrapper,
  form_wrapper,
  heading,
  title,
  sub_title,
  choose_room,
  form,
  label,
  join_button,
} = styles;

function Home() {
  return (
    <div className={wrapper}>
      <div className={form_wrapper}>
        <div className={heading}>
          <h2 className={title}>Своя гра</h2>
        </div>
        <form className={form}>
          <label>
            <input placeholder={"Ім'я"} />
          </label>
          <div className={choose_room}>
            <button>Вибрати кімнату</button>
            <label className={label}>
              <input placeholder={'Пароль'} type={'password'} />
            </label>
          </div>
          <button type={'submit'} className={join_button}>
            Приєднатися
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

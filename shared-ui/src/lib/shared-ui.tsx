import styles from './shared-ui.module.scss';

export function SharedUi() {
  return (
    <div className={styles['container']}>
      <h1>
        Hello {"  "}
        <span role="img" aria-label="smiling face with smiling eyes">
          😊
        </span>
        !!!
      </h1>
      <h1>Welcome to SharedUi!</h1>
    </div>
  );
}

export default SharedUi;

import styles from "./myButton.module.css";
import cn from 'classnames'



interface IMyButtonProps {
  text?: string;
  isDanger?: boolean;
  type?: "button" | "submit" | "reset";
  func?: () => void;
}

function MyButton({
  func ,
  text = "Click",
  isDanger = false,
  type = "button",
}: IMyButtonProps) {
  return (
    <button
      onClick={func}
      className={cn(styles.btnCont, {[styles.btnContDanger]:isDanger,[styles.btnPrimary]:!isDanger})
        
        // `btn-cont ${isDanger ? `btn-cont-danger` : `btn-primary`}`
        }
      type={type}
    >
      {text}
    </button>
  );
}

export default MyButton;

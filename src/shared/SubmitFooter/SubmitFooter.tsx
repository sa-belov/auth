import Button from '../Button/Button'
import styles from './submitFooter.module.css'

interface IProps {
  onSubmit: () => void
  submitTitle: string
  errorMessage?: string
  loading?: boolean
}

const SubmitFooter = (props: IProps) => {
  const renderControls = () => {
    return (
      <>
        <span className="text--danger">{props.errorMessage ?? ''}</span>
        <Button styleType={'primary'} onClick={props.onSubmit}>
          {props.submitTitle}
        </Button>
      </>
    )
  }

  const renderLoader = () => {
    return <span className="text--success">Loading...</span>
  }

  return <div className={styles.submitFooter}>{props.loading ? renderLoader() : renderControls()}</div>
}

export default SubmitFooter

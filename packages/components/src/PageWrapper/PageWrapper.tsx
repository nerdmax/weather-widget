import * as React from "react"
import * as styles from "./PageWrapper.scss"

type PageWrapper = {
  leftComponent: JSX.Element
  rightComponent: JSX.Element
}

const PageWrapper = ({ leftComponent, rightComponent }: PageWrapper) => (
  <div className={styles.wrapper}>
    <div className={styles.left}>{leftComponent}</div>
    <div className={styles.divider} />
    <div className={styles.right}>{rightComponent}</div>
  </div>
)

export { PageWrapper }

import styles from '../../styles/components/Flow/Dashboard.module.css'
import Discover from './Graph';

export default function Dashboard() {
    return (
        <div className = {styles.container}>
            <h2> Dashboard </h2>
            <section className = {styles.graphs}>
                <div className = {styles.card}>
                    <Discover/>
                </div>
            </section>
            <section className = {styles.bars}>
            </section>
        </div>
    )
}

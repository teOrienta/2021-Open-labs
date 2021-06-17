import styles from '../../styles/components/Flow/Dashboard.module.css'
import Graph from './Graph';
import Chart from './Chart';

export default function Dashboard() {
    return (
        <div className = {styles.container}>
            <h2> Dashboard </h2>
            <section className = {styles.viewers}>
                <div className = {styles.card}>
                    <Graph/>
                </div>
                <div className = {styles.card}>
                    <Chart/>
                </div>
            </section>
            <section className = {styles.bars}>
            </section>

            <footer> 
                2021 teOrienta. Desafio Open Labs 2021
            </footer>
        </div>
    )
}

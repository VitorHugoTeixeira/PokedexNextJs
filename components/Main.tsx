import styles from '../styles/Main.module.css'

export default function Main() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-2/5 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-2/5 h-5/6 rounded-3xl shadow-2xl flex justify-start p-12">
                <h1 className={styles.titlePokedex}>Pokédex</h1>
            </div>
        </div>
    )
}
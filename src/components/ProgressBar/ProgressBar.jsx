import Container from "../Container/Container";

import { fetchAccountBalance } from '../../services/fetchAccountBalance';
import { useQuery } from '@tanstack/react-query';
import styles from './ProgressBar.module.css';

const formatBalance = (balance = 0) => {
	if (balance < 1000) {
		return balance.toString();
	} else {
		return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}
};

const ProgressBar = () => {
	const { data: balance } = useQuery(['accountBalance'], fetchAccountBalance, {
		refetchInterval: 60000,
	});

	const goal = '250 000';
	const width = balance > 100 ? `${Math.floor((balance / 250000) * 98)}%` : '0%';
	const formattedBalance = formatBalance(balance);

	return (
		<section id='goal' className={styles.goal}>
			<Container>
				<div className={styles.title}>Готуємось разом до нашої перемоги</div>
				<div className={styles.progress}>
					<div className={styles.container}>
						<div className={styles.textLeft}>
							<div className={styles.label}><span>Вже зібрано</span></div>
							<div className={styles.amount}><span>{`${formattedBalance || 0}`} грн</span></div>
						</div>
						<div className={styles.bar}>
							<div className={styles.border}>
								<div className={styles.cover}>
									<div className={styles.fill} style={{ width: width }}></div>
								</div>
							</div>
						</div>
						<div className={styles.textRight}>
							<div className={styles.label}><span>Наша мета</span></div>
							<div className={styles.amount}><span>{`${goal || 0}`} грн</span></div>
						</div>
					</div>
				</div>
			</Container>
		</section >
	);
};

export default ProgressBar;
import { useState } from 'react';
import styles from './App.module.css';

export function App() {
	const NUMBERS = [
		{ id: '001', number: 1 },
		{ id: '002', number: 2 },
		{ id: '003', number: 3 },
		{ id: '004', number: 4 },
		{ id: '005', number: 5 },
		{ id: '006', number: 6 },
		{ id: '007', number: 7 },
		{ id: '008', number: 8 },
		{ id: '009', number: 9 },
		{ id: '000', number: 0 },
	];

	let [currentNum1, setCurrentNum1] = useState('');
	let [currentNum2, setCurrentNum2] = useState('');
	let [currentAction, setCurrentAction] = useState('');
	let [isResultClick, setResultClick] = useState(false);

	const onClickNum1 = (event) => {
		setCurrentNum1((updatedNum1 = '') => updatedNum1 + event.target.innerHTML);
	};

	const onClickNum2 = (event) => {
		setCurrentNum2((updatedNum2 = '') => updatedNum2 + event.target.innerHTML);
	};

	const onClickAction = (event) => {
		setCurrentAction((updatedAction = '') => updatedAction + event.target.innerHTML);
		setResultClick(false);
	};

	const onClickReset = () => {
		setCurrentNum1('');
		setCurrentNum2('');
		setCurrentAction('');
		setResultClick(false);
	};

	const checkResult = () => {
		if (currentNum2) {
			if (currentAction === '+') {
				setCurrentNum1(
					Math.round((currentNum1 = Number(currentNum1) + Number(currentNum2))),
				);
				setCurrentNum2('');
				setCurrentAction('');
				setResultClick(!isResultClick);
			} else if (currentAction === '-') {
				setCurrentNum1(
					Math.round((currentNum1 = Number(currentNum1) - Number(currentNum2))),
				);
				setCurrentNum2('');
				setCurrentAction('');
				setResultClick(!isResultClick);
			}
		}
	};

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<div className={!isResultClick ? styles.display : styles.display__result}>
					{currentNum1 + currentAction + currentNum2}
				</div>
				<div className={styles.btn_container}>
					<ul className={styles.list_numbers}>
						{NUMBERS.map(({ id, number }) => (
							<li className={styles.item} key={id}>
								<button
									className={styles.btn_number}
									key={id}
									onClick={currentAction ? onClickNum2 : onClickNum1}
								>
									{number}
								</button>
							</li>
						))}
					</ul>
					<ul className={styles.list_actions}>
						<li className={styles.item_action}>
							<button className={styles.btn_action} onClick={onClickAction}>
								+
							</button>
						</li>
						<li className={styles.item_action}>
							<button className={styles.btn_action} onClick={onClickAction}>
								-
							</button>
						</li>
						<li className={styles.item_action}>
							<button
								className={styles.btn_action}
								onClick={checkResult}
								type="submit"
							>
								=
							</button>
						</li>
						<li className={styles.item_action}>
							<button
								className={styles.btn_action}
								onClick={onClickReset}
								type="reset"
							>
								C
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

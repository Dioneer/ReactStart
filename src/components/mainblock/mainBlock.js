import TodoList from '../todo/todoUl.js';
import OppurtUl from "../opportunity/opporUl.js";
import TodoVriables from "../todo/todoVar.js";
import TodoLoader from "../loader/loader.js";
import Calendar from '../calendar/calendar.js';
import Canvas from '../canvas/canvas.js';
import Modal from '../modal/modal.js';
import './mainblock.css';
import classNames from "classnames";
import Error from '../error/error.js';
import { useTranslation } from "react-i18next";
import { useMainBlock } from './usemainBlock.js';

function MainBlock() {
	const { cahngeDayOfToDoPrev, cahngeDayOfToDoNext, subtitle, error, title, backEndDate, commonClasses, loading, textContent } = useMainBlock();
	const { t } = useTranslation();

	return (
		<div className='page'>
			<aside className="aside">
				<div className="aside__title title">{t("main.opportunitytr")}</div>
				<OppurtUl></OppurtUl>
			</aside>
			<div className={classNames("content", { active: commonClasses })}>
				<div className="content__container">
					<h1
						className="content__title title">{t("main." + title)}</h1>
					<Modal title={t('main.canvas')}><Canvas></Canvas></Modal>
					<Modal title={t('main.calendar')}><Calendar></Calendar></Modal>
				</div>
				<TodoVriables></TodoVriables>
				<div className="page__controll">
					<span
						className="text-4xl text-zinc-800 hover:scale-125"
						onClick={cahngeDayOfToDoNext}>{'<'}</span>
					<h1 className="page__title title">{t(subtitle(backEndDate))}</h1>
					<span
						className="text-4xl text-zinc-800 hover:scale-125"
						onClick={cahngeDayOfToDoPrev}>{'>'}</span>
				</div>
				{loading && <TodoLoader></TodoLoader>}
				{error && <Error error={error}></Error>}
				{(textContent.length && !error) ? < TodoList ></ TodoList> : loading || error ? null : <div className='lazy'>{t("main.сongratulations")}</div>}
			</div >
		</div >
	)
}

export default MainBlock;
import { Suspense, lazy } from "react";
import { useAppContext } from '../context.js';
import Loading from '../loader/loader.js';

const AddToDo = lazy(() => import('./addTodo.js'));

function TodoVriables() {
	const { addTodo } = useAppContext();

	return (
		<div className={"content__add"}>
			<Suspense fallback={<Loading></Loading>}>
				<AddToDo onCreate={addTodo}></AddToDo>
			</Suspense>
		</div >
	)
}
export default TodoVriables;
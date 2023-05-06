import React, { useContext, Suspense, lazy } from "react";
import Context from '../../context.js';
import Loading from '../../loader/loader.js';
const AddToDo = lazy(() => import('./addTodo.js'));

function TodoVriables() {
	const { addTodo } = useContext(Context);

	return (
		<div className={"content__add"}>
			<div>
				<Suspense fallback={<Loading></Loading>}>
					<AddToDo onCreate={addTodo}></AddToDo>
				</Suspense>
			</div>
		</div >
	)
}
export default TodoVriables;
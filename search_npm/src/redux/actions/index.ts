import { ActionType } from '../action-types';

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES,
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[],
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR,
    payload: string,
}

export type Action =
 | SearchRepositoriesAction
 | SearchRepositoriesSuccessAction
 | SearchRepositoriesErrorAction;

// 사용하는 action들에 대한 타입 정의를 한다.
// 여기서 정의한 Action은 action-creators에서 Dispatch<Action>으로 들어가게 된다.
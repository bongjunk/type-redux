import axios, { AxiosError } from 'axios';
import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export default searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        // 검색시 (onSubmit에서 처리) 액션
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
        });

        try {
            const { data } = await axios.get(
                "https://registry.npmjs.org/-/v1/search",
                {
                    params: {
                        text: term,
                    },
                }
            );
            
            const names = data.objects.map((results: any) => results.package.name);
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            });
        } catch (err: AxiosError | unknown) { // error 타입을 정의. 기본적으로 onknown은 추가해야 ts에러가 발생하지 않음.
            if (axios.isAxiosError(err)) { // type-guard로 axios관련 Error만 처리한다.
                dispatch({ // 실패시 액션
                    type: ActionType.SEARCH_REPOSITORIES_ERROR,
                    payload: err.message,
                });
            } else { // 나머지 에러를 처리
                console.log('Not AxiosError');
                console.log(err);
            }
        }
    };
};
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
}

// bindActionCreators는 action-creators와 dispatch를 연결시켜주는 역할
// 필수는 아니지만 SearchRepositories에서 dispatch(action)을 간결하게 사용하기 위해 사용
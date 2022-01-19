import React, { useState, FC } from 'react';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useTypedSelector';

// 화면에 보이는 component (search 역할)
const SearchRepositoriesList: FC = () => {
    const [term, setTerm] = useState('');
    const { data, loading, error } = useAppSelector((state) => state.repositories); // type을 붙인 custom useSelector을 사용한다.
    const { searchRepositories } = useActions();
    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        searchRepositories(term); // sumbit시에 특정 action을 dispatch한다.
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={onChange} />
                <button>Search</button>
            </form>
            <ul>{!loading && data.map((name) => <li key={name}>{name}</li>)}</ul>
            {error && <h3>{error}</h3>} // error 테스트는 개발자도구 Network 탭에서 offline으로 설정하여 테스트한다.
        </>
    );
}

export default SearchRepositoriesList;
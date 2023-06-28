import { AppStateKey, ReduxStoreWithManager } from 'app/providers/StoreProvider/config/appState';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { useEffect } from 'react';

export type ReducersList = {
    [name in AppStateKey]?: Reducer
}

type ReducersListEntry = [AppStateKey, Reducer]

interface IUseDynamicModuleLoad {
    reducers: ReducersList
    removeAfterUnmount?: boolean

}

export function useDynamicModuleLoad(payload: IUseDynamicModuleLoad) {
    const { reducers, removeAfterUnmount } = payload;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]:ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT_${name}_REDUCER` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]:ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY_${name}_REDUCER` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

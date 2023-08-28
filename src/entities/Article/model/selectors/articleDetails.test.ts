import { AppState } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<AppState> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as AppState)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<AppState> = {};
        expect(getArticleDetailsData(state as AppState)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<AppState> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as AppState)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<AppState> = {};
        expect(getArticleDetailsError(state as AppState)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<AppState> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as AppState)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<AppState> = {};
        expect(getArticleDetailsIsLoading(state as AppState)).toEqual(false);
    });
});

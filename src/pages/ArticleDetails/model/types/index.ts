import { ArticleDetailsCommentsState } from './ArticleDetailsCommentsState';
import { ArticleDetailsRecommendationsState } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageState {
    comments: ArticleDetailsCommentsState;
    recommendations: ArticleDetailsRecommendationsState;
}

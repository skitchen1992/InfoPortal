import { screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { componentRender } from 'shared/lib/componentRender/componentRender';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });
});

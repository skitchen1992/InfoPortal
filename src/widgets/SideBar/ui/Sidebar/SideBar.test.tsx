import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { componentRender } from 'shared/lib/componentRender/componentRender';

describe('Sidebar', () => {
    test('Test render', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });

    test('Test collapsed', () => {
        componentRender(<SideBar />);
        const SideBarButton = screen.getByTestId('SideBarButton');
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
        fireEvent.click(SideBarButton);
        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
        screen.debug();
    });
});

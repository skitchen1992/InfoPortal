import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';

describe('Sidebar', () => {
    test('Test render', () => {
        render(<SideBar />);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });

    test('Test collapsed', () => {
        render(<SideBar />);
        const SideBarButton = screen.getByTestId('SideBarButton');
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
        fireEvent.click(SideBarButton);
        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
        screen.debug();
    });
});
